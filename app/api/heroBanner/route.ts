import db from "./../../../data/db.json";
import { NextResponse } from "next/server";

export default function GET() {
  return NextResponse.json(db.heroBanner);
}
