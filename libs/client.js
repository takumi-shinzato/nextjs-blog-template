import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "microcms-test",
    apiKey: process.env.API_KEY
});