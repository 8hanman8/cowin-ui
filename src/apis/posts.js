import axios from "axios";

export function fetchPostsFromAPI() {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      // handle success
      return response.data;
    })
    .catch((error) => {
      // handle error
      return Promise.reject(error);
    });
}
