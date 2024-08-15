import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <Helmet title="Principal" />
            <div className="w-screen h-screen bg-zinc-900 flex items-center content-center">
                <div className="w-[1800px] grid grid-cols-8 gap-1 items-center content-center">
                    <Link to="/user" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Usuário</Link>
                    <Link to="/typeuser" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Tipo de usuário</Link>
                    <Link to="/variationdescription" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Variação descrição</Link>
                    <Link to="/variationvalue" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Variação valor</Link>
                    <Link to="/address" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Endereço</Link>
                    <Link to="/loja" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Loja</Link>
                    <Link to="/product" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Produto</Link>
                    <Link to="/category" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Categoria</Link>
                    <Link to="/subcategory" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">SubCategoria</Link>
                    <Link to="/subproduct" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">SubProduto</Link>
                    <Link to="/orderitem" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Item Pedido</Link>
                    <Link to="/order" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Pedido</Link>
                    <Link to="/payment" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Pagamento</Link>
                    <Link to="/ticket" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Ticket</Link>
                    <Link to="/coupon" className="p-4 bg-zinc-500 m-2 w-52 flex items-center content-center rounded-lg">Cupom</Link>
                </div>
            </div>
        </>
    )
}