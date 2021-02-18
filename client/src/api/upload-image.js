import axios from "axios";


const UPLOAD_API = axios.create({baseURL:process.env.REACT_APP_CLOUDINARY_BASE_URL});

export const uploadImage = async(uploadFile)=>{
    const fileData = new FormData();
    fileData.append('file', uploadFile);
    fileData.append('upload_preset', 'projectsimages');
    try{
        const {data} = await UPLOAD_API.post("/image/upload",fileData);
        return data.url;
    }
    catch(err){
        console.log(err);

    }
}
