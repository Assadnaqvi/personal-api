import { NextRequest, NextResponse } from "next/server";

export async function PUT(request:NextRequest){
    const req=await request.json();
    if(req.name){
        return NextResponse.json({
            To:req.name,
            From:"Hussain Naqvi",
            message:"This is My Updated API"
        });
    }
    else {
      return new NextResponse('Please include your name in the PUT request');
    }

}