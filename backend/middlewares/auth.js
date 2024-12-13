import jwt from "jsonwebtoken";

const authUser = (req, res, next)=> {
    try {
        const {token} =  req.headers;

        if(!token) {
            res.json(401, "not authorized please login again");
        }
        const token_decode = jwt.decode(token);
        req.body.clerkId = token_decode.clerkId;
        next();
    } catch (error) {
        console.log(error);
    }
}

export default authUser;