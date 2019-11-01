// Salva imagem em ícones (padrão) .PNG

main();

function main(){
	var initialPrefs = app.preferences.rulerUnits; //vill restore at end
	app.preferences.rulerUnits = Units.INCHES; // use inches

	var doc = app.activeDocument;
	var docCopy = app.activeDocument.duplicate();
	var sizeWidth = [150,275,300,370,690,750,768,800,1024,1343];
	var sizeHeight = [150,370,150,250,465,550,384,550,512,508];
	var iconName = "slide5"

	var sfw = new ExportOptionsSaveForWeb();
		sfw.format = SaveDocumentType.JPEG;		
		sfw.transparency = true;

	for (var i = 0; i < 10; i++) {
		var file = new File(doc.path + '/' + iconName + '-' + sizeWidth[i] + 'x' + sizeHeight[i] + '.jpg');
		var opts = new JPEGSaveOptions();

		docCopy.DoAction("Reduce300dpi", "300");
		docCopy.resizeImage(UnitValue(sizeWidth[i], "px"), UnitValue(sizeHeight[i],"px"), null, ResampleMethod.BICUBIC)
		
		docCopy.exportDocument(file, ExportType.SAVEFORWEB, sfw);
		
	    opts.quality = 12;
	    doc.saveAs(file, opts, true);
	}	
}
