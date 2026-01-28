import jwt from "jsonwebtoken"


const AdminAuth = async (req,res,next)=>{
try {
  const authHead = req.headers.authorization;
if (!authHead)
{
    return res.status(401).json({ message: "No token" });
}
const token = authHead.split(" ")[1];
const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.adminId = decoded.adminId;
    next();

} catch (error) {
   res.status(401).json({ message: "Invalid token" });
}


}

export default AdminAuth;