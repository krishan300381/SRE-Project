import axios from 'axios';

const API_URL = "http://localhost:5000/jobs";

class JobService {
    getAllJobs() {
        return axios.get(API_URL);
    }

    getJobById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createJob(job) {
        return axios.post(API_URL, job);
    }

    deleteJob(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
    updateJob(id,job) {
        console.log("Sending data to API:", id, job);  // Debugging
        return axios.put(`${API_URL}/${id}`, job);
    }
}

export default new JobService();
