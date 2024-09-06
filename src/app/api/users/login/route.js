import { connect } from "@/db/dbconfig.js";
import User from "@/models/user.js"
import { NextRequest, NextResponse } from "next/server";



connect()

export async function POST(request,response){
    try {
        const reqBody = await request.json()
        const {username, password} = reqBody;

        const newUser = new User({
            username,
            password
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({message: "Login successful",  });

    } catch (error) {
        return  NextResponse.json({message: "Erooro",  });
    }
}