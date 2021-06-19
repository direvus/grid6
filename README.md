# Grid6

A grid reference system with unambiguous cell codes.

Grid6 is a system for dividing the surface of the Earth [1] into a series of grid
cells.  Each cell is then further divided into subcells, and those subcells are
divided again, and so on.  You can divide the cells as many times as you need
to achieve a desired level of precision.

The actual size of a grid cell depends on its latitude, but as a rough ballpark
figure, a 7th-level grid cell will be approximately 100m × 100m.

Grid6 is similar to many other existing grid schemes, but has a particular
focus on producing cell codes that can be communicated without ambiguity.
There are two ways to refer to a cell:

- compact alphanumeric, e.g. `RHM3YE6`
- codewords

In both cases, the words and symbols are carefully chosen so that it would be
very unlikely to confuse one symbol for another at the same grid level,
regardless of whether the cell reference is communicated via a written or
acoustic medium.

[1] But really, you could use it on any planet you like.

## Details

### Grid system

This is a **hierarchical discrete global grid** over the reference ellipsoid.

It is **not** an equal-area grid.  That is, each individual grid cell within a
given level of precision does not have an equal surface area.  The actual
surface area of a grid cell will increase as it approaches the equator, and
decrease as it approaches either pole.  Cells within the same level of
precision and at the same latitude will have equal area.

At the first level, we divide the globe equally into 32 45° squares (4 latitude
bands × 8 longitude bands).

Each cell is assigned a code symbol from the following symbol table, starting
from 180°W 90°S and proceeding west-to-east, then south-to-north.

```
2 3 4 5 6 7 8 9
S T U V W X Y Z
J K L M N P Q R
A B C D E F G H
```

The symbol table is drawn from the uppercase English alphabet and digits,
less letters `I` and `O`, and digits `1` and `0`, because of their visual
ambiguity.

![1st level grid](/doc/demo-g.png)

So the 1st-level cell containing eastern Australia, which is bounded by the
equator, 45°S, 135°E and 180°E, has the code `R`.

Each 45° square is then subdivided into a 6 × 6 grid of 36 cells.  Each of
these subcells can be further subdivided into a 6 × 6 grid.  Each cell in any 6
× 6 grid is assigned a symbol from the following code table, again starting
from the south-west corner and proceeding west-to-east, then south-to-north:

```
8 9 - = + *
2 3 4 5 6 7
U V W X Y Z
N P Q R S T
G H J K L M
A B C D E F
```

This symbol table has the same symbols for the first 32 cells as the 1st level
symbol table, plus `-`, `=`, `+` and `*` to make up the full set of 36 symbols.

A complete cell reference consists of the cell reference of the parent cell,
concatenated with the symbol for the target cell.

![2nd level grid](/doc/demo-R.png)

Continue to subdivide cells into 6 × 6 grids until the desired precision is
reached.  For example, the 8th level cell (approximately 14m to a side)
containing the flagpole of Parliament House in Canberra is `RHM3YE6P`.

### Code words

In order to ensure that a given location can be expressed unamiguously in
spoken or written form, I have curated a set of reference code words for grid
system levels one through nine.

These codewords can be concatenated into a complete grid cell reference at the
desired precision.

The objectives of the codeword selection were that:
- All codewords must be reasonably short (no more than 3 syllables).
- All codewords should be relatively easy for someone with basic English
  competence to read, understand and pronounce.  Pronunciation should follow
  from spelling, and vice versa.
- No two codewords at the same grid level can be easily confused, either
  morphologically or phonologically.
- No codeword can be reused at multiple grid levels.
- Avoid use of offensive codewords.

The string format for Grid6 codewords is all lowercase, with the codewords
delimited by a double forward slash `//`.  For example, the codeword string for
cell `RHM3YE6P` is
`northwest//dwarfing//furor//starcraft//scornful//entranced//strongly//homegrown`.

