// Learn how to change text
// how to save JPEG
// how to read JSON


var titleGroup = app.activeDocument.layerSets.getByName('title');
var titleLayer = titleGroup.layers[0];
titleLayer.textItem.contents = 'SIZE';

var doc = app.activeDocument;
    
    var width = doc.width; 
    var height = doc.height; 

    if (width <= height) { 
        var borderSize = Math.round(width * 0.15); 
    } else { 
        var borderSize = Math.round(height * 0.15); 
    } 

    doc.resizeCanvas(width + borderSize, height + borderSize);

    
    var width = doc.width; 
    var height = doc.height; 
    var newSize = Math.round(Math.sqrt(width * width + height * height)) + borderSize; 
    doc.resizeCanvas(newSize, newSize);

    var file = new File(doc.path + '/' + name + '.jpg');

    var opts = new JPEGSaveOptions();
    opts.quality = 12;

    doc.saveAs(file, opts, true);