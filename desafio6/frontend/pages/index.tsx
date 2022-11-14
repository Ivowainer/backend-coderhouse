import { CardProduct } from "../components";
import MainLayout from "../components/layout/MainLayout";
import ProductForm from "../components/UI/ProductForm";

export default function Home() {
    return(
        <MainLayout pageName="Home | EcommerceCoder" pageDescription="Home of EcommerceCoder">
            
            <div className="flex flex-col px-5 relative">
                <p className="font-bold text-2xl my-5">Todos los productos</p>
                <div className="flex justify-around flex-wrap">    
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
                <p className="text-3xl font-bold mt-10">Añade un producto</p>
                <div className="px-5 mt-10">
                    <ProductForm />
                </div>
            </div>
        </MainLayout>
    )
}
