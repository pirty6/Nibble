import { ajax } from 'rxjs/observable/dom/ajax';
import {
  API_BASE_URL,
} from '../constants';

class APIClass {
  constructor(baseURL) {
    this.headers = {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json; charset=utf-8',
    };
    this.baseURL = baseURL;
    // console.log(baseURL);
  }

  buildAJAX(url) {
    // console.log(url);
    if (url === 'cms') {
      return {
        url: `/${url}`,
        headers: this.headers,
      };
    }
    return {
      url: `${this.baseURL}/${url}`,
      headers: this.headers,
    };
  }

  getPage(url) {
    if (url.payload.includes('cms')) {
      return ajax({
        ...this.buildAJAX('cms'),
        method: 'GET',
      });
    }
    const page = url.payload.substring(url.payload.lastIndexOf('/') + 1);
    return ajax({
      ...this.buildAJAX(`${page}`),
      method: 'GET',
    });
  }
}

const API = new APIClass(API_BASE_URL);
export default API;
