import axios from "../utils/axios";
const API_BASE_URL = 'https://petstore.swagger.io/v2';
const getPetsByStatus = async () =>{
    try{
        const {data} = await axios.get<any, any>(`${API_BASE_URL}/pet/findByStatus?status=available`)
        return data;
    }catch(err){
        console.error(err);
        throw err;
    }
}
export {getPetsByStatus}