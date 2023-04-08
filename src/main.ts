import { exists_file } from "./dev.ts";



export function main(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", main(2, 3));
  exists_file("C:/Users/NICOLAS/Desktop/markdown_library/README.md");
}
