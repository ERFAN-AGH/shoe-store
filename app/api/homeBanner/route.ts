import { NextResponse } from "next/server";
import db from "./../../../data/db.json";

export default function GET() {
  return NextResponse.json(db.homeBanner);
}
