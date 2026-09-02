// ==============================
// 1階 校内マップ
// A〜W「文字タップ方式」
// ==============================

const places = [
  // 上部
  {
    name: "A",
    x: 29.7,
    y: 23.7
  },
  {
    name: "B",
    x: 32.9,
    y: 26.5
  },
  {
    name: "C",
    x: 40.6,
    y: 29.1
  },
  {
    name: "D",
    x: 45.6,
    y: 34.5
  },
  {
    name: "E",
    x: 51.8,
    y: 38.9
  },
  {
    name: "F",
    x: 57.8,
    y: 43.0
  },

  // 中央
  {
    name: "G",
    x: 69.9,
    y: 51.7
  },
  {
    name: "H",
    x: 69.9,
    y: 55.8
  },
  {
    name: "I",
    x: 69.9,
    y: 65.7
  },

  // 右側
  {
    name: "J",
    x: 89.2,
    y: 47.3
  },
  {
    name: "K",
    x: 93.8,
    y: 53.0,
    detail: true,
    description: "Kの詳細情報です。",
    location: "1階",
    time: "詳細情報を入力してください"
  },
  {
    name: "L",
    x: 93.8,
    y: 57.3,
    detail: true,
    description: "Lの詳細情報です。",
    location: "1階",
    time: "詳細情報を入力してください"
  },
  {
    name: "M",
    x: 93.8,
    y: 61.5,
    detail: true,
    description: "Mの詳細情報です。",
    location: "1階",
    time: "詳細情報を入力してください"
  },

  // 下部右側
  {
    name: "N",
    x: 94.7,
    y: 70.8
  },
  {
    name: "O",
    x: 89.2,
    y: 70.8
  },
  {
    name: "P",
    x: 82.9,
    y: 70.8
  },
  {
    name: "Q",
    x: 74.3,
    y: 69.8
  },

  // 下部中央
  {
    name: "R",
    x: 60.5,
    y: 70.1
  },
  {
    name: "S",
    x: 56.7,
    y: 71.8
  },
  {
    name: "T",
    x: 39.1,
    y: 71.5
  },

  // 下部
  {
    name: "U",
    x: 51.5,
    y: 81.9,
    detail: true,
    description: "Uの詳細情報です。",
    location: "1階",
    time: "詳細情報を入力してください"
  },
  {
    name: "V",
    x: 24.2,
    y: 81.5
  },
  {
    name: "W",
    x: 3.9,
    y: 82.7
  }
];


// ==============================
// HTMLの要素を取得
// ==============================

const mapButtons = document.getElementById("map-buttons");
const popupOverlay = document.getElementById("popup-overlay");
const closeButton = document.getElementById("close-button");

const popupCategory = document.getElementById("popup-category");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupLocation = document.getElementById("popup-location");
const popupTime = document.getElementById("popup-time");


// ==============================
// A〜Wの「文字タップ用ボタン」を作成
// ==============================

places.forEach(place => {

  const button = document.createElement("button");

  // map-buttonクラスを使用
  button.className = "map-button";

  // 詳細情報がある場所
  if (place.detail) {
    button.classList.add("has-popup");
  }

  // ボタン自体には文字を表示しない
  // 地図画像に書いてあるA〜Wの文字をそのまま見せるため
  button.textContent = "";

  // アクセシビリティ用
  button.setAttribute("aria-label", place.name + "を開く");
  button.setAttribute("title", place.name);

  // 文字の位置を中心として配置
  button.style.left = place.x + "%";
  button.style.top = place.y + "%";

  // ★ここが重要★
  // 部屋全体ではなく「文字の周囲」だけをタップ可能にする
  button.style.width = "5%";
  button.style.height = "4%";

  // x,yを「左上」ではなく「中央」として扱う
  button.style.transform = "translate(-50%, -50%)";

  // 透明
  button.style.background = "transparent";
  button.style.border = "none";

  // タップ可能
  button.style.cursor = "pointer";

  // クリック
  button.addEventListener("click", () => {
    openPopup(place);
  });

  mapButtons.appendChild(button);
});


// ==============================
// ポップアップを開く
// ==============================

function openPopup(place) {

  popupCategory.textContent = place.detail
    ? "施設情報"
    : "校内マップ";

  popupTitle.textContent = place.name;

  if (place.detail) {

    popupDescription.textContent = place.description;
    popupLocation.textContent = place.location;
    popupTime.textContent = place.time;

  } else {

    popupDescription.textContent =
      place.name + " の場所です。";

    popupLocation.textContent = "1階";
    popupTime.textContent = "―";
  }

  popupOverlay.classList.add("active");
}


// ==============================
// ×ボタンで閉じる
// ==============================

closeButton.addEventListener("click", () => {
  popupOverlay.classList.remove("active");
});


// ==============================
// ポップアップの外側をクリックして閉じる
// ==============================

popupOverlay.addEventListener("click", event => {

  if (event.target === popupOverlay) {
    popupOverlay.classList.remove("active");
  }

});


// ==============================
// Escキーで閉じる
// ==============================

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    popupOverlay.classList.remove("active");
  }

});
