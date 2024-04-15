import ProductReel from "@/Components/listing/ProductReel";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

import { ProductsItems } from "@/config/index";



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
