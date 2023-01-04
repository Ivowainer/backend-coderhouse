import { schema, normalize, denormalize } from "normalizr";
import util from "util";

const chat = [
    {
        id: 1,
        author: {
            id: "ivo@corre.com",
            name: "Ivo",
            apellido: "Campos Wainer",
            edad: 32,
            alias: "IvoCW",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/785.jpg",
        },
        text: "hola",
    },
    {
        id: 2,
        author: {
            id: "juan@correo.com",
            name: "Juan",
            apellido: "ElMasCapo",
            edad: 12,
            alias: "JuanAKA",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1145.jpg",
        },
        text: "¿todo bien?",
    },
    {
        id: 3,
        author: {
            id: "juan@correo.com",
            name: "Juan",
            apellido: "ElMasCapo",
            edad: 12,
            alias: "JuanAKA",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1145.jpg",
        },
        text: "¿todo bien?",
    },
];

const authorSchema = new schema.Entity("authors");

const textSchema = new schema.Entity("text", {
    author: authorSchema,
});

const textsSchema = new schema.Array(textSchema);

const dataNormalize = normalize(chat, textsSchema);

const denormalized = denormalize(dataNormalize.result, textsSchema, dataNormalize.entities);

console.log(util.inspect(dataNormalize, false, 12, true));

/* console.log(denormalized); */
