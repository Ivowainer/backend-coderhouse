import { CardProduct } from "../components";
import MainLayout from "../components/layout/MainLayout";
import ProductForm from "../components/UI/ProductForm";

import { GetServerSideProps } from 'next'
import axios from 'axios'
import { ProductObject } from "../types/productCtxTypes";

interface HomeProps{
    products: ProductObject[]
}

export default function Home({ products }: HomeProps) {
    return(
        <MainLayout pageName="Home | EcommerceCoder" pageDescription="Home of EcommerceCoder">
            
            <div className="flex flex-col px-5 relative">
                <p className="font-bold text-2xl my-5">Todos los productos</p>
                <div className="flex justify-around flex-wrap">    
                    {products.map(val => (
                        <CardProduct key={val.id} id={val.id} description={val.description} price={val.price} stock={val.stock} thumbnail={val.thumbnail} title={val.title} isAdded />
                    ))}
                </div>
                <p className="text-3xl font-bold mt-10">Añade un producto</p>
                <div className="px-5 mt-10">
                    <ProductForm />
                </div>
            </div>
        </MainLayout>
    )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { data } = await  axios('http://localhost:8080/api/productos')

    return {
        props: {
            products: data
        }
    }
}
