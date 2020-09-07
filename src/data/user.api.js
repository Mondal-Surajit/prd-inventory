import axios from 'axios';

export default class UserApi {
        static getAllUsers(){
            return axios.get("http://localhost:4000/users")
            .then(res => res.data);
        }


        static addUser(user) {

            return axios.post('http://localhost:4000/users',user)
             .then(res => res.data)
           }
     
}