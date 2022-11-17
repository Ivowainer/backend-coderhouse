import fs from 'fs'

class ContenedorProductos {
    constructor(fileName){
        this.fileName = fileName;
    }
    
    async save(object){
        try {
            const fileInfo = await fs.promises.readFile(`./${this.fileName}`)

            const objectParsed = await JSON.parse(fileInfo)

            objectParsed.push({ id: objectParsed.length + 1, ...object })
            await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(objectParsed))    

            return objectParsed.length;
        } catch (error) {
            await fs.promises.appendFile(`./${this.fileName}`, JSON.stringify([{ id: 1, ...object }]))
            return 1;
        }
    }

    async getById(number){
        try {
            const fileInfo = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')

            const objectParsed = JSON.parse(fileInfo)

            const objectInfo = objectParsed.filter(object => object.id === number )

            if(objectInfo.length === 0) null
            if(objectInfo.length !== 0) return objectInfo
        } catch (error) {
            console.log(error.message)
        }
    }

    async getAll(){
        const fileInfo = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')

        const objectParsed = JSON.parse(fileInfo)

        return objectParsed
    }

    async deleteById(number) {
        const fileInfo = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')

        const objectParsed = await JSON.parse(fileInfo)

        const filterById = objectParsed.filter(element => element.id !== number)

        /* const removeById = await objectParsed.splice(number - 1, 1) */

        await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(filterById))

        return filterById
    }

    async deleteAll() {
        await fs.promises.writeFile(`./${this.fileName}`, '')
    }

    async updateById(id, newProduct) {
        const fileInfo = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')

        const objectParsed = await JSON.parse(fileInfo)

        const objectInfo = await objectParsed.filter(object => object.id === id )


        objectInfo[0].title = await newProduct.title;
        objectInfo[0].price = await newProduct.price;
        objectInfo[0].thumbnail = await newProduct.thumbnail;
        
        await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(objectParsed))

        if(objectInfo.length === 0) null
        if(objectInfo.length !== 0) return await objectInfo
    }
}

class ContenedorCarrito{
    constructor(fileName){
        this.fileName = fileName;
    }
    
    async save(object){
        try {
            const fileInfo = await fs.promises.readFile(`./${this.fileName}`)

            const objectParsed = await JSON.parse(fileInfo)

            objectParsed.push({ id: objectParsed.length + 1, products: [], ...object })
            await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(objectParsed))    

            return objectParsed.length;
        } catch (error) {
            await fs.promises.appendFile(`./${this.fileName}`, JSON.stringify([{ id: 1, products: [], ...object }]))
            return 1;
        }
    }

    /* async saveProductInCart(id, newProduct){
        const fileInfo = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')

        const objectParsed = await JSON.parse(fileInfo)

        const objectInfo = await objectParsed.filter(object => object.id === id )
        const objectProducts = await objectInfo.map(object => object.products )

        const objectProduct = {
            id: await objectProducts[0].length + 1,
            timestamp: Date.now(),
            title: await newProduct.title,
            description: await newProduct.description,
            price: await newProduct.price,
            thumbnail: await newProduct.thumbnail,
            stock: await newProduct.stock
        }

        objectInfo[0].products.push(objectProduct)
        
        await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(objectParsed))

        if(objectInfo.length === 0) null
        if(objectInfo.length !== 0) return await idExists
    } */

    async saveProductInCart(id, newProduct){
        const cartFile = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        const productsFile = await fs.promises.readFile(`./productos.json`, 'utf-8')

        const cartParsed = await JSON.parse(cartFile)
        const productsParsed = await JSON.parse(productsFile).filter(val => val.id == Number(newProduct))

        await cartParsed.filter(val => val.id == Number(id))

        cartParsed[0].products.push(productsParsed[0])

        await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(cartParsed))

        return cartParsed

    }

    async getById(number){
        try {
            const fileInfo = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')

            const objectParsed = await JSON.parse(fileInfo)

            const objectInfo = await objectParsed.filter(object => object.id == Number(number) )

            if(objectInfo.length === 0) null
            if(objectInfo.length !== 0) return objectInfo[0].products
            
        } catch (error) {
            console.log(error.message)
        }
    }

    async deleteProductById(idCart, idProduct){
        try {
            const fileInfo = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')

            const objectParsed = await JSON.parse(fileInfo)

            const cart = await objectParsed.filter(val => val.id == Number(idCart) )

            const objectProducts = await cart[0].products.filter(val => val.id !== Number(idProduct))

            cart[0].products = await objectProducts

            await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(objectParsed))

            if(objectInfo.length === 0) null
            if(objectInfo.length !== 0) return objectParsed
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const containProductos = new ContenedorProductos('productos.json')
export const containCarrito = new ContenedorCarrito('carrito.json')
/* const saveObject1 = contain1.save(objectProduct2) */
/* const getObjectById1 = contain1.getById(3) */
/* export const getAll1 = contain1.getAll() */
/* const deleteById1 = contain1.deleteById(2) */
/* const deleteAll = contain1.deleteAll() */