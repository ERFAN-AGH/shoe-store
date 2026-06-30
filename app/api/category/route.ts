import db from "./../../../data/db.json";
import { NextResponse } from "next/server";
export function Get() {
  return NextResponse.json(db.category);
}
