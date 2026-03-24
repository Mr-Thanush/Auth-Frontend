 import axios from "axios";

 const api=axios.create({
    baseURL:"http://localhost:8080/api/authentication",
    withCredentials:true  //it is must for cookies
 });

 export default api;