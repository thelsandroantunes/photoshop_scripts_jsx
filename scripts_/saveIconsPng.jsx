// Salva imagem em ícones (padrão) .PNG

main();

function main(){
	var initialPrefs = app.preferences.rulerUnits; //vill restore at end
	app.preferences.rulerUnits = Units.PIXELS; // use pixels
	
	var doc = app.activeDocument;
	var docCopy = app.activeDocument.duplicate();
	var sizeArr = [512,256,128,96,64,48,32,24,20,16];
	var iconName = "slide0"

	var sfw = new ExportOptionsSaveForWeb();
		sfw.format = SaveDocumentType.PNG;
		sfw.PNG8 = false; //use PNG-24
		sfw.transparency = true;

	for (var i = 0; i < sizeArr.length; i++) {
		var file = new File(doc.path + '/' + iconName + "-" + sizeArr[i] + ".png");
		var opts = new JPEGSaveOptions();

		docCopy.resizeImage(UnitValue(sizeArr[i], "px"), UnitValue(sizeArr[i],"px"), null, ResampleMethod.BICUBIC)
		docCopy.exportDocument(file, ExportType.SAVEFORWEB, sfw);
		
	    opts.quality = 12;
	    doc.saveAs(file, opts, true);
	}	
}
