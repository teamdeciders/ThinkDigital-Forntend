import React, { useState } from "react";

const productImg = {
  images: [
    "https://cdn.pixabay.com/photo/2023/03/28/19/54/mountains-7884039_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/03/29/14/43/monstera-7885646_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/04/02/09/24/rainbow-lorikeet-7894138_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/03/17/16/14/silhouette-7858977_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/04/02/09/24/rainbow-lorikeet-7894138_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/03/17/16/14/silhouette-7858977_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/04/02/09/24/rainbow-lorikeet-7894138_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/04/02/09/24/rainbow-lorikeet-7894138_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/03/28/19/54/mountains-7884039_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/03/29/14/43/monstera-7885646_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/04/02/09/24/rainbow-lorikeet-7894138_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/03/17/16/14/silhouette-7858977_960_720.jpg",
  ],
};
function SingleProductPage() {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = (n) => {
    setSlideIndex((pre) => pre + n);
    slideIndex();
  };

  return (
    <div className="p-10">
      <div className="grid grid-cols-2 gap-10 justify-between items-center">
        {/* img */}
        <section className="">
          <div className="relative w-100% p-[5px] h-[370px] overflow-hidden">
            {productImg.images.map((image, index) => (
              <div
                key={index}
                className="relative h-[330px]"
                style={{ display: index + 1 === slideIndex ? "block" : "none" }}
              >
                <h1 className="absolute top-0 left-0">
                  {index + 1}/ {productImg.images.length}
                </h1>

                <img
                  src={image}
                  alt=""
                  className="w-100% h-100% inline-block object-cover"
                />
              </div>
            ))}
            <span
              className=" absolute  top-1/2 text-white text-3xl  w-auto border-r-2"
              onClick={() => nextSlide(-1)}
            >
              {" "}
              ◀
            </span>
            <span
              className=" absolute right-0 border-r-2  top-1/2 text-white text-3xl  w-auto"
              onClick={() => nextSlide(1)}
            >
              {" "}
              ▶
            </span>
          </div>
          <div className="w-100% h-[100px] overflow-x-scroll flex select-none">
            {productImg.images.map((image, index) => (
              <div
                key={index}
                className="w-[100px] min-w-[100px] cursor-pointer overflow-hidden p-2 h-[80px]"
              >
                <img
                  src={image}
                  alt=""
                  className="w-100% h-100% inline-block object-cover"
                />
              </div>
            ))}
          </div>
        </section>
        {/* description */}
        <section className="m-6">
          <h1 className=" font-bold text-3xl pb-7">
            Crisop - Elementor Grocery Store & Food WooCommerce Theme
          </h1>
          <p className=" text-lg pb-7">
            Grocery Store, Grocery Shop, Organic Food, Agriculture /
            Agricultural Product, Fruit & Vegetables Theme/Website Builder –
            Elementor Based Responsive Multi-purpose Modern AJAX E-Commerce
            WooCommerce WordPress Theme + RTL .
          </p>
          <div className="flex justify-start">
            <h5 className="p-3 text-xl">12 Sale</h5>
            <h5 className="p-3 text-xl">16 Review</h5>
          </div>
          <div className="grid grid-cols-3 bg-white border-x-2 rounded text-black py-8">
            <div className="flex flex-auto col-span-1 items-center border-r-2 border-r-slate-950 justify-center">
              <img
                className="rounded-full w-10 h-10 flex justify-center items-center basis-1/3 m-4"
                src="https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />{" "}
              <div className="basis-2/3">
                <h4>Next GEN BD</h4>
                <p>100+ Sales</p>
              </div>
            </div>
            <h1 className="col-span-1 flex justify-center items-center border-r-2 border-r-slate-950">
              100+ Sales
            </h1>
            <button className="col-span-1 ">Add To Cart</button>
          </div>
        </section>
      </div>
      <section className="my-10">
        <h1 className=" font-bold text-3xl pb-7">Description</h1>
        <hr />
        <p>
          You can create any website store with Crisop with its uniquely
          powerful features such as fully AJAX, comprehensive Elementor Free
          support, Drag & Drop Header, Footer and page builder. When you want to
          customize or sell a product with a campaign, it will take a few
          minutes to do it. Crisop provides you with unique advantages when you
          want to create widgets such as location, campaign creation, popup. You
          can make promotions in Elementor supported areas on the product page,
          and you can use similar areas on the store page. In addition to the
          basic features of WooCommerce, it contains all the sales-enhancing
          features required for an online store, thanks to this infrastructure,
          your sales rates will increase. The support you will receive from the
          team, which has received thousands of good reviews and has 5 star
          customer support labels, is also important, you will not have to
          search for another design for your store for years. Some related
          search queries: Sell organic foods, grocery store, grocery shop
          website builder, agricultural products, nutrition, healthy products,
          fruits and vegetables, food store, food delivery, food shop, online
          supermarket, jewelry, jewelery, farm products, cultivation, tillage,
          agrarian, gold shop, gem store, bijouterie, cosmetic, clothes, dress,
          baby accessories, multi vendor, dokan, food product and online food
          products, decor, furniture, case, phone cases, underwear, lingerie,
          shoes, sport parts, personal care, outdoor, lux and designer works,
          personal shop, electronics, watch, bag, suitcase, interesting things,
          lighting and home textile, organic food, electronics, organic food,
          naturals, supermarket, home decoration, grocery, clothes, petshop,
          sports nutrition or accessories, this clean design will suit any
          industry and shop / store. Thanks to this theme, which is AJAX based
          and is empowered with many special techniques, your sales and brand
          value will reach the maximum levels that you should have. RTL
          Supported
        </p>
      </section>
    </div>
  );
}

export default SingleProductPage;
