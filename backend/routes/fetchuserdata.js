var jwt = require('jsonwebtoken');
const  fetchuserdata= async (req,res,next)=>
{
    const tocken=req.header("auth-tocken")
    if(!tocken)
    {
        res.status(401).send({errors:"no tocken"});

    }
    try {
        const id_obj= await jwt.verify(tocken,"hashingtocken");
        
        req.user=id_obj;
        console.log(req.user)
                next();
    } catch (error) {
        res.status(400).send({errors:error.message});
        
    }

    
}
module.exports=fetchuserdata;


