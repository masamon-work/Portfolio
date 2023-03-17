// 画像をクリックすると、拡大(origin別リンクに飛ぶ)
// mesh.addEventlistener("click",function(){
//     mesh.classList.toggle('scale');
// })

// const fs = require('fs');
// // カレントディレクトリ
// const path = process.cwd();
// // ファイル名の一覧
// const filenames = fs.readdirSync(path);
// console.log(filenames);

// var CR = String.fromCharCode(13);
// var folderRef = new Folder ("/../image/works/");
// var fileList = folderRef.getFiles();
// txt = "";
// for (i=0; i<fileList.length; i++)
// {
// txt = txt + fileList[i].fullName + CR;
// }

// (activeDocument.textFrames.add()).contents = txt;

// console.log(txt);

var fs = require('fs'); // File System(Node API)：ファイル操作
var files = []; // フォルダの情報を格納する配列

// ①：readdirを実行
files = fs.readdirSync('/C:/xampp/htdocs/phpstudy/Graduation_work/image/works');

// ②：filesの内容をターミナルに表示
files.forEach(function(file){ 
    console.log(file);
});

// 実行結果：デスクトップのファイルとフォルダ名が列挙される