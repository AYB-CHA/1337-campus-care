import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = (req: NextRequest) => {
  const cookieStore = cookies();
  let homeUrl = new URL(process.env["FRONTEND_BASEURL"] ?? "");
  cookieStore.delete("access_token");
  return NextResponse.redirect(homeUrl);
};
