alert("script.js読み込めてる！");


/* ==================================================
   1階マップ
   A〜W

   detail: true
   → 詳細ポップアップ

   detail: false
   → 文字だけのシンプルポップアップ
   ================================================== */


const places = [

    /* ---------- A〜J ---------- */

    {
        name: "A",
        detail: false,
        left: 23.0,
        top: 17.0,
        width: 16.0,
        height: 8.0
    },

    {
        name: "B",
        detail: false,
        left: 28.0,
        top: 21.0,
        width: 12.0,
        height: 7.0
    },

    {
        name: "C",
        detail: false,
        left: 32.0,
        top: 21.0,
        width: 17.0,
        height: 12.0
    },

    {
        name: "D",
        detail: false,
        left: 40.0,
        top: 30.0,
        width: 13.0,
        height: 8.0
    },

    {
        name: "E",
        detail: false,
        left: 46.5,
        top: 35.0,
        width: 12.0,
        height: 9.0
    },

    {
        name: "F",
        detail: false,
        left: 52.0,
        top: 40.0,
        width: 12.0,
        height: 9.0
    },

    {
        name: "G",
        detail: false,
        left: 67.0,
        top: 48.0,
        width: 7.0,
        height: 7.0
    },

    {
        name: "H",
        detail: false,
        left: 67.0,
        top: 53.0,
        width: 7.0,
        height: 6.0
    },

    {
        name: "I",
        detail: false,
        left: 67.0,
        top: 59.0,
        width: 7.0,
        height: 6.0
    },

    {
        name: "J",
        detail: false,
        left: 79.0,
        top: 48.5,
        width: 20.0,
        height: 8.0
    },


    /* ---------- 詳細あり K〜N ---------- */

    {
        name: "K",
        detail: true,

        category: "詳細情報",

        description:
            "ここにKの詳しい説明を書きます。",

        location: "ここに場所を書きます。",

        time: "ここに利用時間を書きます。",

        left: 90.5,
        top: 56.5,
        width: 6.5,
        height: 5.0
    },

    {
        name: "L",
        detail: true,

        category: "詳細情報",

        description:
            "ここにLの詳しい説明を書きます。",

        location: "ここに場所を書きます。",

        time: "ここに利用時間を書きます。",

        left: 90.5,
        top: 61.0,
        width: 6.5,
        height: 6.0
    },

    {
        name: "M",
        detail: true,

        category: "詳細情報",

        description:
            "ここにMの詳しい説明を書きます。",

        location: "ここに場所を書きます。",

        time: "ここに利用時間を書きます。",

        left: 90.5,
        top: 66.5,
        width: 6.5,
        height: 5.8
    },

    {
        name: "N",
        detail: true,

        category: "詳細情報",

        description:
            "ここにNの詳しい説明を書きます。",

        location: "ここに場所を書きます。",

        time: "ここに利用時間を書きます。",

        left: 92.0,
        top: 69.0,
        width: 6.0,
        height: 5.5
    },


    /* ---------- O〜T ---------- */

    {
        name: "O",
        detail: false,
        left: 86.5,
        top: 69.0,
        width: 7.0,
        height: 5.5
    },

    {
        name: "P",
        detail: false,
        left: 80.0,
        top: 69.0,
        width: 7.0,
        height: 5.5
    },

    {
        name: "Q",
        detail: false,
        left: 72.0,
        top: 69.0,
        width: 7.0,
        height: 5.5
    },

    {
        name: "R",
        detail: false,
        left: 59.0,
        top: 69.0,
        width: 7.0,
        height: 5.5
    },

    {
        name: "S",
        detail: false,
        left: 48.0,
        top: 69.0,
        width: 11.0,
        height: 5.5
    },

    {
        name: "T",
        detail: false,
        left: 34.0,
        top: 69.0,
        width: 14.0,
        height: 5.5
    },


    /* ---------- U・V・W ---------- */

    {
        name: "U",
        detail: true,

        category: "詳細情報",

        description:
            "ここにUの詳しい説明を書きます。",

        location: "ここに場所を書きます。",

        time: "ここに利用時間を書きます。",

        /* 大きいほう */
        left: 35.0,
        top: 75.0,
        width: 31.0,
        height: 13.0
    },

    {
        name: "V",
        detail: false,

        /* 小さいほう */
        left: 17.0,
        top: 76.0,
        width: 14.0,
        height: 9.0
    },

    {
        name: "W",
        detail: false,
        left: 1.0,
        top: 80.0,
        width: 14.0,
        height: 6.0
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

const popupDetails =
    document.querySelector(".popup-details");


/* ==================================================
   マップ上にボタンを作る
   ================================================== */

if (mapButtons) {

    places.forEach(function(place) {

        const button =
            document.createElement("button");


        button.classList.add(
            "map-button"
        );


        /* 詳細ありは緑色 */

        if (place.detail === true) {

            button.classList.add(
                "has-popup"
            );

        }


        /* 座標 */

        button.style.left =
            place.left + "%";

        button.style.top =
            place.top + "%";

        button.style.width =
            place.width + "%";

        button.style.height =
            place.height + "%";


        /* ボタン名 */

        button.setAttribute(
            "aria-label",
            place.name
        );


        /* クリック */

        button.addEventListener(
            "click",
            function() {

                openPopup(place);

            }
        );


        mapButtons.appendChild(button);

    });

}


/* ==================================================
   ポップアップを開く
   ================================================== */

function openPopup(place) {

    popupTitle.textContent =
        place.name;


    /* ---------- 詳細あり ---------- */

    if (place.detail === true) {

        popupCategory.textContent =
            place.category;

        popupDescription.textContent =
            place.description;

        popupLocation.textContent =
            place.location;

        popupTime.textContent =
            place.time;


        popupDetails.style.display =
            "grid";

    }


    /* ---------- 文字だけ ---------- */

    else {

        popupCategory.textContent =
            "";

        popupDescription.textContent =
            "";

        popupLocation.textContent =
            "";

        popupTime.textContent =
            "";


        popupDetails.style.display =
            "none";

    }


    popupOverlay.classList.add(
        "active"
    );


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

if (closeButton) {

    closeButton.addEventListener(
        "click",
        closePopup
    );

}


/* ==================================================
   ポップアップ外側クリック
   ================================================== */

if (popupOverlay) {

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

}


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
