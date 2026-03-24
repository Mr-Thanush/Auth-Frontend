 import axios from "axios";

 const api=axios.create({
    baseURL:"https://authentication-k94y.onrender.com/api/authentication",
    withCredentials:true  //it is must for cookies
 });

 export default api;