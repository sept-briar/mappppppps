const places = [
  // 上側
  {
    name: "A",
    left: 23,
    top: 17,
    width: 13,
    height: 11
  },
  {
    name: "B",
    left: 27.5,
    top: 24,
    width: 6.5,
    height: 5.5
  },
  {
    name: "C",
    left: 33,
    top: 20,
    width: 18,
    height: 14
  },
  {
    name: "D",
    left: 42,
    top: 32,
    width: 11,
    height: 9
  },
  {
    name: "E",
    left: 48,
    top: 38,
    width: 10,
    height: 9
  },
  {
    name: "F",
    left: 54,
    top: 43,
    width: 11,
    height: 9
  },

  // 中央
  {
    name: "G",
    left: 67,
    top: 48,
    width: 7,
    height: 6
  },
  {
    name: "H",
    left: 67,
    top: 54,
    width: 7,
    height: 6
  },
  {
    name: "I",
    left: 67,
    top: 62,
    width: 7,
    height: 7
  },

  // 右上〜右中央
  {
    name: "J",
    left: 79,
    top: 44,
    width: 20,
    height: 8
  },
  {
    name: "K",
    left: 90,
    top: 52,
    width: 7,
    height: 6,
    detail: true,
    description: "Kの詳細情報です。",
    location: "1階",
    time: "詳細情報を入力してください"
  },
  {
    name: "L",
    left: 90,
    top: 58,
    width: 7,
    height: 6,
    detail: true,
    description: "Lの詳細情報です。",
    location: "1階",
    time: "詳細情報を入力してください"
  },
  {
    name: "M",
    left: 90,
    top: 64,
    width: 7,
    height: 7,
    detail: true,
    description: "Mの詳細情報です。",
    location: "1階",
    time: "詳細情報を入力してください"
  },

  // 下中央〜右下
  {
    name: "N",
    left: 84,
    top: 68,
    width: 12,
    height: 7,
    detail: true,
    description: "Nの詳細情報です。",
    location: "1階",
    time: "詳細情報を入力してください"
  },
  {
    name: "O",
    left: 79,
    top: 68,
    width: 7,
    height: 7
  },
  {
    name: "P",
    left: 84,
    top: 68,
    width: 6,
    height: 7
  },
  {
    name: "Q",
    left: 91,
    top: 68,
    width: 7,
    height: 7
  },

  {
    name: "R",
    left: 56.5,
    top: 69.8,
    width: 7.5,
    height: 3.5
  },
  {
    name: "S",
    left: 44,
    top: 68,
    width: 20,
    height: 6
  },
  {
    name: "T",
    left: 33,
    top: 68,
    width: 12,
    height: 6
  },

  // 下側
  {
    name: "U",
    left: 34,
    top: 74,
    width: 31,
    height: 17,
    detail: true,
    description: "Uの詳細情報です。",
    location: "1階",
    time: "詳細情報を入力してください"
  },
  {
    name: "V",
    left: 17,
    top: 77,
    width: 14,
    height: 9
  },
  {
    name: "W",
    left: 1,
    top: 80,
    width: 14,
    height: 6
  }
];

const mapButtons = document.getElementById("map-buttons");
const popupOverlay = document.getElementById("popup-overlay");
const closeButton = document.getElementById("close-button");

const popupCategory = document.getElementById("popup-category");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupLocation = document.getElementById("popup-location");
const popupTime = document.getElementById("popup-time");


// A〜Wのボタンを作る
places.forEach(place => {
  const button = document.createElement("button");

  button.className = "map-button";

  // K・L・M・N・Uは詳細情報あり
  if (place.detail) {
    button.classList.add("has-popup");
  }

  button.textContent = place.name;

  button.style.left = place.left + "%";
  button.style.top = place.top + "%";
  button.style.width = place.width + "%";
  button.style.height = place.height + "%";

  button.addEventListener("click", () => {
    openPopup(place);
  });

  mapButtons.appendChild(button);
});


// ポップアップを開く
function openPopup(place) {
  popupCategory.textContent = place.detail ? "施設情報" : "校内マップ";
  popupTitle.textContent = place.name;

  if (place.detail) {
    popupDescription.textContent = place.description;
    popupLocation.textContent = place.location;
    popupTime.textContent = place.time;
  } else {
    popupDescription.textContent = place.name + " の場所です。";
    popupLocation.textContent = "1階";
    popupTime.textContent = "―";
  }

  popupOverlay.classList.add("active");
}


// ×ボタンで閉じる
closeButton.addEventListener("click", () => {
  popupOverlay.classList.remove("active");
});


// ポップアップの外側をクリックして閉じる
popupOverlay.addEventListener("click", event => {
  if (event.target === popupOverlay) {
    popupOverlay.classList.remove("active");
  }
});


// Escキーでも閉じる
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    popupOverlay.classList.remove("active");
  }
});
