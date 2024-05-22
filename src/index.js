console.log("Hello, World!");

const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // 4, 6, 10

import "../vendor/normalize.css";
import "../vendor/fonts.css";
import "../blocks/page/page.css";
import "../blocks/header/header.css";
import "../blocks/content/content.css";
import "../blocks/footer/footer.css";
import "../blocks/profile/profile.css";
import "../blocks/places/places.css";
import "../blocks/card/card.css";
import "../blocks/popup/popup.css";
import "../blocks/popup/_is-animated/popup_is-animated.css";
import "../blocks/popup/_is-opened/popup_is-opened.css";
