"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import DeleteImage from "./DeleteImage";

type ImageType = {
  _id: string;
  image_url: string;
  public_id: string;
};

type ImagesProps = {
  images: ImageType[];
};

export default function DisplayImages({ images }: ImagesProps) {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      selector="a"
      elementClassNames="flex flex-wrap gap-4"
    >
      {images.map((image) => (
        <div
          key={image._id}
          className="relative w-32 h-32 border overflow-hidden rounded-xl"
        >
          <a
            className="block w-full h-full"
            href={image.image_url}
            data-src={image.image_url}
          >
            <Image
              src={image.image_url}
              alt={image.public_id}
              fill
              className="object-cover transition hover:scale-105"
            />
          </a>

          <DeleteImage id={image._id} />
        </div>
      ))}
    </LightGallery>
  );
}
