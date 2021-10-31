import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: '/www.cryptominingbiz.com_files/snippetc2d5.js.download'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;