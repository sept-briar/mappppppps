// ========================================
// 1階 校内マップ
// 「文字タップ方式」
// ========================================

const places = [

  // ===== 上部 =====

  {
    name: "同窓会",
    x: 47.0,
    y: 8.8,
    width: 7,
    height: 4
  },

  {
    name: "献血",
    x: 40.8,
    y: 12.2,
    width: 6,
    height: 4
  },

  {
    name: "剣持刀也",
    x: 29.0,
    y: 16.5,
    width: 7,
    height: 3
  },

  {
    name: "七種キャンパス",
    x: 32.5,
    y: 18.2,
    width: 9,
    height: 4
  },

  {
    name: "伏見",
    x: 40.8,
    y: 20.6,
    width: 6,
    height: 3
  },

  {
    name: "同窓会",
    x: 57.5,
    y: 20.0,
    width: 8,
    height: 4
  },

  {
    name: "キャンパスオフィス",
    x: 46.5,
    y: 24.4,
    width: 9,
    height: 4
  },

  {
    name: "生徒会室 仙石忍",
    x: 53.0,
    y: 28.2,
    width: 10,
    height: 5
  },

  {
    name: "瀬名泉 遊木真",
    x: 59.0,
    y: 31.0,
    width: 10,
    height: 5
  },


  // ===== 中央 =====

  {
    name: "天城一彩",
    x: 70.0,
    y: 36.2,
    width: 8,
    height: 5
  },

  {
    name: "天祥院英智",
    x: 70.0,
    y: 40.0,
    width: 9,
    height: 6
  },

  {
    name: "七種茨",
    x: 70.0,
    y: 46.2,
    width: 8,
    height: 4
  },


  // ===== 中央右 =====

  {
    name: "高1G",
    x: 79.5,
    y: 40.0,
    width: 7,
    height: 4
  },

  {
    name: "高2I",
    x: 79.5,
    y: 43.0,
    width: 7,
    height: 4
  },

  {
    name: "茨2G",
    x: 93.0,
    y: 37.5,
    width: 7,
    height: 4
  },

  {
    name: "茨2H",
    x: 93.0,
    y: 41.2,
    width: 7,
    height: 4
  },

  {
    name: "高2I",
    x: 93.0,
    y: 45.0,
    width: 7,
    height: 4
  },


  // ===== K棟 =====

  {
    name: "七種茨室 乱凪砂準備室",
    x: 89.0,
    y: 33.7,
    width: 16,
    height: 5,
    detail: true,
    description: "七種茨室・乱凪砂準備室の詳細情報です。",
    location: "K棟",
    time: "詳細情報を入力してください"
  },


  // ===== 中央下 =====

  {
    name: "七種茨E",
    x: 60.0,
    y: 51.0,
    width: 8,
    height: 3
  },

  {
    name: "剣持刀也B",
    x: 60.0,
    y: 54.0,
    width: 10,
    height: 4
  },

  {
    name: "乱凪砂D",
    x: 74.0,
    y: 51.0,
    width: 7,
    height: 3
  },


  // ===== 右下 =====

  {
    name: "七種茨準備室",
    x: 83.5,
    y: 51.0,
    width: 9,
    height: 5
  },

  {
    name: "七種茨準備室",
    x: 89.5,
    y: 51.0,
    width: 9,
    height: 5
  },

  {
    name: "七2K",
    x: 95.0,
    y: 51.0,
    width: 6,
    height: 4
  },


  // ===== 左下 =====

  {
    name: "七種茨",
    x: 39.0,
    y: 50.5,
    width: 7,
    height: 4
  },

  {
    name: "同窓会企画",
    x: 30.0,
    y: 52.5,
    width: 11,
    height: 3
  },

  {
    name: "剣持刀也",
    x: 7.0,
    y: 59.0,
    width: 9,
    height: 4
  },

  {
    name: "第2七種茨",
    x: 24.5,
    y: 57.8,
    width: 11,
    height: 5
  },


  // ===== 大部屋 =====

  {
    name: "第1七種茨 七種茨準備室 七種茨更衣室",
    x: 50.0,
    y: 57.5,
    width: 18,
    height: 9,
    detail: true,
    description: "第1七種茨・七種茨準備室・七種茨更衣室の詳細情報です。",
    location: "1階",
    time: "詳細情報を入力してください"
  }
];


// ========================================
// HTML要素
// ========================================

const mapButtons = document.getElementById("map-buttons");

const popupOverlay = document.getElementById("popup-overlay");
const closeButton = document.getElementById("close-button");

const popupCategory = document.getElementById("popup-category");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupLocation = document.getElementById("popup-location");
const popupTime = document.getElementById("popup-time");


// ========================================
// タップボタンを作成
// ========================================

places.forEach(place => {

  const button = document.createElement("button");

  button.className = "map-button";

  if (place.detail) {
    button.classList.add("has-popup");
  }

  // 地図画像に既に文字が書かれているため、
  // ボタン側には文字を表示しない
  button.textContent = "";

  button.setAttribute(
    "aria-label",
    place.name + "を開く"
  );

  // 文字の中心を基準にする
  button.style.left = place.x + "%";
  button.style.top = place.y + "%";

  button.style.width = place.width + "%";
  button.style.height = place.height + "%";

  button.style.transform =
    "translate(-50%, -50%)";

  // 完全に透明
  button.style.background = "transparent";
  button.style.border = "none";

  // タップ可能
  button.style.cursor = "pointer";

  button.addEventListener("click", () => {
    openPopup(place);
  });

  mapButtons.appendChild(button);
});


// ========================================
// ポップアップを開く
// ========================================

function openPopup(place) {

  popupCategory.textContent =
    place.detail ? "施設情報" : "校内マップ";

  popupTitle.textContent = place.name;

  if (place.detail) {

    popupDescription.textContent =
      place.description;

    popupLocation.textContent =
      place.location;

    popupTime.textContent =
      place.time;

  } else {

    popupDescription.textContent =
      place.name + " の場所です。";

    popupLocation.textContent =
      "1階";

    popupTime.textContent =
      "―";
  }

  popupOverlay.classList.add("active");
}


// ========================================
// ×で閉じる
// ========================================

closeButton.addEventListener("click", () => {

  popupOverlay.classList.remove("active");

});


// ========================================
// ポップアップ外側をクリックして閉じる
// ========================================

popupOverlay.addEventListener("click", event => {

  if (event.target === popupOverlay) {

    popupOverlay.classList.remove("active");

  }

});


// ========================================
// Escキーで閉じる
// ========================================

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    popupOverlay.classList.remove("active");

  }

});
