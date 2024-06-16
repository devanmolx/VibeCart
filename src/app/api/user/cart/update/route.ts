import dbConnect from "@/lib/dbConnect";
import USER from "@/model/userModel";

export async function POST(req:Request) {
    await dbConnect();
    const body = await req.json();
    const item = JSON.parse(body.item);
    const id = body.id

    let user = await USER.findById(id);

    if(!user){
        return Response.json({message:"No user found" , status:false})
    }   
    else{
        user.cart = item;
        const updatedUser = await user.save();
        if(updatedUser){
            return Response.json({message: "Item added Successfully" , status:true})
        }
    }
}