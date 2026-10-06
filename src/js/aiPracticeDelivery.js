export const AI_DELIVERY_VERSION = 'delivery-observations-v1';
export const DELIVERY_SCHEMA = {type:'object',additionalProperties:false,properties:{
  audibility:{type:'string',enum:['clear','limited','unusable']},
  observations:{type:'array',maxItems:2,items:{type:'object',additionalProperties:false,properties:{
    dimension:{type:'string',enum:['pace','pauses','intonation','volume']},description:{type:'string'}},required:['dimension','description']}},
  strength:{type:'string'},adjustment:{type:'string'},limitation:{type:'string'}
},required:['audibility','observations','strength','adjustment','limitation']};

export function validateDelivery(value) {
  if (!value || Object.keys(value).some(key=>!DELIVERY_SCHEMA.required.includes(key))
    || !['clear','limited','unusable'].includes(value.audibility) || !Array.isArray(value.observations) || value.observations.length>2
    || value.observations.some(item=>!item || Object.keys(item).some(key=>!['dimension','description'].includes(key))
      || !['pace','pauses','intonation','volume'].includes(item.dimension) || typeof item.description!=='string' || !item.description.trim() || item.description.length>450)
    || ['strength','adjustment','limitation'].some(key=>typeof value[key]!=='string' || value[key].length>600)
    || (value.audibility==='clear' && (!value.strength.trim() || !value.adjustment.trim()))) throw new Error('delivery_unavailable');
  return value;
}

// Fixed mono PCM16 at 16 kHz keeps a 90s attempt below 3MB. The server derives
// duration from these bytes rather than trusting browser-provided timings.
export function encodePracticeWav(samples, sourceRate) {
  if (!samples?.length || !Number.isFinite(sourceRate) || sourceRate<8000 || sourceRate>192000
    || samples.length/sourceRate>90.5) throw new Error('invalid_audio');
  const rate=16000, length=Math.floor(samples.length/sourceRate*rate);
  const bytes=new Uint8Array(44+length*2),view=new DataView(bytes.buffer);
  const label=(offset,text)=>{for(let i=0;i<text.length;i++)view.setUint8(offset+i,text.charCodeAt(i));};
  label(0,'RIFF');view.setUint32(4,bytes.length-8,true);label(8,'WAVE');label(12,'fmt ');
  view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,1,true);view.setUint32(24,rate,true);
  view.setUint32(28,rate*2,true);view.setUint16(32,2,true);view.setUint16(34,16,true);label(36,'data');view.setUint32(40,length*2,true);
  for(let i=0;i<length;i++) {
    // Average a source interval to reduce aliasing when downsampling.
    const start=Math.floor(i*sourceRate/rate),end=Math.min(samples.length,Math.max(start+1,Math.floor((i+1)*sourceRate/rate)));
    let sum=0;for(let j=start;j<end;j++)sum+=Number.isFinite(samples[j])?samples[j]:0;
    const value=Math.max(-1,Math.min(1,sum/(end-start)));view.setInt16(44+i*2,Math.round(value*(value<0?32768:32767)),true);
  }
  return bytes;
}

export async function preparePracticeWav(blob) {
  const Context=window.AudioContext || window.webkitAudioContext;
  if (!Context) throw new Error('audio_conversion_unavailable');
  const context=new Context();
  try {
    const decoded=await context.decodeAudioData(await blob.arrayBuffer());
    const mono=new Float32Array(decoded.length);
    for(let channel=0;channel<decoded.numberOfChannels;channel++) {
      const samples=decoded.getChannelData(channel);
      for(let i=0;i<mono.length;i++)mono[i]+=samples[i]/decoded.numberOfChannels;
    }
    return new Blob([encodePracticeWav(mono,decoded.sampleRate)],{type:'audio/wav'});
  } catch(error) {throw new Error(error.message==='invalid_audio'?error.message:'audio_conversion_unavailable');}
  finally {await context.close().catch(()=>{});}
}

export function practiceAudioMetrics(bytes,text) {
  if (!(bytes instanceof Uint8Array) || bytes.length<32044 || bytes.length>2900000) throw new Error('invalid_audio');
  const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
  const label=offset=>String.fromCharCode(...bytes.slice(offset,offset+4));
  if(label(0)!=='RIFF'||label(8)!=='WAVE'||label(12)!=='fmt '||label(36)!=='data'
    || view.getUint32(4,true)!==bytes.length-8 || view.getUint32(16,true)!==16 || view.getUint16(20,true)!==1
    || view.getUint16(22,true)!==1 || view.getUint32(24,true)!==16000 || view.getUint32(28,true)!==32000
    || view.getUint16(32,true)!==2 || view.getUint16(34,true)!==16 || view.getUint32(40,true)!==bytes.length-44
    || (bytes.length-44)%2!==0) throw new Error('invalid_audio');
  const seconds=(bytes.length-44)/32000;
  if(seconds<1||seconds>90.5) throw new Error('invalid_audio');
  const words=(text.match(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu)||[]).length;
  return {durationSeconds:Math.round(seconds*10)/10,wordsPerMinute:Math.round(words/seconds*60),estimatedFromTranscript:true};
}
