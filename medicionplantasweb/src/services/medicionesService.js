import axios from 'axios';

const URL_API = "http://localhost:8080/mediciones";

class MedicionesService{

    async getMediciones(){
        try{
            const resp = await axios.get(`${URL_API}/get`);
            // {status, statusText, data}
            return resp.data;
        }catch(e){
            return null;
        }
    }

    async saveMedicion(medicion){
        try{
            const resp = await axios.post(`${URL_API}/post`,medicion ,{
                headers:{
                    'Content-Type':'application/json'
                }
            });
            return resp.data;
        }catch(e){
            return null;
        }
    }

}

export default new MedicionesService();