import { markdown_deno } from "./main.ts";

const path_name = Deno.args[0];
const evaluate = Deno.args[1];
const status = Deno.args[2];

const options = [evaluate, status];

markdown_deno(path_name, options)

export { markdown_deno };
