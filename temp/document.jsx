main();

function main(){
	var initialPrefs = app.preferences.rulerUnits; //vill restore at end
	app.preferences.rulerUnits = Units.PIXELS; // use pixels
	var dir = app.activeDocument

	//Make & copy
	var docCopy = app.activeDocument.duplicate();
	var origWidth = docCopy.width.value;
	var origHeight = docCopy.height.value;

	var sfw = new ExportOptionsSaveForWeb();
	sfw.format = SaveDocumentType.PNG;
	sfw.PNG8 = false; //use PNG-24
	sfw.transparency = true;

	if (origWidth == origHeight) {
		alert("OK")
	}
	else{
		alert("Height and width must be identical " + origHeight +"x"+origWidth);
	}

}