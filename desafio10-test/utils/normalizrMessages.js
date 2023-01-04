import { normalize, schema } from "normalizr";
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
