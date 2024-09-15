import { NextRequest, NextResponse } from "next/server";
import allProblems from "@/app/api/problems.json";

export async function GET() {
    if(allProblems){
        const problems = allProblems.map(problem => ({
            id : problem.id,
            question : problem.question
        }));
        return NextResponse.json({
            success : "true",
            problems
        });
    }
    return NextResponse.json({
        success : false,
        message : "Error fetching data"
    });
}