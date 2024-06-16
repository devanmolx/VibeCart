import dbConnect from "@/lib/dbConnect";
import USER from "@/model/userModel";

export async function POST(req: Request) {
    await dbConnect();
    const body = await req.json();

    const user = await USER.findById(body.id);

    if (user) {
        return Response.json({ message: user, status: true })
    }

    else {
        return Response.json({ message: "No user found", status: false })
    }
}