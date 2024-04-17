"use client"

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Link from "next/link";
import { ProductsItems } from "@/config/index";
import ImageSlider from "@/Components/listing/ImageSlider";
import ProductReel from "@/Components/listing/ProductReel";
import { notFound } from "../../../../node_modules/next/navigation";
import ProductHero from "@/Components/Product/ProductHero";

interface PageProps {
  params: {
    productId: string;
  };
}

const Page = ({ params }: PageProps) => {
  // Find the product based on productId
  const product = ProductsItems.find(
    (item) => item.id === parseInt(params.productId)
  );

  if (!product) return notFound();

  const validUrls = product.images
    .map((image) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  // Filter products with the same label
  const similarProducts = ProductsItems.filter(
    (item) => item.label === product.label && item.id !== product.id
  );

  const BREADCRUMBS = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Products", href: "/Products" },
    { id: 3, name: `${product.category}`, href: `/product/${product.id}` },
    { id: 4, name: `${product.name}`, href: `/product/${product.id}` },
  ];

  return (
    <div>
      <MaxWidthWrapper>
        <div className="">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:grid lg:max-w-7xl  lg:gap-x-8 lg:px-8">
            {/* Product details */}
            <div className="w-full">
              <ol className="hidden md:flex items-center space-x-2">
                {BREADCRUMBS.map((breadcrumb, i) => (
                  <li key={breadcrumb.href}>
                    <div className="flex items-center text-sm">
                      <Link
                        href={breadcrumb.href}
                        className="font-medium text-sm text-muted-foreground hover:text-black"
                      >
                        {breadcrumb.name}
                      </Link>
                      {i !== BREADCRUMBS.length - 1 ? (
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>

              {/* Product name */}
              <div className="mt-4">
                <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl ">
                  {product.name}
                </h1>
              </div>

              {/* Product images */}
              <section className="w-full h-[70vh] mt-10">
                <div className="aspect-square rounded-lg w-full">
                  <ProductHero images={product.images} />
                </div>
              </section>

              <section className="mt-10 w-full flex flex-row gap-5">
                <div className="w-2/3 md:border-r md:border-gray-300">
                  <div className="flex items-center md:border-b md:border-gray-300 py-2">
                    <p className="font-medium text-gray-900">{product.name}</p>

                    <div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
                      {product.label}
                    </div>
                  </div>

                  <div className="mt-4 space-y-6">
                    <p className="text-base text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="w-1/2 h-auto rounded-xl bg-gray-200 p-5 flex-1">
                  <p className="text-3xl font-smibold tracking-tighter text-gray-900 sm:text-4xl text-center">
                    {product.price}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Product Reel */}
        <ProductReel
          href="/products"
          title={`Similar ${product.label}`}
          subtitle={`Browse similar high-quality ${product.label} just like '${product.name}'`}
          map={ProductsItems}
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
