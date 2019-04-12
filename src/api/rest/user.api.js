import axios from 'axios';

export default {
  getInfo(){
    return axios.get('/Accounts/getInfo');
  }
}