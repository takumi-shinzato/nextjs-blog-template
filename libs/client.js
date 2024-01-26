import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "shinzato-test",
    apiKey: process.env.API_KEY
});