A complete listing of the codewords for each level can be found at the end of
this document.

#### Code word method

I began with the IPhOD word corpus, and filtered down to words of 1 or 2
syllables.  The resulting set of words was further filtered to only those words
that had a stressed phonological neighbour density of zero, which yielded a set
of 2933 words.

For each pair of words from this set, I calculated the phonological edit
distance using the underlying algorigthm from the Phonological CorpusTools.

For each word it was then possible to sum the total edit distance against all
other words in the set.

Starting with the words that had the highest overall total edit distance, I
arbitrarily selected a seed word for each grid level, and then selected the
remaining words by applying an iterative weighted sum of the overall edit
distance and the edit distance to the words already selected into the current
and previous grid levels.

## Comparison to other grid systems

### Comparison to what3words

Compared with [what3words](https://what3words.com), the exact dimensions of a
grid cell in Grid6 depends on the grid level and latitude, whereas in
what3words, every grid cell is a 3x3 meter square.  Grid6 codeword references
are much longer than what3words cell names, requiring approximately 8 words to
generate the same level of precision, but they are highly unambiguous in both
written and spoken form, whereas what3words cell names are easily confused for
one another, either due to spelling mistakes or low-quality or intermittent
audio signal.  Grid6 aims to outperform what3words on this specific criterion.

### Comparison to geohash

Grid6 superficially has a lot in common with
[geohash](https://en.wikipedia.org/wiki/Geohash), they are both hierarchical
grids with concatenated symbol cell references, but Grid6 takes a focus on
human communication, whereas geohash is designed with binary geospatial
indexing in mind.  A geohash cell reference uses a table of 32 symbols drawn
from the lowercase letters and digits.  The symbol table includes the digits
`0` and `1`, which are easily confused with the letters `O` and `l`.  The
geohash symbol table excludes lowercase `l`, and uppercase letters are absent,
but this still allows for errors in OCR or human reading of cell references.
Grid6 aims to outperform geohash as to the visual distinctiveness of its
written symbols, and also provides a codeword cell reference for spoken
communication.  Grid6 doesn't in any way attempt to compete with geohash as a
binary spatial index.

## References and resources

The main motivation for Grid6 was to provide a similar benefit as
[what3words](https://what3words.com), while also solving the problem of
similar-sounding location codes.

In order to generate sets of dissimilar code words, I used parts of code from
the [Phonological
CorpusTools](https://corpustools.readthedocs.io/en/latest/index.html), in
particular the algorithm for producing a "similarity matrix" to calculate a
phonological edit distance between two words.  The authors of CorpusTools
credit this algorithm to the [sublexical morphological
learner](https://sublexical.phonologist.org/) by Blake Allen & Michael Becker.

I used the [Irvine Phonotactic Online Dictionary
(IPhOD)](https://www.iphod.com/) as my corpus of words and phonetic
transcriptions.

## Codeword listing

### Level 1 codewords

- barnstorm
- conscripts
- corkscrew
- cornfields
- emu
- extinct
- firstborn
- flatlands
- foursquare
- grindstone
- groundswell
- haywire
- humane
- juju
- lukewarm
- northwest
- outflanked
- phalanx
- playhouse
- rustproof
- schoolwork
- scraggly
- smokescreen
- spendthrift
- sportswear
- starstruck
- strongest
- thresholds
- transfixed
- werewolf
- wildflowers
- windstorm

### Level 2 codewords

- abstracts
- blindfold
- breastplate
- clarksville
- contexts
- cornhusks
- cornwall
- dwarfing
- flashcards
- flintstone
- foolproof
- gangplank
- handclasp
- hoho
- hookworm
- jaywalk
- landforms
- longshore
- maelstrom
- outflank
- outstretched
- purview
- schoolyard
- spacecraft
- splurging
- standstill
- strangest
- strictly
- swimwear
- throughway
- translates
- withholds
- woolworth
- workroom
- yangtze
- yourselves

### Level 3 codewords

- airflow
- backstroke
- bloodstream
- bookshelves
- bridegroom
- clydesdale
- crankshaft
- dreamworld
- ensconced
- forsworn
- freeware
- furor
- goldstone
- groundwork
- hallmarks
- hijinks
- hugely
- longbow
- nightstand
- outskirts
- postscript
- rearm
- ridgeway
- schoolchild
- scrounging
- skinflint
- springfield
- staunchest
- stockholm
- stonehenge
- sweatpants
- therefore
- wellspring
- wildlife
- woodward
- zeitgeist

### Level 4 codewords

- airfoil
- betwixt
- bivalves
- blowhole
- campsites
- cloakroom
- cornstarch
- distinct
- flywheel
- forecasts
- foxglove
- framework
- goldsmith
- graybeards
- helmsman
- homestretch
- horseflesh
- larkspur
- larynx
- moonstruck
- newborns
- newsgroup
- oilfields
- snakelike
- squinting
- starcraft
- strangely
- strongman
- succinct
- thankyou
- transform
- unmixed
- westbound
- workplace
- worthwhile
- yearlong

### Level 5 codewords

- bluejay
- clotheshorse
- cloudburst
- conscript
- conscript
- discounts
- drywall
- fairbanks
- fivefold
- flimflam
- foxhound
- goldfinch
- grassroots
- hailstorm
- hugest
- jetstream
- landsman
- malformed
- northbound
- poundstone
- roundtree
- schoolroom
- scornful
- sinkhole
- springboard
- sprucing
- squarely
- stoneware
- streetwise
- strictest
- unchanged
- waldorf
- wildcard
- windswept
- wolfram
- woodrow

### Level 6 codewords

- blankly
- bratwurst
- clampdown
- dextrose
- entranced
- farmyard
- feldspar
- flagstaff
- greyhound
- headstrong
- homework
- hornbills
- inkblot
- jukebox
- lifelong
- makeshift
- newsflash
- posthole
- pretext
- rebounds
- scarecrow
- shortstop
- skyway
- snowshoe
- spillway
- springtime
- stagecoach
- storeroom
- strangeness
- subgroups
- tofu
- warehoused
- witchcraft
- workbench
- worldwide
- yourself

### Level 7 codewords

- bankcards
- blacksmith
- bracelets
- churchyard
- cleveland
- clockwork
- culex
- disgorged
- firestorm
- frankly
- groundhog
- horseplay
- jokester
- legumes
- longworth
- mainstream
- markdowns
- menswear
- offspring
- oomph
- outflow
- plainclothes
- quotient
- smoothly
- solvents
- sprawling
- stepchild
- strasburg
- strongly
- subtext
- transverse
- upstarts
- washroom
- wolfman
- wordsmith
- wormwood

### Level 8 codewords

- abstract
- brainchild
- brickyard
- conquest
- cornfield
- downdraft
- elkhorn
- flashpoint
- frostbite
- gladstone
- glimpses
- goalpost
- hairspray
- homegrown
- huntsman
- lakefront
- lingua
- midwives
- milkshake
- nehru
- ourselves
- paintbrush
- ramparts
- roomful
- schoolhouse
- scrivener
- shortwave
- snowbound
- spadework
- steadfast
- swordplay
- townsfolk
- trowel
- voodoo
- wildwood
- wiretaps

### Level 9 codewords

- adjunct
- almonds
- barnyard
- bluejeans
- brushfire
- childlike
- clearly
- diverged
- drumstick
- eavesdrop
- firewall
- folklore
- frankness
- glassware
- henceforth
- longlegs
- midstream
- moving
- nobler
- offshore
- plywood
- portents
- profuse
- rewind
- rooftree
- shakespeare
- slapstick
- spaceport
- stockroom
- streetcar
- swiftness
- twiddling
- upstaged
- warmest
- washcloth
- withstood
