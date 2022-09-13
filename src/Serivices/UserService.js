import axios from 'axios'


const baseURL ='http://localhost:8080/api/v1';

class UserService{

    getAll(){
        return axios.get(`${baseURL}/users`);
    }

    createUser(user){
        return  axios.post(`${baseURL}/adduser`,user)
    }


}

export default new UserService();