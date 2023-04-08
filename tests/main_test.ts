import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { main } from "./../src/main.ts";

Deno.test(function addTest() {
  assertEquals(main(2, 3), 5);
});
