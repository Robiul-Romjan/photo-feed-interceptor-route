import { photos } from "@/data/image-data";
import { NextResponse } from "next/server";

export const GET = async (_request, {params}) => {
    const photoId = params?.id

    const singlePhoto = photos.find((photo) => photo.id === photoId)

  return NextResponse.json(singlePhoto);
};