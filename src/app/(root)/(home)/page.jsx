
import Image from "next/image";
import Category from "./_components/Category";
import Sale from "./_components/Sale";
import BlocksHeader from "@/components/BlocksHeader";
import CardItems from "./_components/CardItems";
import Stock from "./_components/Stock";
import Brands from "./_components/Brands";
import Popular from "./_components/Popular";
import Blogs from "./_components/Blogs";
import Advantages from "./_components/Advantages";
import { productBestSellers, productNew } from "@/consts/consts";
import { Button } from "@/components/ui/button";



export default function Home() {
    return (
        <main className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-5  justify-between py-3 md:py-6 ">
                <div className="basis-full md:basis-2/5 flex min-h-full flex-col mb:py-2 sm:py-6 xl:py-[56px] items-start">
                    <h1 className="text-3xl sm:text-5xl xl:text-6xl text-primary-700 sm:mb-2.5  lg:mb-[50px]">Tech Heim</h1>
                    <p className="text-xl sm:text-2xl lg:text-3xl h-full mb-5 text-primary-700 font-medium leading-normal">&quot;Join the <span className="text-secondar">digital revolution</span>&quot;</p>
                    <Button className={"w-full sm:w-auto"} variant="orange" size={"lg"}>
                        Explore More
                    </Button>
                </div>
                <div className="basis-full md:basis-3/5">
                    <Image
                        alt={"image"}
                        width={728}
                        height={443}
                        src="/assets/img/main-block.png"
                    />
                </div>
            </div>
            <Category/>
            <Sale/>
            <BlocksHeader title={"New Products"} linkHref={"/"}>
                <CardItems products={productNew}/>
            </BlocksHeader>
            <Stock/>
            <BlocksHeader title={"Best Sellers"} linkHref={"/"}>
                <CardItems products={productBestSellers}/>
            </BlocksHeader>
            <Brands/>
            <Popular/>
            <Blogs/>
            <Advantages/>
            
        </main>
    );
}
