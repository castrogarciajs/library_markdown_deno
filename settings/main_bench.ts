import { main } from "./../src/main.ts";


Deno.bench(function addSmall() {
  main(1, 2);
});

Deno.bench(function addBig() {
  main(2 ** 32, 2 ** 32);
});
