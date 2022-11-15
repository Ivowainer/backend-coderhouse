export type ProductObject = {
    id?: number;
    title: string;
    description: string;
    thumbnail: string;
    price: string;
    stock: string;   
}

export type ProductCtxType = {
    changeTitle: (title: string) => void;
    changeDescription: (title: string) => void;
    changeThumbnail: (title: string) => void;
    changePrice: (title: string) => void;
    changeStock: (title: string) => void;
    submitProduct: (e: any) => void;
    objectProduct: ProductObject;
};