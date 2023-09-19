// import { useEffect} from "react";
// import axios from "axios";
// const urlApi = 'https://64f707229d7754084952fda5.mockapi.io/api/v1/';
// const GetPetApi = ({dataLoaded, apiGet})=>{
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await axios.get(apiGet);
//             dataLoaded(response.data);
//           } catch (e) {
//             console.log(e);
//           }
//         };
    
//         fetchData();
//       }, [apiGet, dataLoaded]);
// };

// export default GetPetApi;
import { useEffect} from "react";
import axios from "axios";

const GetPetApi = ({dataLoaded, apiGet})=>{
  const urlApi = 'https://64f707229d7754084952fda5.mockapi.io/api/v1/pets';
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(urlApi, {
              params:{
                type: apiGet
              }
            });
            dataLoaded(response.data);
          } catch (e) {
            console.log(e);
          }
        };
    
        fetchData();
      }, [dataLoaded, urlApi, apiGet]);
};

export default GetPetApi;