import { NextResponse } from "next/server";
import { productsData } from "@/data/productsData";
import { error } from "console";
export async function GET() {
  try {
    if (!productsData || productsData.length === 0) {
      return NextResponse.json(
        { error: "products not found" },
        { status: 404 }
      )
    }
    return NextResponse.json(productsData, { status: 200 }) 
  } catch {
    console.error("products cant fetch")
    return NextResponse.json(
      { error: "failed get products Data" },
      {status:500}
    )
  }
}