export type ProductObject = {
    id?: number;
    timestamp?: number;
    title: string;
    description: string;
    thumbnail: string;
    price: string;
    stock: string;   

    isAdded?: boolean;
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