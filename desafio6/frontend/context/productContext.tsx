import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { ProductCtxType, ProductObject } from "../types/productCtxTypes";

export const ProductContext = createContext<ProductCtxType | null>(null);

export const ProductProvider = ({ children }: React.PropsWithChildren) => {
    const [objectProduct, setObjectProduct] = useState<ProductObject>  ({
        title: '',
        description: '',
        price: '',
        stock:'',
        thumbnail: ''
    }) 

    const changeTitle = async (title: string) => {
        setObjectProduct({...objectProduct, title})
    }
    const changeDescription = async (description: string) => {
        setObjectProduct({...objectProduct, description})
    }
    const changeStock = async (stock: string) => {
        setObjectProduct({...objectProduct, stock})
    }
    const changePrice = async (price: string) => {
        setObjectProduct({...objectProduct, price})
    }
    const changeThumbnail = async (thumbnail: string) => {
        setObjectProduct({...objectProduct, thumbnail})
    }   

    const submitProduct = async (e: any) => {
        e.preventDefault()

        if(objectProduct.title.length <= 3 ) return null
        if(objectProduct.description.length <= 3 ) return null
        if(objectProduct.thumbnail.length <= 3 ) return null
        
        try {
            await axios.post('http://localhost:8080/api/productos', objectProduct)
        } catch (error) {
            console.log(error)
        }

        objectProduct.title = ''
        objectProduct.description = ''
        objectProduct.price = ''
        objectProduct.stock = ''
        objectProduct.thumbnail = ''

    }

    return (
        <ProductContext.Provider value={{ 
            changeTitle,
            changeDescription,
            changeStock,
            changePrice,
            changeThumbnail,
            objectProduct,
            submitProduct
         }}>
            {children}
        </ProductContext.Provider>
    );
};