import fs from 'fs'

class Contenedor {
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

const objectProduct = {
    title: "Mobile",
    price: 3,
    thumbnail: './public/colors.jpg'
}

const objectProduct2 = {
    title: "PC",
    price: 6,
    thumbnail: './public/colors.jpg'
}

const objectProduct3 = {
    title: "Notebook",
    price: 6,
    thumbnail: './public/sgs.jpg'
}

const objectProduct4 = {
    title: "Monitor",
    price: 1,
    thumbnail: './public/monitor.jpg'
}

export const contain1 = new Contenedor('productos.txt')
/* const saveObject1 = contain1.save(objectProduct2) */
/* const getObjectById1 = contain1.getById(3) */
/* export const getAll1 = contain1.getAll() */
/* const deleteById1 = contain1.deleteById(2) */
/* const deleteAll = contain1.deleteAll() */