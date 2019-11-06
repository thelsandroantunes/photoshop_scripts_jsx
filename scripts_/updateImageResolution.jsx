//Alteração da resolução pelo tamanho.

if (app.documents.length == 0)
{
var doc = app.documents.add();
}
else
{
var doc = app.activeDocument;
}


// Criar um novo documento se não houver imagem no PS; 
// caso contrário, declare o objeto
var sizeWidth = 1343; // width
var sizeHeight = 508; //height
var PRESOLUTION = 72; //resolution
var h = doc.height; //height base
var w = doc.width; //width base

if (h / w > sizeWidth / sizeHeight){
	var set_h = sizeHeight;
	var set_w = w * sizeHeight / h;
}
else{
	var set_w = sizeWidth;
	var set_h = h * sizeWidth / w;
}

// Se a imagem estiver alta / larga 
// Na proporção padrão, depois que a largura de configuração é a largura padrão, 
// a altura excede a largura padrão.
// Neste caso, a imagem pode ser reduzida apenas pela altura definida, 
// caso contrário, a imagem é reduzida pela largura definida.

doc.resizeImage( set_w, set_h, PRESOLUTION, ResampleMethod.BICUBIC);// Dimensione a imagem para 
doc.activeLayer.applyUnSharpMask(200, 0.3, 0);  // Nitidez , reduza o desfoque da imagem devido à redução de tamanho