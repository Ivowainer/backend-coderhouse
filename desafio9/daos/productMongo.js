export class Contenedor {
    constructor(model) {
        this.model = model;
    }

    async save(object) {
        try {
            const producto = new this.model(object);

            producto.save();

            return producto;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            const data = await this.model.findById(id);

            return data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async getAll() {
        try {
            const data = await this.model.find();

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            const data = await this.model.deleteOne({ id });

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async updateById(id, newProduct) {
        const { title, price, thumbnail, description, stock } = newProduct;

        try {
            const data = await this.model.updateOne({ id }, { title, price, thumbnail });

            if (data == 0) {
                return "Product not found";
            }

            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export class ContenedorCarrito {
    constructor(model, secondModel) {
        this.model = model;
        this.secondModel = secondModel;
    }

    async save() {
        try {
            const newCart = new this.model();

            await newCart.save();

            return newCart;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllCarts() {
        try {
            const carts = await this.model.find().populate("productos");

            return carts;
        } catch (error) {
            console.log(error);
        }
    }

    async uploadProductInCart(productId, id) {
        try {
            const cart = await this.model.findById(id);

            await cart.productos.push(productId);

            /* const findProductById = await this.secondModel.findById(productId); */

            await cart.save();

            return cart;
        } catch (error) {
            console.log(error);
        }
    }

    async getCartById(id) {
        try {
            const cart = await this.model.findById(id);

            return cart;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCartById(id) {
        try {
            const cartDeleted = await this.model.deleteOne(id);

            return cartDeleted;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProductInCartById(idCart, idProduct) {
        try {
            const productInCartDeleted = await this.model.findById(idCart);

            const productDeleted = await productInCartDeleted.productos.filter((val) => JSON.parse(JSON.stringify(val)) !== idProduct);

            await productDeleted.save();

            return productDeleted;
        } catch (error) {
            console.log(error);
        }
    }
}
