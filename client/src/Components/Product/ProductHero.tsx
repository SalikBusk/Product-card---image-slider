"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { DragCloseDrawer } from "./DragDrawer";
import { Skeleton } from "../ui/skeleton";

interface ImageData {
  id: number;
  url: string;
}

interface ProductHeroProps {
  images: ImageData[];
  searchParams: Record<string, string> | null | undefined;
  index: number,
}

const ProductHero = ({ images, searchParams, index }: ProductHeroProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const show = searchParams?.show;

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  const ProductPlaceholder = () => {
    return (
      <>
      <section className="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-[10px] h-[70vh] w-full overflow-hidden ">
        {/* Big Image */}
        <main className="w-full overflow-hidden relative col-span-4">
          <div className="overflow-hidden">
            <Skeleton className="" />
          </div>
        </main>
        {/* Small Images */}
        <main className="w-full grid grid-cols-4 sm:grid-cols-4 md:grid-cols-1 gap-[10px] overflow-hidden ">
            <Skeleton className="" />
            <Skeleton className="" />
            <Skeleton className="" />
            <Skeleton className="" />
        </main>
      </section>
    </>
    );
  };

  if (!images || !isVisible) return <ProductPlaceholder />;
  
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
      <section className="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-[10px] h-[70vh] w-full overflow-hidden ">
        {/* Big Image */}
        <main className="w-full overflow-hidden relative col-span-4">
          <div className="overflow-hidden">
            <Image
              layout="fill"
              objectFit="cover"
              src={selectedImage ? selectedImage.url : images[0].url}
              alt="Product image"
              loading="eager"
              className="rounded-md"
            />
          </div>
        </main>
        {/* Small Images */}
        <main className="w-full grid grid-cols-4 sm:grid-cols-4 md:grid-cols-1 gap-[10px] overflow-hidden ">
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
                className="rounded-md"
              />
            </div>
          ))}
        </main>
        {/* modal knap */}
        <div className="absolute left-0 bottom-0 p-2">
          <DragCloseDrawer/>
      </div>
      </section>
    </>
  );
};

export default ProductHero;





