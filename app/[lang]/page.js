import PhotoCard from "@/components/PhotoCard";
import { photos } from "@/data/image-data";

export default async function Home() {

  return (
    <div className="img-grid">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
