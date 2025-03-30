import axios from "axios";

const conn = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

conn.interceptors.response.use(
  (response) => response,
  (err) => {
    console.log(err);
    return Promise.reject(err);
  },
);

export default conn;
