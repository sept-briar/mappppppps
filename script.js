// ========================================
// 1階 校内マップ
// 文字タップ方式・位置調整版
// ========================================

const places = [

  // ===== 上部 =====

  {
    name: "同窓会",
    x: 46.3,
    y: 12.7,
    width: 6,
    height: 3
  },

  {
    name: "献血",
    x: 60.0,
    y: 18.2,
    width: 5,
    height: 3
  },

  {
    name: "清教キャンパス",
    x: 37.0,
    y: 25.1,
    width: 8,
    height: 4
  },

  {
    name: "食堂",
    x: 44.8,
    y: 27.8,
    width: 5,
    height: 3
  },

  {
    name: "同窓会",
    x: 60.1,
    y: 27.3,
    width: 7,
    height: 3
  },

  {
    name: "国際交流 委員会",
    x: 56.7,
    y: 39.8,
    width: 9,
    height: 4
  },

  {
    name: "生活部 特活部",
    x: 62.2,
    y: 42.0,
    width: 8,
    height: 4
  },


  // ===== 中央 =====

  {
    name: "進路部室",
    x: 71.5,
    y: 51.3,
    width: 6,
    height: 4
  },

  {
    name: "進路相談室",
    x: 71.5,
    y: 54.4,
    width: 7,
    height: 5
  },

  {
    name: "事務室",
    x: 71.5,
    y: 66.4,
    width: 6,
    height: 3
  },


  // ===== 右上〜右中央 =====

  {
    name: "高1G",
    x: 80.3,
    y: 53.7,
    width: 6,
    height: 3
  },

  {
    name: "高2I",
    x: 80.3,
    y: 57.7,
    width: 6,
    height: 3
  },

  {
    name: "高2G",
    x: 93.4,
    y: 52.2,
    width: 5,
    height: 3
  },

  {
    name: "高2H",
    x: 93.4,
    y: 56.4,
    width: 5,
    height: 3
  },

  {
    name: "高2I",
    x: 93.4,
    y: 60.7,
    width: 5,
    height: 3
  },


  // ===== K棟 =====

  {
    name: "家庭科室 家庭科準備室",
    x: 88.7,
    y: 46.5,
    width: 13,
    height: 5,
    detail: true,
    description: "家庭科室・家庭科準備室の詳細情報です。",
    location: "K棟（サイエンス棟）",
    time: "詳細情報を入力してください"
  },



  // ===== 右下 =====

  {
    name: "英語科準備室",
    x: 83.7,
    y: 69.1,
    width: 7,
    height: 4
  },

  {
    name: "数学科準備室",
    x: 89.5,
    y: 69.1,
    width: 7,
    height: 4
  },

  {
    name: "高2K",
    x: 94.2,
    y: 69.2,
    width: 5,
    height: 3
  },


  // ===== 左下 =====

  {
    name: "保健室",
    x: 30.5,
    y: 69.0,
    width: 6,
    height: 3
  },

  {
    name: "同窓会企画",
    x: 36.5,
    y: 72.8,
    width: 10,
    height: 3
  },

  {
    name: "清教会館",
    x: 7.6,
    y: 82.3,
    width: 8,
    height: 4
  },

  {
    name: "第2体育館",
    x: 21.0,
    y: 81.3,
    width: 10,
    height: 4
  },


  // ===== 大部屋 U =====

  {
    name: "第1体育館 体育科準備室 体育館更衣室",
    x: 49.0,
    y: 82.6,
    width: 17,
    height: 8,
    detail: true,
    description: "第1体育館・体育科準備室・体育館更衣室の詳細情報です。",
    location: "1階",
    time: "詳細情報を入力してください"
  }

];


// ========================================
// HTML要素取得
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
// 文字タップ用ボタン作成
// ========================================

places.forEach(place => {

  const button = document.createElement("button");

  button.className = "map-button";

  // 詳細情報がある場所
  if (place.detail) {
    button.classList.add("has-popup");
  }

  // 地図画像側に文字があるのでボタンには文字を表示しない
  button.textContent = "";

  button.setAttribute(
    "aria-label",
    place.name + "を開く"
  );

  // 文字の中心位置
  button.style.left = place.x + "%";
  button.style.top = place.y + "%";

  // 文字の周囲だけタップ可能
  button.style.width = place.width + "%";
  button.style.height = place.height + "%";

  // left/topを中心基準にする
  button.style.transform = "translate(-50%, -50%)";

  // 完全透明
  button.style.background = "transparent";
  button.style.border = "none";

  button.style.cursor = "pointer";

  // タップ
  button.addEventListener("click", () => {
    openPopup(place);
  });

  mapButtons.appendChild(button);
});


// ========================================
// ポップアップ表示
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
// 背景クリックで閉じる
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
