const ProductForm = () => {
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
                />
            </div>
            <div className="mb-6">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                <textarea 
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" 
                    placeholder="Your product's description" 
                    required 
                />
            </div>
            <div className="mb-6">
                <label htmlFor="thumbnail" className="block mb-2 text-sm font-medium text-gray-900 ">Thumbnail</label>
                <input 
                    type="text" 
                    id="thumbnail" 
                    className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="https://w7.pngwing.com/pngs/709/627/png-transparent-google-docs-form-google-purple-violet-text-thumbnail.png" 
                    required 
                />
            </div>
            <div className="mb-6">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                <input 
                    type="number" 
                    id="price" 
                    className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required 
                />
            </div>
            <div className="mb-6">
                <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900 ">Stock</label>
                <input 
                    type="number" 
                    id="stock" 
                    className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    required 
                />
            </div>
            
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  -700 -800">Guardar producto</button>
        </form>
    )
}

export default ProductForm