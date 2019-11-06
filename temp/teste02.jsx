
main();

function main(){
	// get a reference to the current (active) document and store it in a variable named "doc"
	doc = app.activeDocument;  

	// change the color mode to RGB.  Important for resizing GIFs with indexed colors, to get better results
	doc.changeMode(ChangeMode.RGB);  

	// these are our values for the end result width and height (in pixels) of our image
	var sizeWidth = [150,275,300,370,690,750,768,800,1024,1343];
	var sizeHeight = [150,370,150,250,465,550,384,550,512,508];
	var iconName = "bolsita";

	for (var i = 0; i < 10; i++) {
		var file = new File(doc.path + '/' + iconName + '-' + sizeWidth[i] + 'x' + sizeHeight[i] + '.jpg');
		var opts = new JPEGSaveOptions();
		
		// do the resizing.  if height > width (portrait-mode) resize based on height.  otherwise, resize based on width
		
		doc.resizeImage(UnitValue(sizeWidth[i],"px"),UnitValue(sizeHeight[i],"px"),null,ResampleMethod.BICUBIC);
		
		// our web export options
		var opts = new ExportOptionsSaveForWeb();
		opts.quality = 70;
		opts.format = SaveDocumentType.JPEG;
		opts.optimized = true;

		doc.exportDocument(file,ExportType.SAVEFORWEB,opts);
	    //doc.saveAs(file, opts, true);
	}
}
