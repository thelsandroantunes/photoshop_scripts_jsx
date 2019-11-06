#target photoshop

///// 初期設定 /////
//作者名
auther = "Teste";

//メインルーチン
defUnit = preferences.rulerUnits; //現在の単位設定を記録
    getInfo();
preferences.rulerUnits = defUnit; //元の単位に戻す

function getInfo() {
    //アクティブドキュメントを取得
    var doc = activeDocument;
 
    //パス取得
    var docPath = doc.fullName.fsName.toString();
    docPath = docPath.substring(0,docPath.lastIndexOf("\\")+1); //パス名

    //ファイル名取得
    var docName = doc.name;
    docName = docName.substring(0,docName.lastIndexOf(".")); //拡張子除去

    //ページサイズ取得
    preferences.rulerUnits = Units.PIXELS; //単位ピクセル
    //preferences.rulerUnits = Units.MM; //単位mm
    var doc_h = doc.height.value;
    var doc_w = doc.width.value;

    //データ情報の出力（見開き除外）
    var dateObj = new Date();
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var date = dateObj.getDate();
    var hour = dateObj.getHours();
    if (hour < 10) hour = "0" + hour;
    var min = dateObj.getMinutes();
    if (min < 10) min = "0" + min;
    var timeStr = year + "/" + month + "/" + date + " " + hour + ":" + min; //日時
    
    //出力データ
    var text = "[" + auther + "] " + doc_w  + " x " + doc_h; //解像度
    //var text = "[" + auther + "] " + docName + " (" + timeStr + ") "; //ファイル名と時間

    var newLayer = doc.artLayers.add(); // 新規レイヤーを追加
    newLayer.kind = LayerKind.TEXT; // レイヤー種別をテキストレイヤーに設定
    newLayer.textItem.contents = text // テキストレイヤーに文字列を設定
    newLayer.name = "[INFO]"; //レイヤー名
    
    //表示位置
    preferences.rulerUnits = Units.MM; //単位mm
    var x = 20; //left
    var y = 10; //top
    newLayer.textItem.position = [x, y]; // レイヤー位置を指定
    newLayer.textItem.font = "MS-Gothic"; // フォント名
    newLayer.textItem.size = 10; // フォントサイズ
    newLayer.textItem.antiAliasMethod.NONE; //アンチエイリアス
    //newLayer.textItem.justification.CENTER; //行揃え
    
    //レイヤー統合
    //doc.flatten();
    
    //上書き保存
    //doc.save();
}