import { contain1 } from "../fileManager.js"

export const getAllProducts = async (req, res) => {
    try {
        const getAll = await contain1.getAll()

        res.json(getAll)
    } catch (error) {
        console.log(error)
    }
}

export const getProduct = async (req, res) => {
    const { id } = req.params;

    try {
        if(!parseInt(id)){
            return res.status(404).json({ msg: "That's not a valid ID" })
        }

        const getProduct = await contain1.getById(parseInt(id))

        if(!getProduct){
            return res.status(404).json({ error: 'Producto no encontrado' })
        }

        res.json(getProduct)
    } catch (error) {
        console.log(error)
    }
}

export const addProduct = async (req, res) => {
    try {
        const product = await contain1.save(req.body)

        /* res.json( await contain1.getById(parseInt(product)) ) */

        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    
    try {
        if(!parseInt(id)){
            return res.status(404).json({ msg: "That's not a valid ID" })
        }

        const getProduct = await contain1.getById(parseInt(id))

        if(!getProduct){
            return res.status(404).json({ error: 'Producto no encontrado' })
        }

        getProduct[0].title = await req.body.title;
        getProduct[0].price = await req.body.price;
        getProduct[0].thumbnail = await req.body.thumbnail;

        const updateProduct = await contain1.updateById(parseInt(id), getProduct[0])

        res.json(updateProduct)
    } catch (error) {
        console.log(error)
    }
}

export const deleteById = async (req, res) => {
    const { id } = req.params

    try {
        if(!parseInt(id)){
            return res.status(404).json({ msg: "That's not a valid ID" })
        }

        const getProduct = await contain1.deleteById(parseInt(id))

        if(!getProduct){
            return res.status(404).json({ error: 'Producto no encontrado' })
        }

        res.json( getProduct )
    } catch (error) {
        console.log(error)
    }
}