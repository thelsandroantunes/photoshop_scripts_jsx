// Learn how to change text
// how to save JPEG
// how to read JSON


var titleGroup = app.activeDocument.layerSets.getByName('title');
var titleLayer = titleGroup.layers[0];
titleLayer.textItem.contents = 'CTIC';

saveJpeg('EST-UEA');

function saveJpeg(name) {
    var doc = app.activeDocument;
    var file = new File(doc.path + '/' + name + '.jpg');

    var opts = new JPEGSaveOptions();
    opts.quality = 12;

    doc.saveAs(file, opts, true);
}
