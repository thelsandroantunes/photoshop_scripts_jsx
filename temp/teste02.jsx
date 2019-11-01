
main();

function main(){
	// get a reference to the current (active) document and store it in a variable named "doc"
	doc = app.activeDocument;  

	// change the color mode to RGB.  Important for resizing GIFs with indexed colors, to get better results
	doc.changeMode(ChangeMode.RGB);  

	// these are our values for the end result width and height (in pixels) of our image
	var fWidth = 1343;
	var fHeight = 508;

	// do the resizing.  if height > width (portrait-mode) resize based on height.  otherwise, resize based on width
	if (doc.height > doc.width) {
	    doc.resizeImage(null,UnitValue(fHeight,"px"),null,ResampleMethod.BICUBIC);
	}
	else {
	    doc.resizeImage(UnitValue(fWidth,"px"),null,null,ResampleMethod.BICUBIC);
	}
	
}
