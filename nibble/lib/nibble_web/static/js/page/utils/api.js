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
    return {
      url: `${this.baseURL}/${url}`,
      headers: this.headers,
    };
    return null;
  }

  getPage(url) {
    console.log(url);
    const page = url.payload.substring(url.payload.lastIndexOf('/') + 1);
    return ajax({
      ...this.buildAJAX(`${page}`),
      method: 'GET',
    });
  }
}

const API = new APIClass(API_BASE_URL);
export default API;
