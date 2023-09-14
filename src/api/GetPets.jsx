import { useEffect} from "react";
import axios from "axios";

const GetPetApi = ({dataLoaded, apiGet})=>{
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(apiGet);
            dataLoaded(response.data);
          } catch (e) {
            console.log(e);
          }
        };
    
        fetchData();
      }, [apiGet, dataLoaded]);
};

export default GetPetApi;