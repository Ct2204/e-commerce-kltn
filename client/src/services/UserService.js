import api from "./api";

const login =(email, password)=> {
    const data = {email, password};
    return api.post(api.url.login, data).then(res=>res.data);
}

const UserService ={
    login
};

export default UserService;