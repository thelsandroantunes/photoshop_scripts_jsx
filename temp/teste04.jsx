#target photoshop
var dx = 640;
var dy = 480;
var cv = 0.390625;
var inv = 1;
var data;

// 新規ドキュメントを作成
preferences.rulerUnits = Units.PIXELS;
documents.add(dx,dy);
var docObj = activeDocument;
var val = new SolidColor();
docObj.changeMode(ChangeMode.GRAYSCALE);

//ダイアログでCSVファイルを選択->開く
filename = File.openDialog("salvar em algum lugar");
if (filename)
{
var fileObj = new File(filename);
var flag = fileObj.open("r");
if (flag == true)
{
data = fileObj.read().split (",");;
for (y=0; y<dy; y++)
{
for (x=0; x<dx; x++)
{
cnt = (y * dx) + x;
docObj.selection.select([[x,y],[x+1,y],[x+1,y+1],[x,y+1],[x,y]]);
val.gray.gray = data[cnt] * cv;
docObj.selection.fill(val,ColorBlendMode.NORMAL, 100, false);
}
}
activeDocument.selection.deselect();
fileObj.close();
if (inv == 1)
{
var idInvr = charIDToTypeID( "Invr" );
executeAction( idInvr, undefined, DialogModes.NO );
}
}else{
alert("ファイルが開けませんでした");
}
}