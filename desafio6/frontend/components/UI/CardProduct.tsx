import Image from 'next/image';
import { ProductObject } from '../../types/productCtxTypes';
import axios from 'axios';

export const CardProduct = ({ description, price, stock, thumbnail, title, isAdded, id }: ProductObject) => {
    const postProductInCart = async (id: number) => {
        /* await axios.post('http://localhost:8080/api/carrito/1/productos', id) */

        console.log(id)
    }

    const deleteProductInCart = async (id: string) => {
        /* await axios.delete(`http://localhost:8080/api/carrito/1/productos/${id}`) */
        console.log(`http://localhost:8080/api/carrito/1/productos/${id}`)
    }

    return (
        <div className="w-1/4 h-1/6 flex flex-col bg-white rounded-lg shadow-lg">
            <div className="flex justify-center w-full h-1/2">
                <Image className="rounded-t-lg" width={400} height={100} src={thumbnail} alt="product image" />
            </div>
            <div className="px-5 pb-5">
                <p className="text-xl font-semibold tracking-tight text-gray-900">{title}</p>
                <div className="flex flex-col mt-2.5 mb-5">
                    <p>{description}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Quedan {stock}</span>
                <div className="flex justify-between items-center mt-5">
                    <span className="text-3xl font-bold text-gray-900">${price}</span>
                    {isAdded && (
                        <button 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={() => postProductInCart(id)}
                        >Add to cart</button>
                    )}
                </div>
                <div className=" mt-4 flex">
                    {isAdded ? (
                        <>
                            <div className="px-5 py-1 bg-orange-500 text-white rounded-lg cursor-pointer">
                                <i className="bi bi-pencil"></i>
                            </div>
                            <div className="ml-5 px-6 py-1 bg-red-500 text-white rounded-lg cursor-pointer">
                                <i className="bi bi-trash"></i>
                            </div>
                        </>
                    ) : (
                        <button 
                            className="ml-5 px-6 py-1 bg-red-500 text-white rounded-lg cursor-pointer"
                            onClick={() => deleteProductInCart(id.toString())}
                        >Remove to cart</button>
                    )}
                </div>
            </div>
        </div>
    )
}
