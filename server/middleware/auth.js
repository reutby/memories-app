import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//for exemple if user want to like post 
//click the like button => auth moddleware(NEXT) =>like controller
dotenv.config();
const auth = async(req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth){
            //custom user no google auth 
            decodedData = jwt.verify(token, process.env.SECRET_TOKEN);
            req.userId = decodedData?.id;

        }else{
            //google auth
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;