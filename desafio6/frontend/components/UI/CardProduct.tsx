import Image from 'next/image';
import { ProductObject } from '../../types/productCtxTypes';

export const CardProduct = ({ description, price, stock, thumbnail, title }: ProductObject) => {
  return (
    <div className="w-1/4 h-1/6 flex flex-col bg-white rounded-lg shadow-lg">
        <div className="flex justify-center">
            <Image className="rounded-t-lg" width={400} height={100} src="https://d22fxaf9t8d39k.cloudfront.net/a04ad80f020898736cb037b95dc337e99291dc9ed05458c8920856a5eca39b634786.png" alt="product image" />
        </div>
        <div className="px-5 pb-5">
            <p className="text-xl font-semibold tracking-tight text-gray-900">{title}</p>
            <div className="flex flex-col mt-2.5 mb-5">
                <p>{description}</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Quedan {stock}</span>
            <div className="flex justify-between items-center mt-5">
                <span className="text-3xl font-bold text-gray-900">${price}</span>
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
            </div>
            <div className=" mt-4 flex">
                <div className="px-5 py-1 bg-orange-500 text-white rounded-lg cursor-pointer">
                    <i className="bi bi-pencil"></i>
                </div>
                <div className="ml-5 px-6 py-1 bg-red-500 text-white rounded-lg cursor-pointer">
                    <i className="bi bi-trash"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
