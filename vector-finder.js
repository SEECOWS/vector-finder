module.exports = function (params) {
	var curX = params.curX
	var curY = params.curY
	var width = params.width
	var height = params.height
	var offsetX = params.offsetX
	var offsetY = params.offsetY
	var distanceX = params.distanceX
	var distanceY = params.distanceY
	var lengthX = params.lengthX
	var lengthY = params.lengthY

	for (var x = 0; x < lengthX; x++) {
		for (var y = 0; y < lengthY; y++) {
			if (curX > ((x * width) + offsetX + (x * distanceX)) && curX < ((x * width) + (offsetX + width) + (x * distanceX) )) {
				if (curY > ((y * height) + offsetY + (y * distanceY)) && curY < ((y * height)) + (offsetY + height) + (y * distanceY) ) {
					return [x,y]
				}
			}
		}
	}
	return [-1,-1]
}