import axios from "./axios";

const AuthService = {

    login(user){
        return axios.post('/users/login', {user});
    },

    register(user){
        return axios.post('/users', {user});
    },
}

export default AuthService;