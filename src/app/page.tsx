import GridOption from '@/components/GridOption';

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4">
        <GridOption
          title="Sweet gifts for less"
          image="/grid/sweet-gifts.webp"
          className="bg-pink-200 h-full md:h-32"
        />
        <GridOption
          title="Shop Wardrobe"
          image="/grid/shop-wardrobe.webp"
          className="bg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Home"
          image="/grid/shop-wardrobe.webp"
          className="bg-pink-200 row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image="/grid/shop-electronics.jpeg"
          className="bg-yellow-100 h-64"
        />
        <GridOption
          title="Shop Toys"
          image="/grid/shop-toys.jpeg"
          className="bg-green-100 h-64 col-span-2"
        />
        <GridOption
          title="All you need for Match Day"
          image="/grid/match-day.jpeg"
          className="bg-red-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Gadgets"
          image="/grid/shop-gadgets.jpeg"
          className="bg-orange-100 h-64"
        />
        <GridOption
          title="Shop Beauty"
          image="/grid/shop-beauty.webp"
          className="bg-blue-100 b-64"
        />
        <GridOption
          title="Shop Sports"
          image="/grid/shop-sports.jpeg"
          className="bg-blue-100 h-64"
        />
        <GridOption
          title="Enjoy Free Shipping"
          image="/grid/free-shipping.webp"
          className="bg-rose-100 h-64"
        />
        <GridOption
          title="Flash Deals"
          image="/grid/flash-deals.jpeg"
          className="bg-orange-200 h-64 col-span-2"
        />
      </div>
    </main>
  );
}
