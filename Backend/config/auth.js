import jwt from "jsonwebtoken"

const isAuthenticated = async(req, res, next)=>{
    try {
        const token = req.cookies.token;
        console.log(token);
        if(!token){
            return res.status(401).json({
                success : false,
                message : "User is not authenticated"
            })
        }

        const decode = jwt.verify(token, "SECRET_KEY")
        console.log(decode)
        req.user = decode.userId;
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            success : false,
            message : "Error"
        })
    }
}

export default isAuthenticated;