import axios from "axios";

export default function setupCsrfToken() {
  const csrfToken = document.querySelector("meta[name=csrf-token]").content;

  axios.defaults.headers = { "X-CSRF-Token": csrfToken };
}
