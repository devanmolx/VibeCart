import GoogleProvider from "next-auth/providers/google";
import dbConnect from "./dbConnect";
import USER from "@/model/userModel";
import { signIn } from "next-auth/react";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET, // Use environment variable for the secret
  callbacks: {
    async signIn({ user, account }:any) {
      try {
        await dbConnect();

        if (account && account.provider === "google") {
          let existingUser = await USER.findOne({ email: user.email });

          if (existingUser) {
            user.id = existingUser._id;
          } else {
            const newUser = await USER.create({
              name: user.name,
              email: user.email,
              image: user.image
            });
            user.id = newUser._id;
          }
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

    async jwt({ token, user }:any) {
      if (user) {
        token.uid = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },

    async session({ session, token }:any) {
      if (session.user) {
        session.user.id = token.uid;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.image;
      }
      return session;
    },

    async redirect({ url, baseUrl }:any) {
      // You can customize the redirect URL if needed
      return baseUrl;
    }
  },
  pages:{
    signIn:"/",
  }
};

// Ensure you export authOptions
export default authOptions;
