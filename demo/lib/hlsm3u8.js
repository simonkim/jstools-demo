function Hlsm3u8() {
}

Hlsm3u8.prototype.streamInfoAttrs = function(input) {
    var result = [];
    const re = /#EXT-X-STREAM-INF:([^\n\r]*)/g;
    var match = re.exec(input);
    if ( match ) {
        const re2 = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g;
        var input2 = match[1];
        var match2;
        while( (match2 = re2.exec(input2)) !== null ) {
            var attr = match2[1];
            var value = match2[2];
            result.push( {attr: match2[1], value: match2[2]});
        }
    }    
    return result;
}


module.exports = Hlsm3u8;
