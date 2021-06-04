const CODE = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789-=+*';
const BASE_STEP = 45;

function getCellOrigin(code) {
    /*
     * Return the origin point (southwest corner) for the given cell code, as
     * an array of [lon, lat].
     */
    var lon = -180;
    var lat = -90;

    for (var i = 0; i < code.length; i++) {
        var char = code[i];
        var index = CODE.indexOf(char);

        if (index < 0) {
            throw `Invalid code character ${char}.`;
        }

        var rows = 6;
        var cols = 6;

        if (i == 0) {
            if (index >= 32) {
                throw `Invalid code character ${char} for grid level 0, must be in the range A .. 9`;
            }
            rows = 4;
            cols = 8;
        }
        lon += (index % cols) * BASE_STEP / (6 ** i);
        lat += Math.floor(index / cols) * BASE_STEP / (6 ** i);
    }
    return [lon, lat];
}
