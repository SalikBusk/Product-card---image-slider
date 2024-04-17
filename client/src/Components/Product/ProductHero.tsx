"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/Components/ui/button";
import { DragCloseDrawer } from "./DragDrawer";

interface ImageData {
  id: number;
  url: string;
}

interface ProductHeroProps {
  images: ImageData[];
  searchParams: Record<string, string> | null | undefined;
}

const ProductHero = ({ images, searchParams }: ProductHeroProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const show = searchParams?.show;
  

  const handleSmallImageClick = (image: ImageData) => {
    if (selectedImage) {
      const index = images.findIndex((img) => img.id === image.id);
      const newImages = [...images];
      newImages[index] = selectedImage;
      setSelectedImage(image);
      return newImages;
    } else {
      setSelectedImage(image);
    }
  };

  const smallImages = images.slice(0, 4);

  return (
    <>
      <section className="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-[10px] h-[70vh] w-full overflow-hidden ">
        {/* Big Image */}
        <main className="w-full overflow-hidden relative">
          <div className="overflow-hidden">
            <Image
              layout="fill"
              objectFit="cover"
              src={selectedImage ? selectedImage.url : images[0].url}
              alt="Product image"
              loading="eager"
              className="rounded-xl"
            />
          </div>
        </main>
        {/* Small Images */}
        <main className="w-full grid grid-cols-4 sm:grid-cols-4 md:grid-cols-2 gap-[10px] overflow-hidden ">
          {smallImages.map((image: ImageData) => (
            <div
              key={image.id}
              className="relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage((prev) => handleSmallImageClick(image))}
            >
              <Image
                layout="fill"
                objectFit="cover"
                src={image.url}
                alt="Product image"
                loading="eager"
                className="rounded-xl"
              />
            </div>
          ))}
        </main>
        {/* modal knap */}
        <div className="absolute right-0 bottom-0 p-2">
          <DragCloseDrawer/>
      </div>
      </section>
    </>
  );
};

export default ProductHero;





