// USD rates checked against official OpenAI pricing on 10 October 2026.
// Usage is provider-reported where available; voice synthesis remains an estimate.
export function aiUsageCost({action,model,usage,characters=0}) {
  const n=value=>Number.isFinite(value)&&value>=0?Math.round(value):0;
  const input=n(usage?.input_tokens??usage?.prompt_tokens),output=n(usage?.output_tokens??usage?.completion_tokens);
  const audio=n(usage?.prompt_tokens_details?.audio_tokens),cached=n(usage?.input_tokens_details?.cached_tokens??usage?.prompt_tokens_details?.cached_tokens);
  const writes=n(usage?.input_tokens_details?.cache_write_tokens);
  let cost=null,estimated=false;
  if(action==='transcribe'&&usage?.type==='duration'&&Number.isFinite(usage.seconds))cost=usage.seconds/60*.0045;
  else if(model?.startsWith('gpt-6.1-sol')&&usage)cost=(Math.max(0,input-cached-writes)*2+cached*.1+writes*2.5+output*10)/1e6;
  else if(model?.startsWith('gpt-audio-1.5')&&usage)cost=(audio*32+Math.max(0,input-audio)*2.5+output*10)/1e6;
  else if(model?.startsWith('gpt-4o-mini-tts')){cost=characters/900*.015;estimated=true;}
  return {input_tokens:input,output_tokens:output,audio_input_tokens:audio,cached_input_tokens:cached,cache_write_tokens:writes,
    cost_usd:cost===null?null:Math.round(cost*1e8)/1e8,estimated};
}
