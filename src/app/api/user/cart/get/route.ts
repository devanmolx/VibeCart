import dbConnect from "@/lib/dbConnect";
import USER from "@/model/userModel";

export async function POST(req:Request) {
    const body = await req.json();
    const id = body.id;
    await dbConnect();

    const user = await USER.findById(id);

    if(user){
        return Response.json({message:user.cart , status:true});
    }

    return Response.json({mesaage:"" , status:false})

}