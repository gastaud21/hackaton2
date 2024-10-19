import { useEffect, useState } from "react"

export default function Carrinho() {

    const [cart, setCart] = useState([])


    useEffect(() => {
        async function buscaDados() {
            const response = await fetch(`https://cesta-rural-back.vercel.app/products`)
            const dados = await response.json()
            setCart(dados.products)
          }
          buscaDados()
      }, [])

      function mostraDados(){
        console.log(cart[0])
      }


    // function itemCart(){
    //     return(cart.map((e) => (
    //         <li className="py-3 sm:py-4">
    //         <div className="flex items-center">
    //             <div className="flex-shrink-0">
    //                 <img className="w-8 h-8 rounded-md" src={"dsf"} alt="Neil image" />
    //             </div>
    //             <div className="flex-1 min-w-0 ms-4">
    //                 <p className="text-sm font-medium text-black truncate dark:text-black">
    //                     {"dssd"}
    //                 </p>
    //                 <p className="text-sm text-gray-500 truncate dark:text-gray-400">
    //                     1 Un x R$ {"ds"}
    //                 </p>
    //             </div>
    //             <div className="inline-flex items-center text-base font-semibold text-black dark:text-black">
    //                 R$ 22,40
    //             </div>
    //         </div>
    //     </li>)
    //     ))
    // }


    return (
        <>
            {/* <div className="w-full max-w-md border border-gray-200 shadow sm:p-8 bg-primary-amarelo rounded-br-none rounded-bl-none rounded-tr-none rounded-tl-none">
                <h5 className="text-xl font-bold leading-none  dark:text-black">Carrinho de Compras</h5>

            </div> */}
            <div className="w-full max-w-md p-4 border border-gray-200 rounded-lg shadow sm:p-8 rounded-tr-none rounded-tl-none">
                <div className="flex items-center justify-between mb-4 ">
                    <h5 className="text-xl font-bold leading-none  dark:text-black">Carrinho de Compras</h5>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-800 dark:divide-gray-800">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZ7A9mG4KMaaHxd57QDg0Qg3tCIr7LR9IQg&s" alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-black truncate dark:text-black">
                                        Linguiça Temperada
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        1 Un x R$ 12,50
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-black dark:text-black">
                                    R$ 22,40
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center ">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-md" src="https://s2-receitas.glbimg.com/eFEtAELoEK6KiqlpgiqVhBELw10=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/N/W/uBfJYdQKes9vZwl0OgMg/cuca-de-doce-de-leite-receita.jpg" alt="Bonnie image" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-black truncate dark:text-black">
                                        Cuca de Banana, Canela e Doce de Leite
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        1 Un x R$ 12,50
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-black dark:text-black">
                                    R$ 3,60
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-md" src="https://s2-receitas.glbimg.com/TRqdBlkPmz_82cfV9Hxae8Mt-YU=/0x0:1280x884/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/e/9/QICcByReSvmBk3UO9sZg/geleia-de-morango.jpeg" alt="Michael image" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-black truncate dark:text-black">
                                        Chimia de Morango
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        1 Un x R$ 12,50
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-black dark:text-black">
                                    R$ 67,40
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center ">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37t8f0317d50MigtNrHXvxSev77rrTVk_yw&s" alt="Lana image" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-black truncate dark:text-black">
                                        Manteiga pote 500g
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        1 Un x R$ 12,50
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-black dark:text-black">
                                    R$7,00
                                </div>
                            </div>
                        </li>
                        {/* <li className="py-3 sm:py-4">
                            <div className="flex items-center ">
                                <div className="flex-shrink-0">
                                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-black truncate dark:text-black">
                                        Melão
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        1 Un x R$ 12,50
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-black dark:text-black">
                                    R$ 12,50
                                </div>
                            </div>
                        </li> */}
                        {}
                        <li className="pt-3 pb-0 sm:pt-4">
                            <div className="flex items-center ">
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-black truncate dark:text-black">
                                        TOTAL
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-black dark:text-black">
                                    SOMA
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className="flex justify-end">
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Finalizar Compra</button>
            </div> */}
            <div className="w-full max-w-md p-4  rounded-lg  sm:p-8 rounded-tr-none rounded-tl-none flex justify-end">
                <button type="button" onClick={mostraDados} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Finalizar Compra</button>
            </div>

        </>
    )
}