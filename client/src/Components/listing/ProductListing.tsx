"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Link from "../../../node_modules/next/link";
import { Skeleton } from "../ui/skeleton";
import ImageSlider from "./ImageSlider";

interface ProductListingProps {
  product: Product | null;
  index: number;
}

const ProductListing = ({ product, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  const ProductPlaceholder = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
          <Skeleton className="h-full w-full" />
        </div>
        <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
        <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
        <Skeleton className="mt-2 w-12 h-4 rounded-lg" />
      </div>
    );
  };

  if (!product || !isVisible) return <ProductPlaceholder />;

  const validUrls = product.images.map((image) =>
    typeof image === "string" ? image : image.url
  ).filter(Boolean) as string[];

  if (isVisible && product) {
    return (
      <Link
        className={cn("invisible h-full cursor-pointer group/main", {
          "visible animate-in fade-in-5": isVisible,
        })}
        href={`/product/${product.id}`}
      >
        <div className="flex flex-col w-full">
          {/* image */}
          <ImageSlider urls={validUrls} />
          {/* content */}
          <h3 className="mt-4 font-medium text-sm text-gray-700">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.label}</p>
          <p className="mt-1 font-medium text-sm text-gray-900">
            {product.price}
          </p>
        </div>
      </Link>
    );
  }
};

export default ProductListing;
