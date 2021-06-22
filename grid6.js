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
    ], [
        'airfoil',
        'betwixt',
        'bivalves',
        'blowhole',
        'campsites',
        'cloakroom',
        'cornstarch',
        'distinct',
        'flywheel',
        'forecasts',
        'foxglove',
        'framework',
        'goldsmith',
        'graybeards',
        'helmsman',
        'homestretch',
        'horseflesh',
        'larkspur',
        'larynx',
        'moonstruck',
        'newborns',
        'newsgroup',
        'oilfields',
        'snakelike',
        'squinting',
        'starcraft',
        'strangely',
        'strongman',
        'succinct',
        'thankyou',
        'transform',
        'unmixed',
        'westbound',
        'workplace',
        'worthwhile',
        'yearlong'
    ], [
        'bluejay',
        'clotheshorse',
        'cloudburst',
        'conscript',
        'conscript',
        'discounts',
        'drywall',
        'fairbanks',
        'fivefold',
        'flimflam',
        'foxhound',
        'goldfinch',
        'grassroots',
        'hailstorm',
        'hugest',
        'jetstream',
        'landsman',
        'malformed',
        'northbound',
        'poundstone',
        'roundtree',
        'schoolroom',
        'scornful',
        'sinkhole',
        'springboard',
        'sprucing',
        'squarely',
        'stoneware',
        'streetwise',
        'strictest',
        'unchanged',
        'waldorf',
        'wildcard',
        'windswept',
        'wolfram',
        'woodrow'
    ], [
        'blankly',
        'bratwurst',
        'clampdown',
        'dextrose',
        'entranced',
        'farmyard',
        'feldspar',
        'flagstaff',
        'greyhound',
        'headstrong',
        'homework',
        'hornbills',
        'inkblot',
        'jukebox',
        'lifelong',
        'makeshift',
        'newsflash',
        'posthole',
        'pretext',
        'rebounds',
        'scarecrow',
        'shortstop',
        'skyway',
        'snowshoe',
        'spillway',
        'springtime',
        'stagecoach',
        'storeroom',
        'strangeness',
        'subgroups',
        'tofu',
        'warehoused',
        'witchcraft',
        'workbench',
        'worldwide',
        'yourself'
    ], [
        'bankcards',
        'blacksmith',
        'bracelets',
        'churchyard',
        'cleveland',
        'clockwork',
        'culex',
        'disgorged',
        'firestorm',
        'frankly',
        'groundhog',
        'horseplay',
        'jokester',
        'legumes',
        'longworth',
        'mainstream',
        'markdowns',
        'menswear',
        'offspring',
        'oomph',
        'outflow',
        'plainclothes',
        'quotient',
        'smoothly',
        'solvents',
        'sprawling',
        'stepchild',
        'strasburg',
        'strongly',
        'subtext',
        'transverse',
        'upstarts',
        'washroom',
        'wolfman',
        'wordsmith',
        'wormwood'
    ], [
        'abstract',
        'brainchild',
        'brickyard',
        'conquest',
        'cornfield',
        'downdraft',
        'elkhorn',
        'flashpoint',
        'frostbite',
        'gladstone',
        'glimpses',
        'goalpost',
        'hairspray',
        'homegrown',
        'huntsman',
        'lakefront',
        'lingua',
        'midwives',
        'milkshake',
        'nehru',
        'ourselves',
        'paintbrush',
        'ramparts',
        'roomful',
        'schoolhouse',
        'scrivener',
        'shortwave',
        'snowbound',
        'spadework',
        'steadfast',
        'swordplay',
        'townsfolk',
        'trowel',
        'voodoo',
        'wildwood',
        'wiretaps'
    ], [
        'adjunct',
        'almonds',
        'barnyard',
        'bluejeans',
        'brushfire',
        'childlike',
        'clearly',
        'diverged',
        'drumstick',
        'eavesdrop',
        'firewall',
        'folklore',
        'frankness',
        'glassware',
        'henceforth',
        'longlegs',
        'midstream',
        'moving',
        'nobler',
        'offshore',
        'plywood',
        'portents',
        'profuse',
        'rewind',
        'rooftree',
        'shakespeare',
        'slapstick',
        'spaceport',
        'stockroom',
        'streetcar',
        'swiftness',
        'twiddling',
        'upstaged',
        'warmest',
        'washcloth',
        'withstood'
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

function getCellFromLonLat(lon, lat, level) {
    /*
     * Return the grid cell code that contains a point, given as decimal
     * degress of latitude and longitude, at the given grid level.
     */
    var origin = [-180, -90];
    var step = 45;
    var rows = 4;
    var cols = 8;
    var x = 0;
    var y = 0;
    var index = 0;
    var result = '';
    for (var i = 0; i < level; i++) {
        x = Math.floor((lon - origin[0]) / step);
        y = Math.floor((lat - origin[1]) / step);

        x = Math.min(Math.max(x, 0), cols);
        y = Math.min(Math.max(y, 0), rows);

        index = y * cols + x;
        result += CODE[index];

        if (i == 0) {
            rows = 6;
            cols = 6;
        }

        step = step / cols;
        origin = getCellOrigin(result);
    }
    return result;
}

function getCellWordArray(code) {
    /*
     * Return an array of words to identify the given grid cell, to a maximum
     * of 9 levels of precision.
     */
    var result = [];
    var len = Math.min(code.length, 9);

    for (var i = 0; i < len; i++) {
        var j = CODE.indexOf(code[i]);
        if (j < 0) {
            throw `Invalid code character ${code[i]}.`;
        }
        result.push(WORDS[i][j]);
    }
    return result;
}

function getCellWords(code) {
    /*
     * Return a word string to identify the given grid cell, to a maximum of 9
     * levels of precision.
     */
    return getCellWordArray(code).join('//');
}
