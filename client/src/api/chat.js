import axios from "axios";


const CHAT_API = axios.create({baseURL:'https://api.chatengine.io/projects'});

export const addNewUser = ({result})=>{
    const[firstName,lastName] = result.name.split(" ");
    const data = {'username': result.userName, 'secret': result.password, 'first_name': firstName, 'last_name': lastName};
    CHAT_API.post('/people/',data,{headers: { "Private-Key": process.env.REACT_APP_CHATENGINE_PRIVATEKEY }})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

};
