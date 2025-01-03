const adminAuth = (req,res,next) => {
    const  token = "xyz";
    const isAdminUserAuthorized = token === "xyz";
    if(isAdminUserAuthorized){
        next();
       console.log("success")
    }
    else{
        res.status(401).send("unAuthorized admin access");
    }
}

module.exports = {
    adminAuth
}