import axios from 'axios';

export const registerUser = async <T>(data: T) => {
  return axios.post("http://localhost:8080/", data, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "ECA1AB4CE8583613A2C759B445E98",
    },
  });
};