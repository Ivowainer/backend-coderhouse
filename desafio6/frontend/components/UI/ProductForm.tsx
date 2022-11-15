import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../context/productContext"
import { ProductCtxType } from "../../types/productCtxTypes"



const ProductForm = () => {
    /* const [title, setTitle] = useState('') */
    /* const [description, setDescription] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('') */

    const { changeTitle, changeDescription, changePrice, changeStock, changeThumbnail, objectProduct, submitProduct } = useContext(ProductContext) as ProductCtxType

    return (
        <form>
            <div className="mb-6">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                <input 
                    type="text" 
                    id="title" 
                    className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Your product's title" 
                    required 
                    onChange={e => changeTitle(e.target.value)}
                    value={objectProduct.title || ''}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                <textarea 
                    id="description"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" 
                    placeholder="Your product's description" 
                    required 
                    onChange={e => changeDescription(e.target.value)}
                    value={objectProduct.description || ''}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="thumbnail" className="block mb-2 text-sm font-medium text-gray-900 ">Thumbnail</label>
                <input 
                    type="text" 
                    id="thumbnail" 
                    className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="https://w7.pngwing.com/pngs/709/627/png-transparent-google-docs-form-google-purple-violet-text-thumbnail.png" 
                    required 
                    onChange={e => changeThumbnail(e.target.value)}
                    value={objectProduct.thumbnail || ''}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                <input 
                    type="number" 
                    id="price" 
                    className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required 
                    onChange={e => changePrice(e.target.value)}
                    value={objectProduct.price || ''}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 ">Stock</label>
                <input 
                    type="number" 
                    id="stock" 
                    className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    required 
                    onChange={e => changeStock(e.target.value)}
                    value={objectProduct.stock || ''}
                />
            </div>
            
            <button 
                type="submit" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={(e) => submitProduct(e)}
            >Guardar producto</button>
        </form>
    )
}

export default ProductForm