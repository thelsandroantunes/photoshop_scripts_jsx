// Salva imagens em .JPG com qualidade de resolução

main();

function main(){
	var initialPrefs = app.preferences.rulerUnits;
	app.preferences.rulerUnits = Units.PIXELS;
	
	if (app.documents.length == 0){
		var doc = app.documents.add();
	}else{
		var doc = app.activeDocument;
	}
	
	docCopy = doc.duplicate();

	var sizeWidth = [1343, 1024, 800, 768, 750, 690, 370, 300, 275, 150];
	var sizeHeight = [508, 512, 550, 384, 550, 465, 250, 150, 370, 150];
	var iconName = "slide5"	

	var sfw = new ExportOptionsSaveForWeb();
		sfw.format = SaveDocumentType.JPEG;		
		sfw.transparency = true;
	
	for (var i = 0; i < 10; i++) {						
		
		var file = new File(doc.path + '/' + iconName + '-' + sizeWidth[i] + 'x' + sizeHeight[i] + '.jpg');
		var opts = new JPEGSaveOptions();
		var PRESOLUTION = 72;
		var h = docCopy.height;
		var w = docCopy.width;

		if (h / w > sizeWidth[i] / sizeHeight[i]){
			var set_h = sizeHeight[i];
			var set_w = w * sizeHeight[i] / h;
		}
		else{
			var set_w = sizeWidth[i];
			var set_h = h * sizeWidth[i] / w;
		}

		docCopy.resizeImage(set_w, set_h, PRESOLUTION, ResampleMethod.BICUBIC);
		docCopy.exportDocument(file, ExportType.SAVEFORWEB, sfw);
		
	    opts.quality = 12;	    
	    docCopy.saveAs(file, opts, true);
	}	
}
