// One owner for audio and the microphone; leaving a screen always releases both.
export function createPracticeAudio({api, changed = () => {}, failed = () => {}}) {
  let generation = 0, audio = null, objectUrl = null, controller = null;
  let recorder = null, stream = null, timer = null, recordingDone = null, playing = false, loading = false;
  function stop() {
    generation++; controller?.abort(); controller = null;
    audio?.pause(); audio = null;
    if (objectUrl) URL.revokeObjectURL(objectUrl); objectUrl = null;
    window.speechSynthesis?.cancel(); playing = false; loading = false;
    clearTimeout(timer); timer = null;
    const active = recorder; recorder = null;
    if (active?.state === 'recording') active.stop();
    stream?.getTracks().forEach(track => track.stop()); stream = null;
    recordingDone?.(null); recordingDone = null; changed();
  }
  async function play({text, role, languageId, mode, payload}) {
    stop(); const id = generation;
    if (mode === 'demo') {
      playing = true; changed();
      if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {playing = false; changed(); throw new Error('audio_unavailable');}
      const utterance = new SpeechSynthesisUtterance(text); utterance.lang = languageId === 'no' ? 'nb-NO' : 'en-US';
      const voices = speechSynthesis.getVoices().filter(voice => voice.lang.toLowerCase().startsWith(languageId === 'no' ? 'nb' : 'en'));
      utterance.voice = voices[role === 'client' ? 0 : 1] ?? voices[0] ?? null;
      utterance.rate = role === 'client' ? .92 : 1;
      utterance.onend = () => {if (id === generation) {playing = false; changed();}};
      utterance.onerror = event => {if (id === generation) {stop(); if (!['canceled', 'interrupted'].includes(event.error)) failed(new Error('audio_unavailable'));}};
      speechSynthesis.speak(utterance); return;
    }
    controller = new AbortController(); loading = true; changed();
    try {
      const blob = await api.speech(payload, controller.signal);
      if (id !== generation) return;
      objectUrl = URL.createObjectURL(blob); audio = new Audio(objectUrl);
      audio.onended = () => {if (id === generation) stop();};
      audio.onerror = () => {if (id === generation) {stop(); failed(new Error('audio_unavailable'));}};
      await audio.play();
      if (id === generation) {loading = false; playing = true; changed();}
    } catch (error) {if (id === generation) {stop(); throw error;}}
  }
  async function record() {
    stop(); const id = generation;
    if (!window.MediaRecorder || !navigator.mediaDevices?.getUserMedia) throw new Error('microphone_unavailable');
    let media;
    try {media = await navigator.mediaDevices.getUserMedia({audio: {echoCancellation: true, noiseSuppression: true}});}
    catch {throw new Error('microphone_denied');}
    if (id !== generation) {media.getTracks().forEach(track => track.stop()); return null;}
    stream = media;
    const mimeType = ['audio/webm;codecs=opus', 'audio/mp4', 'audio/webm'].find(type => MediaRecorder.isTypeSupported(type));
    try {recorder = new MediaRecorder(stream, mimeType ? {mimeType} : {});} catch {stop(); throw new Error('microphone_unavailable');}
    const current = recorder, chunks = []; let size = 0;
    const result = new Promise(resolve => {recordingDone = resolve;});
    current.ondataavailable = event => {if (event.data.size) {chunks.push(event.data); size += event.data.size; if (size > 5800000) finishRecording();}};
    current.onerror = () => stop();
    current.onstop = () => {
      if (id !== generation) return;
      clearTimeout(timer); timer = null; recorder = null;
      stream?.getTracks().forEach(track => track.stop()); stream = null;
      const resolve = recordingDone; recordingDone = null;
      resolve?.(size && size <= 6000000 ? new Blob(chunks, {type: current.mimeType}) : null); changed();
    };
    current.start(500); timer = setTimeout(finishRecording, 90000); changed(); return result;
  }
  function finishRecording() {if (recorder?.state === 'recording') recorder.stop();}
  document.addEventListener('visibilitychange', () => {if (document.hidden) stop();});
  window.addEventListener('pagehide', stop);
  return {play, record, finishRecording, stop, isRecording: () => recorder?.state === 'recording', isPlaying: () => playing, isLoading: () => loading};
}
