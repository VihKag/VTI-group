import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://petstore.swagger.io/v2/swagger.json',
    timeout: 5000, 
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  instance.interceptors.response.use(
    (response) =>{
        return response
    },function (error){
      return Promise.reject(error);
    }
  );
  
  export default instance;