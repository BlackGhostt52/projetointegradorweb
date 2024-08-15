import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function Register() {
    return (
        <>
            <Helmet title="Registrar-se" />
            <div className="w-screen h-screen flex">
                <div className="w-2/4 h-screen bg-zinc-950">

                </div>
                <div className="w-2/4 h-screen flex items-center justify-center bg-zinc-900">
                    <form action="">
                        <fieldset>
                            <legend className="text-7xl text-zinc-50">Registrar-se</legend>
                            <div className="mt-14 flex flex-col">
                                <div className="">
                                    <label htmlFor="" className="text-xl block text-zinc-50 mb-2">Nome da Loja:</label>
                                    <input type="text" name="" id="" placeholder="Digite o e-mail aqui..." className="w-[480px] p-4 border-zinc-700 border-solid rounded-lg bg-zinc-800 placeholder:text-zinc-400 text-base outline-blue-600" />
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="" className="text-xl block text-zinc-50 mb-2">E-mail de contato:</label>
                                    <input type="text" name="" id="" placeholder="Digite o e-mail aqui..." className="w-[480px] p-4 border-zinc-700 border-solid rounded-lg bg-zinc-800 placeholder:text-zinc-400 text-base outline-blue-600" />
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="" className="text-xl block text-zinc-50 mb-2">Número de telefone:</label>
                                    <input type="text" name="" id="" placeholder="Digite o e-mail aqui..." className="w-[480px] p-4 border-zinc-700 border-solid rounded-lg bg-zinc-800 placeholder:text-zinc-400 text-base outline-blue-600" />
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="" className="text-xl block text-zinc-50 mb-2">Senha:</label>
                                    <input type="text" name="" id="" placeholder="Digite o e-mail aqui..." className="w-[480px] p-4 border-zinc-700 border-solid rounded-lg bg-zinc-800 placeholder:text-zinc-400 text-base outline-blue-600" />
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="" className="text-xl block text-zinc-50 mb-2">Confirme a senha:</label>
                                    <input type="text" name="" id="" placeholder="Digite o e-mail aqui..." className="w-[480px] p-4 border-zinc-700 border-solid rounded-lg bg-zinc-800 placeholder:text-zinc-400 text-base outline-blue-600" />
                                </div>
                                <button type="submit" className="text-zinc-50 w-[480px] bg-blue-600 rounded-lg p-4 mt-10 uppercase">Entrar</button>
                                <Link to="/login" className="text-zinc-50 text-xl underline text-center mt-5">Já possui uma conta?</Link>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    )
}