import React from "react";
import Breadcrumb from "../components/Breadcrumb/Index";
import ShipingDetails from "../parts/Card/ShipingDetails";
import ShopingCard from "../parts/Card/ShopingCard";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";

function Card() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/card", name: "Shoping Cart" },
        ]}
      />
      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShopingCard/>
            <ShipingDetails/>
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}

export default Card;
