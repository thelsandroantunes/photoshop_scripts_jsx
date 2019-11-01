//Duplica imagem dentro do phothoshop

main();

function main(){
	//Make & copy
	app.activeDocument.duplicate();
	var sfw = new ExportOptionsSaveForWeb();

	sfw.format = SaveDocumentType.PNG;
	sfw.PNG8 = false; //use PNG-24
	sfw.transparency = true;

}