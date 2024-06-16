import dbConnect from "@/lib/dbConnect";
import USER from "@/model/userModel";

export async function POST(req:Request) {
    const body = await req.json();
    const cart = JSON.parse(body.cart);
    const id = body.id;    
    
    const order = {
        items: cart,
        date: new Date()
    }
    
    await dbConnect();

    const user = await USER.findById(id);

    if(user){
        user.orders.push(order)
        await user.save();

        return Response.json({message:"Item added" , status:true})
    }
    else{
        return Response.json({message:"Internal server error" , status:false});
    }
}