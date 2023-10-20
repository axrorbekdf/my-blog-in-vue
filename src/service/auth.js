import axios from "./axios";

const AuthService = {

    login(user){
        return axios.post('/users/login', {user});
    },

    register(user){
        return axios.post('/users', {user});
    },
    getUser(){
        return axios.get('/user')
    }

}

export default AuthService;