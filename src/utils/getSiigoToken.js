import axios from "axios";

const username = import.meta.env.VITE_SIIGO_USERNAME;
const password = import.meta.env.VITE_SIIGO_PASSWORD;

export async function getSiigoToken() {
  var data = JSON.stringify({
    "username": username,
    "access_key": password
  });
  
  var config = {
    method: 'post',
    url: 'https://api.siigo.com/auth',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response))
    })
    .catch(function (error) {
      console.log(error);
    });
  return attributes;
}