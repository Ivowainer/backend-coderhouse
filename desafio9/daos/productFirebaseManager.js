import { collection, deleteDoc, addDoc, doc, getDocs, getDoc, updateDoc } from "firebase/firestore";

import db from "../db/firebaseConnect.js";

export class Contenedor {
    constructor(collection) {
        this.collection = collection;
    }

    async save(object) {
        try {
            const doc = await addDoc(collection(db, this.collection), object);

            return doc;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            const query = await doc(db, this.collection, id);

            return await getDoc(query);
        } catch (error) {
            console.log(error.message);
        }
    }

    async getAll() {
        try {
            const querySnapshot = await getDocs(collection(db, this.collection));

            return querySnapshot;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            const data = await deleteDoc(doc(db, this.collection, id));

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async updateById(id, newProduct) {
        const { title, price, thumbnail, description, stock } = newProduct;

        try {
            const productRef = doc(db, this.collection, id);

            const data = await updateDoc(productRef, {
                title,
                price,
                thumbnail,
                description,
                stock,
            });

            return data;
        } catch (error) {
            console.log(error);
        }
    }
}
