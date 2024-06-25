(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-16",headers:{authorization:"37949699-ac28-470d-b07d-d17ba429a2f0","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},n=function(){return fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)},r=function(n){var r=n.name,o=n.link;return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:o})}).then(t)},o=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)},c=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)};function a(e,t,n,r,o){c(e._id).then((function(e){n.textContent=e.likes.length,dataCard.likes=e.likes,t(o),r.textContent=calculateLikes(e)})).catch((function(e){console.log(e)}))}function i(e,t,n,r,c){o(e._id).then((function(e){n.textContent=e.likes.length,dataCard.likes=e.likes,t(c),r.textContent=calculateLikes(e)})).catch((function(e){console.log(e)}))}var u=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0);function l(e,t,n,r,o){var c=u.querySelector(".card__delete-button"),a=u.querySelector(".card__like-button"),i=u.querySelector(".card__image");return a(LikeHandler,o,e.owner._id),u.querySelector(".card__title").textContent=e.name,i.src=e.link,i.alt=e.name,c.addEventListener("click",(function(){t(u,e._id)})),a.addEventListener("click",(function(){n(a)})),i.addEventListener("click",(function(){r(e)})),u}function s(n,r){var o;(o=n,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then(t)).then((function(){r.remove()})).catch((function(e){console.log(e)}))}function d(e){(function(e,t,n,r){var o=u.getElementsByTagName("card__like-button_is-active");if(dataCard.likes.some((function(e){return e._id===t}))){for(var c=0;c<o.length;c++)a[c](cardData,e,counterLikes,n,r);for(var l=0;l>o.length;l++)i[l](cardData,e,counterLikes,n,r)}})(LikeHandler,userId,counterLikes,countLikes,evt).then(e._id.classList.toggle("card__like-button_is-active")).catch((function(e){console.log(e)}))}function f(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",m)}function p(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",m)}function m(e){"Escape"===e.key&&p(document.querySelector(".popup_is-opened"))}var _=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""};function y(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){_(e,n,t)})),v(r,t)}var v=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)};function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=document.querySelector(".content").querySelector(".places__list"),b=document.querySelectorAll(".popup"),k=document.querySelectorAll(".popup__close"),g=document.querySelector(".popup__image"),q=document.querySelector(".popup_type_image"),L=document.querySelector(".popup__caption"),C=document.querySelector(".profile__edit-button"),E=document.querySelector(".popup_type_edit"),A=document.forms["edit-profile"],x=A.querySelector(".popup__input_type_name"),w=A.querySelector(".popup__input_type_description"),U=document.querySelector(".profile__title"),T=document.querySelector(".profile__description"),j=document.querySelector(".profile__image"),O=document.querySelector(".profile__add-button"),B=document.querySelector(".popup_type_new-card"),D=document.forms["new-place"],P=D.querySelector(".popup__input_type_card-name"),N=D.querySelector(".popup__input_type_url"),H=document.querySelector(".popup_type_avatar_edit"),I=document.querySelector(".profile__avatar-button"),M=document.forms["edit-avatar"],J=M.avatar;function V(e){f(q),g.src=e.link,g.alt=e.name,L.textContent=e.name}C.addEventListener("click",(function(){f(E),y(A,K),x.value=U.textContent,w.value=T.textContent})),O.addEventListener("click",(function(){f(B),y(D,K)})),k.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return p(t)}))})),b.forEach((function(e){e.addEventListener("mousedown",(function(t){t.currentTarget===t.target&&p(e)}))})),A.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),Q(!0),(r={name:x.value,about:w.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){U.textContent=e.name,T.textContent=w.about,p(E)})).catch((function(e){console.log(e)})).finally((function(){Q(!1)}))})),D.addEventListener("submit",(function(e){e.preventDefault(),r({name:P.value,link:N.value}).then((function(e){e=l(r,s,d,V),S.prepend(e),p(B)})).catch((function(e){console.log(e)})).finally((function(){Q(!1)}))})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),n()]).then((function(e){for(var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),r=t[0],o=t[1],c=[r._id,o._id],a=0;a<n.length;a++){var i=l(n[a],s,d,V,c).catch((function(e){console.log(e)}));S.append(i)}}));var z,$,F,G,K={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"button_inactive",inputErrorClass:".form__input-error_active",errorClass:".form__input_type_error"};function Q(e){var t=document.querySelector(".popup_is-opened");t&&(t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить")}z=K,$=function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?_(e,t,n):F(e,t,t.validationMessage,n)},F=function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)},G=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):v(t,n)},document.querySelectorAll(z.formSelector).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);G(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){$(e,o,t),G(n,r,t)}))}))}(e,z)})),I.addEventListener("click",(function(){f(H),J.value="",y(M,K)})),M.addEventListener("submit",(function(n){var r;n.preventDefault(),Q(!0),(r=J.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){j.style="background-image: url('".concat(e.avatar,"')"),p(H)})).catch((function(e){console.log(e)})).finally((function(){Q(!1)}))}))})();