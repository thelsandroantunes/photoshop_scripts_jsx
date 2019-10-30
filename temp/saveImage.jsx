saveJpeg('slider0');

function saveJpeg(name) {
    var doc = app.activeDocument;
    var file = new File(doc.path + '/' + name + '-' + '.jpg');
    var opts = new JPEGSaveOptions();

    opts.quality = 12;
    doc.saveAs(file, opts, true);
}
