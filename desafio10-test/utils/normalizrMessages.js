import { denormalize, normalize, schema } from "normalizr";
import util from "util";

export const normalizrMessages = (chat) => {
    const authorSchema = new schema.Entity("authors", {}, { idAttribute: "email" });

    const textSchema = new schema.Entity(
        "text",
        {
            author: authorSchema,
        },
        { idAttribute: "_id" }
    );

    const textsSchema = new schema.Array(textSchema);

    const dataNormalize = normalize(chat, textsSchema);

    return dataNormalize;

    /* const denormalized = denormalize(dataNormalize.result, textsSchema, dataNormalize.entities); */
};

export const desnormalizrMessage = (dataNormalized) => {
    const authorSchema = new schema.Entity("authors", {}, { idAttribute: "email" });

    const textSchema = new schema.Entity(
        "text",
        {
            author: authorSchema,
        },
        { idAttribute: "_id" }
    );

    const desnormalized = denormalize(dataNormalized.result, textSchema, dataNormalized.entities);

    return desnormalized;
};

const dataNormalized = {
    entities: {
        authors: {
            "Palma78@hotmail.com": {
                _id: "63b5e11696ec07737e023967",
                email: "Palma78@hotmail.com",
                nombre: "Vicky",
                apellido: "Erdman",
                edad: "1",
                alias: "Mario.Dach82",
                avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/313.jpg",
                __v: 0,
            },
            "Albert19@yahoo.com": {
                _id: "63b5e39e4ef99b6f19695fe2",
                email: "Albert19@yahoo.com",
                nombre: "Ivah",
                apellido: "Prohaska",
                edad: "6",
                alias: "Isac.Swaniawski",
                avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1166.jpg",
                __v: 0,
            },
        },
        text: {
            "63b5e311b643c99117c8feb9": {
                _id: "63b5e311b643c99117c8feb9",
                author: "Palma78@hotmail.com",
                text: "hola",
                __v: 0,
            },
            "63b5e3a84ef99b6f19695fe5": {
                _id: "63b5e3a84ef99b6f19695fe5",
                author: "Albert19@yahoo.com",
                text: "im gay",
                __v: 0,
            },
            "63b5ec1800ae8ed202f2fa6b": {
                _id: "63b5ec1800ae8ed202f2fa6b",
                author: "Albert19@yahoo.com",
                text: "im gay",
                __v: 0,
            },
            "63b5ecf70327bc86f65f9bad": {
                _id: "63b5ecf70327bc86f65f9bad",
                __v: 0,
            },
            "63b5ecfa0327bc86f65f9bb2": {
                _id: "63b5ecfa0327bc86f65f9bb2",
                __v: 0,
            },
        },
    },
    result: ["63b5e311b643c99117c8feb9", "63b5e3a84ef99b6f19695fe5", "63b5ec1800ae8ed202f2fa6b", "63b5ecf70327bc86f65f9bad", "63b5ecfa0327bc86f65f9bb2"],
};

desnormalizrMessage(dataNormalized);
