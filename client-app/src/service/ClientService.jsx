import axios from'axios';

const API_URL="http://localhost:5000/job"
class ClientService {
    getAllListItems(){
        return axios.get(API_URL);
    }
    getJobById(id) {
        return axios.get(`${API_URL}/${id}`);
    }
}
export default new ClientService();