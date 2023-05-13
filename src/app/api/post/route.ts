import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const req=await request.json()
    if(req.name){
    return NextResponse.json({
        To:req.name,
        age:41,
        message:"Hellow Assad all is well"
    } );}
    
    else {
        return new NextResponse('Please include your name in the POST request');
      }
}
