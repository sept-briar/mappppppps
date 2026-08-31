```javascript
/* ==================================================
   ★ ここを編集する ★

   left   → 左から何％
   top    → 上から何％
   width  → タップ範囲の横幅
   height → タップ範囲の高さ

   popup: true
   → ポップアップあり

   popup: false
   → ポップアップなし
   ================================================== */


const places = [

    {
        name: "高1A",

        category: "教室",

        popup: true,

        description:
            "高1A教室です。\n" +
            "ここに教室についての説明を書きます。",

        location: "3階",

        time: "9:00〜16:30",

        left: 10,
        top: 15,
        width: 12,
        height: 7
    },


    {
        name: "高1B",

        category: "教室",

        popup: false,

        description: 
            "高1B教室です。\n" +
            "ここに教室についての説明を書きます。",


        location: "3階",

        time: "",

        left: 25,
        top: 15,
        width: 12,
        height: 7
    },


    {
        name: "高1C",

        category: "施設",

        popup: true,

        description:
            "高1C教室です。\n" +
            "ここに教室についての説明を書きます。",
        location: "3階",

        time: "8:30〜17:00",

        left: 25,
        top: 20,
        width: 18,
        height: 10
    },


    {
        name: "体育館",

        category: "体育施設",

        popup: true,

        description:
            "体育の授業や部活動、学校行事などで使用します。",

        location: "校舎西側",

        time: "8:00〜18:00",

        left: 15,
        top: 60,
        width: 25,
        height: 15
    }

];


/* ==================================================
   HTMLの要素
   ================================================== */

const mapButtons =
    document.getElementById("map-buttons");


const popupOverlay =
    document.getElementById("popup-overlay");


const closeButton =
    document.getElementById("close-button");


const popupCategory =
    document.getElementById("popup-category");


const popupTitle =
    document.getElementById("popup-title");


const popupDescription =
    document.getElementById("popup-description");


const popupLocation =
    document.getElementById("popup-location");


const popupTime =
    document.getElementById("popup-time");


/* ==================================================
   マップ上にボタンを作る
   ================================================== */

places.forEach(function(place) {

    /*
        ボタンを作成
    */

    const button =
        document.createElement("button");


    button.classList.add(
        "map-button"
    );


    /*
        ポップアップがある場所だけ
        has-popup クラスを付ける
    */

    if (place.popup === true) {

        button.classList.add(
            "has-popup"
        );

    }


    /*
        場所を設定
    */

    button.style.left =
        place.left + "%";


    button.style.top =
        place.top + "%";


    button.style.width =
        place.width + "%";


    button.style.height =
        place.height + "%";


    /*
        説明用
    */

    button.setAttribute(
        "aria-label",
        place.name
    );


    /*
        ポップアップがある場合だけ
        クリックできるようにする
    */

    if (place.popup === true) {

        button.addEventListener(
            "click",
            function() {

                openPopup(place);

            }
        );

    }


    /*
        マップに追加
    */

    mapButtons.appendChild(button);

});


/* ==================================================
   ポップアップを開く
   ================================================== */

function openPopup(place) {

    popupCategory.textContent =
        place.category;


    popupTitle.textContent =
        place.name;


    popupDescription.textContent =
        place.description;


    popupLocation.textContent =
        place.location;


    popupTime.textContent =
        place.time;


    popupOverlay.classList.add(
        "active"
    );


    /*
        背景をスクロールできなくする
    */

    document.body.style.overflow =
        "hidden";

}


/* ==================================================
   ポップアップを閉じる
   ================================================== */

function closePopup() {

    popupOverlay.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* ==================================================
   ×ボタン
   ================================================== */

closeButton.addEventListener(
    "click",
    closePopup
);


/* ==================================================
   ポップアップの外側をクリック
   ================================================== */

popupOverlay.addEventListener(
    "click",
    function(event) {

        if (
            event.target === popupOverlay
        ) {

            closePopup();

        }

    }
);


/* ==================================================
   ESCキー
   ================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closePopup();

        }

    }
);
```
