import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import http from "./http";
import {
  imgFormat
} from './utils/tools';
import Mint from 'mint-ui';
import './assets/css/my-mint.scss';
// import "./registerServiceWorker";

let scale = 1 / window.devicePixelRatio
let meta = document.createElement('meta')
meta.setAttribute("name", "viewport")
//meta.setAttribute("content",`initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`)
meta.setAttribute("content", `initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no`)
let head = document.querySelector("head")
head.appendChild(meta)

/* 设置rem */
const doc = document.documentElement;
const fontSize = doc.getBoundingClientRect().width / 25;
doc.style.fontSize = fontSize + 'px';

const cssRem = 15;

/* rem 在转换到实际显示的px */
Vue.prototype.remToPx = function (rem) {
  return rem / cssRem * fontSize
}

Vue.use(Mint);
Vue.use(http);
Vue.filter('imgFormat', imgFormat);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");