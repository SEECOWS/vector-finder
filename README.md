# Vector Finder
## Find multiple virtual points as points in a matrix.

### How to use it:

```
var vectorFinder = require('vector-finder')

var matches = vectorFinder({
	curX: Number,
	curY: Number,
	width: Number,
	height: Number,
	offsetX: Number,
	offsetY: Number,
	distanceX: Number,
	distanceY: Number,
	lengthX: Number,
	lengthY: Number,
})
```

#### curX, curY

- The X,Y coordinate of the point you want to find
- This is used to match with the virtual points

#### width, height

- Width, Height of the hitboxes
- This is used to create a virtual point with those dimensions

#### offsetX, offsetY

- The offset of where the virtual points are created.

#### distanceX, distanceY

- The distance between each virtual point

#### lengthX, lengthY

- The amount of virtual points you want to find in the matrix.

### Published under MIT license