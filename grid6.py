#!/usr/bin/env python3
"""Grid6 is a discrete global grid system with unamiguous cell codes.

https://github.com/direvus/grid6
"""
import math


CODE = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789-=+*'
BASE_STEP = 45
WORDS = [
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
]


def get_cell_origin(code):
    """Return the origin point for the given cell code.

    Arguments:
    code: An iterable of code symbols.

    Returns:
    A 2-element list of [lon, lat] for the cell origin

    The origin of a cell is its southwest corner.
    """
    lon = -180
    lat = -90

    for i, ch in enumerate(code):
        index = CODE.index(ch)

        if i == 0:
            if index >= 32:
                raise ValueError(f"Invalid code character {ch} for grid level 0, must be in the range A .. 9")
            cols = 8
        else:
            cols = 6

        lon += (index % cols) * BASE_STEP / (6 ** i)
        lat += math.floor(index / cols) * BASE_STEP / (6 ** i)
    return [lon, lat]


def get_cell_bounds(code):
    """Return the bounding latitudes and longitudes for the given cell code.

    The result is a list of four numbers.  The bounds are given with the
    western longitude first, followed by the southern latitude, the eastern
    longitude, and finally the northern latitude.  Or, if you prefer:
    [x0, y0, x1, y1].
    """
    origin = get_cell_origin(code)
    step = BASE_STEP / (6 ** (len(code) - 1))
    return [
        origin[0],
        origin[1],
        origin[0] + step,
        origin[1] + step]


def get_cell_geometry(code):
    """Return the bounding polygon for the given cell code.

    The result is a list of four [lon, lat] coordinate pairs.  The
    coordinates are given starting from the southwest corner, continuing
    anti-clockwise.
    """
    bounds = get_cell_bounds(code)
    return [
        [bounds[0], bounds[1]],
        [bounds[2], bounds[1]],
        [bounds[2], bounds[3]],
        [bounds[0], bounds[3]]]


def get_cell_from_lon_lat(lon, lat, level):
    """Return the grid cell code for a given point geography.

    Arguments:
    lon: longitude of the point, as a number
    lat: latitude of the point, as a number
    level: the grid level of the cell to return

    Returns:
    A code reference to the requested cell.
    """
    origin = [-180, -90]
    step = 45.0
    rows = 4
    cols = 8
    x = 0
    y = 0
    index = 0
    result = ''
    for i in range(level):
        x = math.floor((lon - origin[0]) / step)
        y = math.floor((lat - origin[1]) / step)

        x = min(max(x, 0), cols)
        y = min(max(y, 0), rows)

        index = y * cols + x
        result += CODE[index]

        if i == 0:
            rows = 6
            cols = 6

        step = step / cols
        origin = get_cell_origin(result)
    return result


def get_cell_word_list(code):
    """Return a list of words to identify the given grid cell.

    Arguments:
    code: An iterable of code symbols.

    Returns:
    A list of strings.

    Cell words will cover to a maximum of 9 grid levels.
    """
    result = []
    for i, ch in enumerate(code[:9]):
        j = CODE.index(ch)
        result.append(WORDS[i][j])
    return result


def get_cell_words(code):
    """Return a word string to identify the given grid cell.

    Arguments:
    code: An iterable of code symbols.

    Returns:
    string

    Cell words will cover to a maximum of 9 grid levels.
    """
    return '//'.join(get_cell_word_list(code))
