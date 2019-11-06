var do_flag = false;
var obj_size = false;
var obj_rotate = false;

winObj = new Window("dialog","ランダーム",{ width: 180, height:120, x: 100, y: 100 });

winObj.cBoxsize = winObj.add("checkbox",{ width: 160, height: 20, x: 20, y: 20 }, "サイズ");
winObj.cBoxrotate = winObj.add("checkbox",{ width: 160, height: 20, x: 20, y: 45 }, "回転");

winObj.cBoxsize.value = true;
winObj.cBoxrotate.value = true;

winObj.okBtn = winObj.add("button",{ width: 60, height: 30, x: 20, y: 70 }, "OK", { name:"ok"});
winObj.cancelBtn = winObj.add("button",{ width: 60, height: 30, x: 90, y: 70}, "CANCEL", {name: "cancel"});

winObj.cancelBtn.onClick = function() {
 do_flag = false;
 // ダイアログを閉じる
 winObj.close();
}

winObj.okBtn.onClick = function() {
    if(winObj.cBoxsize.value) obj_size = true;
    if(winObj.cBoxrotate.value) obj_rotate = true;
    
 do_flag = true;
 winObj.close();
}

winObj.show();

/*---------------------main---------------------*/

try{
if(do_flag){

var resultLayers=new Array();

for (var ix=0;ix<app.activeDocument.activeLayer.layers.length;ix++){
    resultLayers.push(app.activeDocument.activeLayer.layers[ix])
}

var allselLinkLysLength = resultLayers.length;

for(i=0;i<allselLinkLysLength;i++){
    activeDocument.activeLayer = resultLayers[i];
    if(obj_rotate){activeDocument.activeLayer.rotate(Math.floor(Math.random() * 360));}
    if(obj_size){var rnd = Math.floor(Math.random() * 60)+70; activeDocument.activeLayer.resize(rnd,rnd);}
}
activeDocument.activeLayer = activeDocument.activeLayer.parent;

}

}catch(e){
alert ('グルーーーーープを選択してないかもよ？\n選択してもこれが出るのなら不具合だぞ。製作者に連絡だ！ ','ランダームに於ける例外処理的文言その1')
}