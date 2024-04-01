import { getDictionary } from "@/app/[lang]/dictionaries";
import { photos } from "@/data/image-data";
import Image from "next/image";


const PhotoDetail = async ({id, lang}) => {
    const singlePhoto = photos.find((photo)=> photo.id === id);

    const dictionary = await getDictionary(lang);

    return (
        <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
        {/* <!-- main photo --> */}
        <div className="col-span-12 lg:col-span-8 border rounded-xl">
          <Image height={500} width={900} className="m-w-full h-full max-h-[70vh] mx-auto" src={singlePhoto.url} alt="" />
        </div>
        {/* <!-- main photo ends -->
  
        <!-- details card --> */}
        <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
          <h2 className="text-lg lg:text-2xl font-bold mb-2">
            {singlePhoto.title}
          </h2>
          <div className="text-xs lg:text-sm text-black/60 mb-6">
           {singlePhoto.tags.map((tag)=> <span key={tag}>#{tag} </span>)}
          </div>
          {/* <!-- info rows --> */}
          <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
            {/* <!-- item start --> */}
            <div className="flex justify-between">
              <span>{dictionary.views}</span>
              <span className="font-bold">{singlePhoto?.views}</span>
            </div>
            {/* <!-- item ends -->
            <!-- item start --> */}
            <div className="flex justify-between">
              <span>{dictionary.share}</span>
              <span className="font-bold">{singlePhoto.share}</span>
            </div>
            {/* <!-- item ends --> */}
            {/* <!-- item start --> */}
            <div className="flex justify-between">
              <span>{dictionary.uploadedOn}</span>
              <span className="font-bold">{singlePhoto.uploaded}</span>
            </div>
            {/* <!-- item ends --> */}
          </div>
          {/* <!-- info rows ends --> */}
  
          {/* <!-- author info --> */}
          <div className="mt-6">
            {/* <!-- author header --> */}
            <div className="flex justify-between items-center mb-3">
              {/* <!--  --> */}
              <div className="flex items-center gap-3">
                <Image width={48} height={48} className="size-12 lg:size-14 rounded-full border" src={singlePhoto?.author?.avatar} alt="avatar" />
                <div className="spacy-y-3">
                  <h6 className="lg:text-lg font-bold">{singlePhoto.author.name}</h6>
                  <p className="text-black/60 text-xs lg:text-sm">{singlePhoto.author.followers} Followers</p>
                </div>
              </div>
              {/* <!-- action --> */}
              <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                <Image height={20} width={20} src="/follow.svg" className="w-5 h-5" alt="" />
                {dictionary.follow}
              </button>
            </div>
            {/* <!-- author bio --> */}
            <p className="text-xs lg:text-sm text-black/60">
              {singlePhoto.author.bio}
            </p>
          </div>
          {/* <!-- author info ends --> */}
          {/* <!-- actions --> */}
          <div className="mt-6">
            <div className="flex items-stretch gap-3">
              <button
                className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image src="/heart.svg" height={20} width={20} className="w-5 h-5" alt="heart icon" />
                {singlePhoto.likes}
              </button>
              <button
                className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image src="/save.svg" height={20} width={20} className="w-5 h-5" alt="save icon" />
                {dictionary?.save}
              </button>
              <button
                className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image src="/share.svg" height={20} width={20} className="w-5 h-5" alt="share icon" />
                {dictionary?.share}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PhotoDetail;