var Hlsm3u8 = require('./index');

const sampleStreamInfoText = '#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=2215351,BANDWIDTH=2266597,CODECS="avc1.640020,mp4a.40.2",RESOLUTION=960x540,FRAME-RATE=59.940,CLOSED-CAPTIONS="cc1",AUDIO="aud1",SUBTITLES="sub1"';
var hlsm3u8 = new Hlsm3u8();
var attrs = hlsm3u8.streamInfoAttrs(sampleStreamInfoText);

console.log(JSON.stringify(attrs));
