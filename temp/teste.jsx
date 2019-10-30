var hei = [ 150, 275,300,370, 690, 750, 768, 800, 1024, 1343]
var wid = [150, 370, 150, 250, 465, 550, 384, 550, 512, 508]

for (var i = 0; i < 10; i++) {
    alert(hei[i] + 'x' + wid[i]);
}
main();

function main(){
	var initialPrefs = app.preferences.rulerUnits; //vill restore at end
	app.preferences.rulerUnits = Units.PIXELS; // use pixels
	var dir = app.activeDocument

	//Get original Width and Height
	var origWidth = app.activeDocument.width.value;
	var origHeight = app.activeDocument.height.value;

	

	if (origWidth == origHeight) {
		//Make & copy
		var docCopy = app.activeDocument.duplicate();
		
		var sfw = new ExportOptionsSaveForWeb();
		sfw.format = SaveDocumentType.PNG;
		sfw.PNG8 = false; //use PNG-24
		sfw.transparency = true;

		//Folder selection dialog
		var destFolder = Folder(dir).selectDlg("Select a Folder to save Icons in");
		//var destFolder = Folder(dir).selectDialog("Choose an output folder");
		var iconName = prompt("Enter name of icon (all icons will start with this name","","Icon Name");

		var sizeArr = [512,256,128,96,64,48,32,24,20,16]
		var goForIt = confirm("This will make the folowing icon folder sizes ["+sizeArr+"] and the icon prefix name is: ");

		try{
			if (goForIt) {
				for (var i = 0; i < sizeArr.length; i++) {
					docCopy.resizeImage(UnitValue(sizeArr[i], "px"), UnitValue(sizeArr[i],"px"), null, ResampleMethod.BICUBIC)
					docCopy.exportDocument(new File(destFolder + "" + iconName + "_" + sizeArr[i] + ".png"), ExportType.SAVEFORWEB, sfw);


				}
			}

		}catch(exception){
			confirm("ERROR: " + exception);
		}finally{
			app.preferences.rulerUnits = initialPrefs; // restore prefs
			if (docCopy != null) {
				docCopy.close(SaveOptions.DONOTSAVECHANGES);
			}
		}
	}
	else{
		confirm("Height and width must be identical");
	}

}