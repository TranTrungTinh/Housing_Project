import axios from 'axios';

/*
userProfile: {
    firstname, lastname, email, password, phone
}
*/
export default {
    signUp(userProfile) {
        return axios.post('/Accounts', userProfile);
    },
    login(email, password) {
        return axios.post('/Accounts/login', { email, password });
    },
    fetchUser(accessToken) {
        return axios.post('/Accounts/me', { token: accessToken });
    }
}