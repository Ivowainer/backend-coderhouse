import { containCarrito } from "../fileManager.js"

export const createCart = async (req, res) => {
    res.json(await containCarrito.save() )
}

export const deleteCart = async (req, res) => {
    const { id } = req.params

    res.json(await containCarrito.deleteById(id))
}

export const createProductInCart = async (req, res) => {
    const { idCart  } = req.params
    const { title, price, thumbnail, description, stock } = req.body

    if(!title, !price, !thumbnail, !description, !stock){
        return res.json({ msg: 'Por favor, rellene todos los campos'})
    }

    res.json(await containCarrito.saveProductInCart(Number(idCart), { title, price, thumbnail, description, stock }))
}

export const getProductsByCart = async (req, res) => {
    const { idCart } = req.params

    res.json( await containCarrito.getById(Number(idCart)))
}

export const deleteProductByCart = async (req, res) => {
    const { idCart, idProduct } = req.params

    /* res.json(await containCarrito.deleteProductById(idCart, idProduct)) */
}