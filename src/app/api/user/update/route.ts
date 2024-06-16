import dbConnect from "@/lib/dbConnect";
import USER from "@/model/userModel";

export async function POST(req:Request) {
    await dbConnect();
    const body = await req.json();
    const {id , address , pincode} = body;

    const user = await USER.findByIdAndUpdate(id , {
        address , pincode
    })
    if(user){
        return Response.json({message : "Details updated" , status:true}) 
        }
        else{    
        return Response.json({message : "Internal Server Error" , status:false}) 
    }
}