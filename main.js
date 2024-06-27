(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-16",headers:{authorization:"37949699-ac28-470d-b07d-d17ba429a2f0","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},n=function(){return fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t)},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)},o=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)};function c(n,r){var o;(o=n,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then(t)).then((function(){r.remove()})).catch((function(e){console.log(e)}))}function a(e,t,n,c){(t.classList.contains("card__like-button_is-active")?o:r)(n._id).then((function(t){c.textContent=t.likes.length,function(e){e.target.classList.toggle("card__like-button_is-active")}(e)})).catch((function(e){console.log(e)}))}function u(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),u=c.querySelector(".card__delete-button"),i=c.querySelector(".card__like-button"),l=c.querySelector(".card__image"),s=c.querySelector(".card_like-counter");return e.owner._id!==o?(u.disabled=!0,u.classList.add("visually-hidden")):u.addEventListener("click",(function(){t(e._id,c)})),c.querySelector(".card__title").textContent=e.name,l.src=e.link,l.alt=e.name,s.textContent=e.likes.length,e.likes.some((function(e){return e._id===o}))&&i.classList.add("card__like-button_is-active"),i.addEventListener("click",(function(t){a(t,i,e,s)})),l.addEventListener("click",(function(){r(e)})),c}function i(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",s)}function l(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",s)}function s(e){"Escape"===e.key&&l(document.querySelector(".popup_is-opened"))}var d=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""};function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){d(e,n,t)})),f(r,t)}var f=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector(".content").querySelector(".places__list"),y=document.querySelectorAll(".popup"),v=document.querySelectorAll(".popup__close"),h=document.querySelector(".popup__image"),S=document.querySelector(".popup_type_image"),b=document.querySelector(".popup__caption"),q=document.querySelector(".profile__edit-button"),g=document.querySelector(".popup_type_edit"),E=document.forms["edit-profile"],k=E.querySelector(".popup__input_type_name"),C=E.querySelector(".popup__input_type_description"),L=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),x=document.querySelector(".profile__image"),w=document.querySelector(".profile__add-button"),U=document.querySelector(".popup_type_new-card"),T=document.forms["new-place"],j=T.querySelector(".popup__input_type_card-name"),O=T.querySelector(".popup__input_type_url"),B=document.querySelector(".popup_type_avatar_edit"),P=document.querySelector(".profile__avatar-button"),D=document.forms["edit-avatar"],M=D.avatar;function N(e){i(S),h.src=e.link,h.alt=e.name,b.textContent=e.name}q.addEventListener("click",(function(){i(g),p(E,z),k.value=L.textContent,C.value=A.textContent})),w.addEventListener("click",(function(){i(U),p(T,z)})),v.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return l(t)}))})),y.forEach((function(e){e.addEventListener("mousedown",(function(t){t.currentTarget===t.target&&l(e)}))})),E.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),$(!0),(r={name:k.value,about:C.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){L.textContent=e.name,A.textContent=e.about,l(g)})).catch((function(e){console.log(e)})).finally((function(){$(!1)}))})),T.addEventListener("submit",(function(n){var r,o,a;n.preventDefault(),(r={name:j.value,link:O.value},o=r.name,a=r.link,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:o,link:a})}).then(t)).then((function(e){_.prepend(u(e,c,0,N)),T.reset(),l(U)})).catch((function(e){console.log(e)})).finally((function(){$(!1)}))})),n().then((function(e){L.textContent=e.name,A.textContent=e.about,x.style="background-image: url('".concat(e.avatar,"')")})).catch((function(e){console.log(e)})),Promise.all([n(),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1],i=o._id;a.forEach((function(e){_.append(u(e,c,0,N,i))}))})).catch((function(e){console.log(e)}));var I,J,H,V,z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"button_inactive",inputErrorClass:".form__input-error_active",errorClass:".form__input_type_error"};function $(e){var t=document.querySelector(".popup_is-opened");t&&(t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить")}I=z,J=function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n):H(e,t,t.validationMessage,n)},H=function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)},V=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):f(t,n)},document.querySelectorAll(I.formSelector).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);V(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){J(e,o,t),V(n,r,t)}))}))}(e,I)})),P.addEventListener("click",(function(){i(B),M.value="",p(D,z)})),D.addEventListener("submit",(function(n){var r;n.preventDefault(),$(!0),(r=M.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){x.style="background-image: url('".concat(e.avatar,"')"),l(B)})).catch((function(e){console.log(e)})).finally((function(){$(!1)}))}))})();