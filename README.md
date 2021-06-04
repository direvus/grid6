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

- Compact alphanumeric, e.g. `RHM3YE6`.
- Codewords.

In both cases, the words and symbols are carefully chosen so that it would be
very unlikely to confuse one symbol for another at the same grid level,
regardless of whether the cell reference is communicated via a written or
acoustic medium.

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
reached.  For example, the 7th level cell (approximately 100m to a side)
containing the flagpole of Parliament House in Canberra is `RHM3YE6`.

### Code words

TODO

[1] But really, you could use it on any planet you like.
