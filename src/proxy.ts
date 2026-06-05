import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/userService";
import { Roles } from "./constants/roles";

export async function proxy(request: NextRequest) {

    let isAuthenticated = false;
    let isProvider = false;

    const {data} = await userService.getUserSession()

  if(data){
    isAuthenticated = true;
    isProvider = data.user.role === Roles.provider
  }

  if(!isAuthenticated){
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if(isProvider){
    return NextResponse.redirect(new URL('/', request.url))
  }

    return NextResponse.next();
};


export const config = {
    matcher : [
        "/cart",
    ],
}