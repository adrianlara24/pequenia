import * as contentful from "contentful";

const appContext = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE as string,
    accessToken: process.env.CONTENTFUL_TOKEN as string,
});


export default appContext;