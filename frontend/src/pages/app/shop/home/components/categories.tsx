import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";

export const Categories: React.FC = function () {
  const swipe = useSwiper();

  return (
    <div className="mx-auto w-[1400px]">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Compre por categoria</h2>
        <div className="flex">
          <div className="rounded-md bg-zinc-200 p-4">
            <MoveLeft onClick={() => swipe.slidePrev()} size={20} />
          </div>
          <div className="ml-4 rounded-md bg-zinc-900 p-4 text-zinc-100">
            <MoveRight onClick={() => swipe.slideNext()} size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
