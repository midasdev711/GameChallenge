import axios from 'axios';
import router from '@/router';
require("dotenv").config();

const API_URL = process.env.VUE_APP_DEV_API_ROOT ? process.env.VUE_APP_DEV_API_ROOT : '';
// const token = process.env.VUE_APP_TEMP_TOKEN;

export default class APIService {
  get(sub_url, headers = {}) {
    let url = `${API_URL}` + sub_url;
    return axios.get(url, {
      headers: {
        ...headers
      }
    })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        if (e.response.status == 401) {
        }
        throw e;
      });
  }

  post(sub_url, content, headers = {}) {
    let token = localStorage.getItem("token");
    let url = `${API_URL}` + sub_url;
    return axios.post(url, content, {
      headers: {
        ...headers,
        Authorization: "bearer " + token,
      }
    })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        throw e;
      });
  }

  patch(sub_url, content, headers = {}) {
    let token = localStorage.getItem("token");

    let url = `${API_URL}` + sub_url;
    return axios.patch(url, content, {
      headers: {
        ...headers,
        Authorization: "bearer " + token,
      }
    })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        if (e.response.status == 401) {
        }
        throw e;
      });
  }

  delete(sub_url, headers = {}) {
    let token = localStorage.getItem("token");

    let url = `${API_URL}` + sub_url;
    return axios.delete(url, {
      headers: {
        ...headers,
        Authorization: "bearer " + token,
      }
    })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        if (e.response.status == 401) {
        }
        throw e;
      });
  }
};
