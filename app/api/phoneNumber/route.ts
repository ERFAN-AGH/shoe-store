import { NextResponse } from "next/server";
import db from "../../../data/db.json";

export function GET() {
  return NextResponse.json(db.phoneNumber);
}
