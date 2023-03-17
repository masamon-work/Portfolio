$(".img-2023").slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true
    
});

// $(".img-2022").slick({
//     autoplay:true,
//     autoplaySpeed:5000,
//     dots:true
// });

// $(".img-2021").slick({
//     autoplay:true,
//     autoplaySpeed:5000,
//     dots:true
// });

// $(".img-2020").slick({
//     autoplay:true,
//     autoplaySpeed:5000,
//     dots:true
// });

// $(".img-2019").slick({
//     autoplay:true,
//     autoplaySpeed:5000,
//     dots:true
// });

let array = [
    "image/works_1.jpg",
    "image/works_2.jpg",
    "image/works_3.jpg",
    "image/works_4.jpg",
    "image/works_5.jpg",
    "image/works_6.jpg",
    "image/works_7.jpg",
    "image/works_8.jpg",
    "image/works_9.jpg",
    "image/works_10.jpg",
    "image/works_11.jpg",
    "image/works_12.jpg",
    "image/works_13.jpg",
    "image/works_14.jpg",
    "image/works_15.jpg",
    "image/works_16.jpg",
    "image/works_17.jpg"
];
console.log(array.length);
let Ran =Math.floor(Math.random()*array.length);
console.log(Ran);
console.log(array[Ran]);

// let js_array = "<?php echo $images; ?>";
// console.log(js_array);
// document.write(js_array);

// document.write('<img src = "array[Ran]" alt = "画像">');
// $(".img-18").css("backgrund-image","image/works_17.jpg");
// $(".img").css("backgrund-image","url(array[Ran])");
// $('【セレクタ】').css('background-image','【値】');s
// $('【セレクタ】').css({'background-image':'【値】'});

// CR = String.fromCharCode(13); //改行コードを設定します
// folderRef = new Folder ("/image/"); //一覧を取得するフォルダを指定します
// fileList = folderRef.getFiles(); //ファイルリスト(フォルダ含む全て)を取得します
// txt = ""; ←ファイル名一覧を格納するため最初は空にします。
// for (i=0; i<fileList.length; i++){ //ファイル数だけ繰り返します
    // document.write(fileList[i].fullName + CR); //ファイル名（フルパス）を変数に連結します
    // console.log(fileList[i].fullName + CR);
// }
// layObj = activeDocument.artLayers.add(); ←現在のドキュメントにレイヤーを追加します
// layObj.kind = LayerKind.TEXT; ←レイヤーの種類をテキストにします
// layObj.textItem.contents = txt; ←ファイル一覧をテキストとして表示します

// let Arr = [ ]

// $(function() {
//     $('.box').css({
//         backgroundImage: 'url("image/works_17.jpg")'
//     });
// });

// let rightValue = -300;
// $(".btn-gnavi").on("click",function(){
//     if($(".btn-gnavi").hasClass("open")){
//         rightValue = -300;
//         $(this).removeClass("open");
//     } else {
//         rightValue = 0;
//         $(this).addClass("open");
//     }
//     $("#global-navi").stop().animate({
//         right:rightValue
//     },200);
// });