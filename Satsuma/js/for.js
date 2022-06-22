var imgList = [
    "./images_food/おいどん.JPG",
    "./images_food/きつね.JPG",
    "./images_food/おいどん.JPG",
    "./images_food/",
    "./images_food/",
    "./images_food/ぶっかけ.JPG",
    "./images_food/かっちん.JPG",
    "./images_food/",
    "./images_food/天ぷらうどん.JPG",
    "./images_food/天ざる.JPG",
    "./images_food/"
];

class Menu{
    constructor(image_url, menuName, menuExp){
        this.image_url = image_url;
        this.menuName = menuName;
        this.menuExp = menuExp;
    }

}


var menu = [];
menu[0] = new Menu(imgList[0], "ざるうどん(冷)/せいろうどん(温) 各780円(税込)", "美味しい");
menu[1] = new Menu(imgList[1], "きつねうどん(温) 820円(税込)", "自慢のあげ");
menu[2] = new Menu(imgList[2], "鶏うどん(温) 950円(税込)", "鳥と出汁の相性が抜群");
menu[3] = new Menu(imgList[3], "山かけうどん(冷/温) 950円(税込)", "人気");
menu[4] = new Menu(imgList[4], "あげもちうどん(温) 1,000円(税込)", "ボリューム満点");
menu[5] = new Menu(imgList[5], "ぶっかけうどん(冷) 1,100円(税込)", "人気");
menu[6] = new Menu(imgList[6], "かっちんうどん(温) 1,100円(税込)", "カツオがきいてうまい！");
menu[7] = new Menu(imgList[7], "カレーうどん(温) 1,100円(税込)", "出汁との相性が良いカレー");
menu[8] = new Menu(imgList[8], "天ぷらうどん(温) 1,200円(税込)", "天ぷらが最高");
menu[9] = new Menu(imgList[9], "天ざるうどん(冷/温) 1,250円(税込)", "ざるそばと天ぷら");
menu[10] = new Menu(imgList[10], "薩摩鍋 1,100円(税込)", "特性鍋焼きうどん");
//画像の個数分書く

for (var i = 0; i < menu.length; i++) {
    var image_url = document.createElement("figure");//li要素を取得
    image_url.innerHTML = "<img src="+menu[i].image_url+" alt=メニュー名></img>;"//li要素の中に画像タグを埋め込む


    var menuName = document.createElement("h4");
    menuName.textContent = menu[i].menuName;

    var menuExp = document.createElement("p");
    menuExp.textContent = menu[i].menuExp;

    //ここにdivタグを作ってその中に上の要素を入れたい
    var Div = document.createElement("div");
    Div.classList.add("list");
    Div.appendChild(image_url);
    Div.appendChild(menuName);
    Div.appendChild(menuExp);

    var udon = document.querySelector('.udonlist');
    console.log(udon.textContent);
    udon.appendChild(Div);
}


//丼
var imgList = [
    "./images_food/おいどん.JPG",
    "./images_food/カツどん.JPG"
];


var donmenu = []
donmenu[0] = new Menu(imgList[0],"おいどん 1,100円(税込)","鳥の唐揚げが乗っている");


for (var i = 0; i < donmenu.length; i++) {
    var image_url = document.createElement("figure");
    image_url.innerHTML = "<img src="+donmenu[i].image_url+" alt=メニュー名></img>;"

    var menuName = document.createElement("h4");
    menuName.textContent = donmenu[i].menuName;

    var menuExp = document.createElement("p");
    menuExp.textContent = donmenu[i].menuExp;

    var Div = document.createElement("div");
    Div.classList.add("list");
    Div.appendChild(image_url);
    Div.appendChild(menuName);
    Div.appendChild(menuExp);

    var don = document.querySelector('.donlist');
    don.appendChild(Div);
}

//定食
var imgList = [
    "./images_food/お造り定食.JPG"
];

var teisyokumenu = []
teisyokumenu[0] = new Menu(imgList[0],"お造り定食 1580円(税込)","お造りの種類をかく");

for (var i = 0; i < teisyokumenu.length; i++) {
    var image_url = document.createElement("figure");
    image_url.innerHTML = "<img src="+teisyokumenu[i].image_url+" alt=メニュー名></img>;"

    var menuName = document.createElement("h4");
    menuName.textContent = teisyokumenu[i].menuName;

    var menuExp = document.createElement("p");
    menuExp.textContent = teisyokumenu[i].menuExp;


    var Div = document.createElement("div");
    Div.classList.add("list");
    Div.appendChild(image_url);
    Div.appendChild(menuName);
    Div.appendChild(menuExp);

    var teisyoku = document.querySelector('.teisyokulist');
    teisyoku.appendChild(Div);
    
}

//一品
