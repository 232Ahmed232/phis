import { connect } from "@/db/dbconfig.js";
import User from "@/models/user.js"
import { NextRequest, NextResponse } from "next/server";



connect()

export async function POST(request){
    try {
        const reqBody = await request.json()
        const {username, password} = reqBody;

        const newUser = new User({
            username,
            password
        })

        const savedUser = await newUser.save()
        console.log(savedUser);
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })

        return response;

    } catch (error) {
        
    }
}