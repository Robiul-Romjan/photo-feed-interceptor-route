import Image from "next/image";
import Link from "next/link";

const PhotoCard = ({photo}) => {
    return (
        <Link href={`photos/${photo.id}`} className="group">
        <Image
        className="w-full"
          height={100}
          width={100}
          src={photo.url}
          alt={photo.title}
        />
        <div className="title-container">
          <h4 className="title">{photo.title}</h4>
        </div>
      </Link>
    );
};

export default PhotoCard;