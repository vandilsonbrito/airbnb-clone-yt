import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from '@/app/lib/db';
import { NextResponse } from "next/server";

export async function GET() {
    const { getUser } = getKindeServerSession();

    const user = await getUser(); // get the user from kinde

    if(!user || user === null || !user.id) { // check, if there is no user, throw error
        throw new Error("Something went wrong, I am sorry...");
    }

    let dbUser = await prisma.user.findUnique({ // if there is an user , fetch the user from DB
        where: {
            id: user.id,
        }
    });

    if(!dbUser) { // if there is no user from DB, then create one
        dbUser = {
            email: user.email ?? '',
            firstName: user.given_name ?? '',
            lastName: user.family_name ?? '',
            id: user.id,
            profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
        }
    }

    return NextResponse.redirect('http://localhost:3000') // redirect user to index page
}