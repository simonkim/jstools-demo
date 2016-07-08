
if( typeof Hlsm3u8 === 'undefined' ) {
    var Hlsm3u8 = require('../index');
}  

describe("Hlsm3u8", function () {  
    var hlsm3u8;

    beforeEach(function () {
        hlsm3u8 = new Hlsm3u8();
    });
    
    it("returns empty array without input", function () {
        var result = hlsm3u8.streamInfoAttrs();
        expect(result.length).toBe(0);
    });
    it("parses out 8 attributes from sample stream info", function () {
        const streaminfoText = '#EXT-X-STREAM-INF:AVERAGE-BANDWIDTH=2215351,BANDWIDTH=2266597,CODECS="avc1.640020,mp4a.40.2",RESOLUTION=960x540,FRAME-RATE=59.940,CLOSED-CAPTIONS="cc1",AUDIO="aud1",SUBTITLES="sub1"';
        var result = hlsm3u8.streamInfoAttrs(streaminfoText);
        expect(result.length).toBe(8);
        expect(result[7].attr).toBe('SUBTITLES');
        expect(result[0].value).toBe('2215351');
    });
});