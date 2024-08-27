import { Heart, Search, ShoppingBag } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = function () {
  return (
    <header className="mx-auto flex max-w-[1400px] items-center justify-between py-4">
      <h1>Inceptum</h1>
      <nav>
        <ul className="flex flex-wrap items-center">
          <Link to="#">
            <li className="mr-3 p-3">Principal</li>
          </Link>
          <Link to="#">
            <li className="mr-3 p-3">Loja</li>
          </Link>
          <Link to="#">
            <li className="mr-3 p-3">Nossa História</li>
          </Link>
          <Link to="#">
            <li className="mr-3 p-3">Blog</li>
          </Link>
          <Link to="#">
            <li className="p-3">Fale Conosco</li>
          </Link>
        </ul>
      </nav>
      <div className="flex flex-wrap items-center">
        <div className="mr-3 flex gap-3">
          <Search />
          <Heart />
          <ShoppingBag />
        </div>
        <button className="ml-5 flex-wrap rounded-md bg-zinc-900 px-7 py-3 text-zinc-200">
          Entrar
        </button>
      </div>
    </header>
  );
};
