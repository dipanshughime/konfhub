import { NextResponse } from "next/server";
import axios from 'axios'

export async function GET(request){
    try{
        const response = await axios.get("https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task");
        const result = await response.json();
        console.log(result)
        return NextResponse.json({result})
    }catch(error){
        return NextResponse.json({error: error.message},{status:500})
    }
}
