import ProductReel from "@/Components/listing/ProductReel";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

const ProductsItems = [
  {
    id: 1,
    images: [
      {
        url: "/products/CampKangiusaq/1.webp",
      },
      {
        url: "/products/CampKangiusaq/2.webp",
      },
      {
        url: "/products/CampKangiusaq/3.webp",
      },
      {
        url: "/products/CampKangiusaq/4.webp",
      },
      {
        url: "/products/CampKangiusaq/5.webp",
      },
    ],
    name: "Glamping at Camp Kangiusaq ", 
    label: "Nuuk",
    price: "4.000 DKK",
  },
  {
    id: 2,
    images: [
      {
        url: "/products/NuukIcefjordHike /1.webp",
      },
      {
        url: "/products/NuukIcefjordHike /2.webp",
      },
      {
        url: "/products/NuukIcefjordHike /3.webp",
      },
      {
        url: "/products/NuukIcefjordHike /4.webp",
      },
      {
        url: "/products/NuukIcefjordHike /5.webp",
      },
    ],
    name: "Nuuk Icefjord Hike ", 
    label: "Nuuk",
    price: "100$",
  },
  {
    id: 3,
    images: [
      {
        url: "/products/WhaleSafari/1.webp",
      },
      {
        url: "/products/WhaleSafari/2.jpg",
      },
      {
        url: "/products/WhaleSafari/3.webp",
      },
      {
        url: "/products/WhaleSafari/4.webp",
      },
      {
        url: "/products/WhaleSafari/5.webp",
      },
    ],
    name: "Private Whale Safari | Ilulissat", 
    label: "Ilulissat",
    price: "7.400 DKK",
  },
  {
    id: 4,
    images: [
      {
        url: "/products/WildlifeTour/1.webp",
      },
      {
        url: "/products/WildlifeTour/2.webp",
      },
      {
        url: "/products/WildlifeTour/3.webp",
      },
      {
        url: "/products/WildlifeTour/4.webp",
      },
      {
        url: "/products/WildlifeTour/5.webp",
      },
    ],
    name: "Tundra And Wildlife Tour | Kangerlussuaq ",
    label: "Kangerlussuaq",
    price: "395 DKK",
  },
];



export default function Home() {
  return (
    <div>
      <section className="w-full h-[100vh]">
        <MaxWidthWrapper>
          <div className="w-full h-full">
            <ProductReel title="ProductListing" href="/products" map={ProductsItems}/>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
