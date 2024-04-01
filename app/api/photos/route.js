import { photos } from "@/data/image-data";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(photos);
};

