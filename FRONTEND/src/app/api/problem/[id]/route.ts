import { NextRequest, NextResponse } from "next/server";
import allProblems from "@/app/api/problems.json";

export async function GET(request : NextRequest){
    const id = Number(request.url.split("/").pop());
    if(!id){
        return NextResponse.json({
            sucess : false,
            message : "id is not defined"
        });
    }
    const problem = allProblems.find(problem => problem.id == id);
    if(problem){
        return NextResponse.json({
            success : true,
            problem
        });
    }
    return NextResponse.json({
        success : false,
        message : "Problem not found"
    });
}