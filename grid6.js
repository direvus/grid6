const CODE = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789-=+*';
const BASE_STEP = 45;
const WORDS = [
    [
        'barnstorm',
        'conscripts',
        'corkscrew',
        'cornfields',
        'emu',
        'extinct',
        'firstborn',
        'flatlands',
        'foursquare',
        'grindstone',
        'groundswell',
        'haywire',
        'humane',
        'juju',
        'lukewarm',
        'northwest',
        'outflanked',
        'phalanx',
        'playhouse',
        'rustproof',
        'schoolwork',
        'scraggly',
        'smokescreen',
        'spendthrift',
        'sportswear',
        'starstruck',
        'strongest',
        'thresholds',
        'transfixed',
        'werewolf',
        'wildflowers',
        'windstorm'
    ], [
        'abstracts',
        'blindfold',
        'breastplate',
        'clarksville',
        'contexts',
        'cornhusks',
        'cornwall',
        'dwarfing',
        'flashcards',
        'flintstone',
        'foolproof',
        'gangplank',
        'handclasp',
        'hoho',
        'hookworm',
        'jaywalk',
        'landforms',
        'longshore',
        'maelstrom',
        'outflank',
        'outstretched',
        'purview',
        'schoolyard',
        'spacecraft',
        'splurging',
        'standstill',
        'strangest',
        'strictly',
        'swimwear',
        'throughway',
        'translates',
        'withholds',
        'woolworth',
        'workroom',
        'yangtze',
        'yourselves'
    ], [
        'airflow',
        'backstroke',
        'bloodstream',
        'bookshelves',
        'bridegroom',
        'clydesdale',
        'crankshaft',
        'dreamworld',
        'ensconced',
        'forsworn',
        'freeware',
        'furor',
        'goldstone',
        'groundwork',
        'hallmarks',
        'hijinks',
        'hugely',
        'longbow',
        'nightstand',
        'outskirts',
        'postscript',
        'rearm',
        'ridgeway',
        'schoolchild',
        'scrounging',
        'skinflint',
        'springfield',
        'staunchest',
        'stockholm',
        'stonehenge',
        'sweatpants',
        'therefore',
        'wellspring',
        'wildlife',
        'woodward',
        'zeitgeist'
    ]
];

function getCellOrigin(code) {
    /*
     * Return the origin point (southwest corner) for the given cell code, as
     * a [lon, lat] array.
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

function getCellBounds(code) {
    /*
     * Return the bounding latitudes and longitudes for the given cell code, as
     * an array of four numbers.  The bounds are given with the western
     * longitude first, followed by the southern latitude, the eastern
     * longitude, and finally the northern latitude.  Or, if you prefer:
     * [x0, y0, x1, y1].
     */
    var origin = getCellOrigin(code);
    var step = BASE_STEP / (6 ** (code.length - 1));
    return [
        origin[0],
        origin[1],
        origin[0] + step,
        origin[1] + step
    ];
}

function getCellGeometry(code) {
    /*
     * Return the bounding polygon for the given cell code, as an array of four
     * [lon, lat] coordinate pairs.  The coordinates are given starting from
     * the southwest corner, continuing anti-clockwise.
     */
    var bounds = getCellBounds(code);
    return [
        [bounds[0], bounds[1]],
        [bounds[2], bounds[1]],
        [bounds[2], bounds[3]],
        [bounds[0], bounds[3]]
    ];
}

function getCellFromLatLon(lat, lon, level) {
    /*
     * Return the grid cell that contains a point, given as decimal degress of
     * latitude and longitude, at the given grid level.
     */
    // TODO
}

function getCellCodewords(code) {
    /*
     * Return an array of code words to identify the given grid cell.
     */
    // TODO
}
