import axios from 'axios';

export class SolicitudeContext  {
  baseUrl = "http://localhost:8080/solicitude/";
  getAllSolicitude = async () => {
    return await axios.get(this.baseUrl + "all").then((res) => res.data);
  };

  saveAllSolicitude = async (solicitude) => {
    return await axios.post(this.baseUrl + "save", solicitude).then((res) => res.data);
  };

  getByIdSolicitude = async (id) => {
    return await axios.get(this.baseUrl + "find"+id).then((res) => res.data.id === id);
  }
}

export default SolicitudeContext