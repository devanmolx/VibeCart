import dbConnect from "@/lib/dbConnect";
import USER from "@/model/userModel";

export async function POST(req:Request) {
    const body = await req.json();
    const {id} = body;
    
    await dbConnect();
    const user = await USER.findById(id);

    if(!user){
        return Response.json({message: "No user found" , status:false})
    }

    else{

        user.cart = []
        await user.save();

        return Response.json({message:"Ok" , status:true})

    }
}