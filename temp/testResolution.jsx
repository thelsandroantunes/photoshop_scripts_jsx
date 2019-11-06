//Teste de resolução na alteração de resize.

if (app.documents.length == 0)
{
var pic = app.documents.add();
}
else
{
var pic = app.activeDocument;
}



var pic_w = 1343;
var pic_h = 508;
var PRESOLUTION = 72;
var h = pic.height; 
var w = pic.width; 

if (h / w > pic_w / pic_h){
	var set_h = pic_h;
	var set_w = w * pic_h / h;
}
else{
	var set_w = pic_w;
	var set_h = h * pic_w / w;
}

pic.resizeImage( set_w, set_h, PRESOLUTION, ResampleMethod.BICUBIC);
pic.activeLayer.applyUnSharpMask(200, 0.3, 0); 