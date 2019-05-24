import axios from 'axios';
import qs from 'qs';

const fetchMap = process.env.VUE_APP_FETCH_MAP;
const http = axios.create({
  baseURL: fetchMap,
  timeout: 3 * 60 * 1000,
  validateStatus(status) {
    return status >= 200 && status < 300
  },
  paramsSerializer: params => qs.stringify(params, {
    arrayFormat: 'repeat'
  }),
})

// http.interceptors.request.use(config => {
//   config.headers = {
//     Authorization: 'header'
//   }
//   return config;
// })

const {
  get: _get,
  post: _post,
  delete: _delete,
  put: _put,
  patch: _patch,
} = http;

export {
  _get,
  _post,
  _put,
  _delete,
  _patch
};
export default {
  install(Vue) {
    Vue.prototype.$http = http;
  }
};