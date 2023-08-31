import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = (req: NextRequest) => {
  const token = req.nextUrl.searchParams.get("token") ?? "";
  const cookieStore = cookies();
  let redirectUrl = new URL(process.env["FRONTEND_BASEURL"] ?? "");
  redirectUrl.pathname += "/";
  cookieStore.set("access_token", token);
  return NextResponse.redirect(redirectUrl);
};
