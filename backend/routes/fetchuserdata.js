var jwt = require('jsonwebtoken');
const fetchuserdata=(req,res,next)=>
{
    const tocken=req.header("auth-tocken")
    if(!tocken)
    {
        res.status(401).send({errors:"internal server error"});

    }
    try {
        const id_obj=jwt.verify(tocken,"hashingtocken");
        req.user=id_obj;
        next();
    } catch (error) {
        res.status(400).send({errors:"internal server error"});
        
    }

}
module.exports=fetchuserdata;


