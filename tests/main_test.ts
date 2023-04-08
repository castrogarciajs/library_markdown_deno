import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { main } from "./../src/main.ts";

Deno.test({
  name: "Should return 5",
  fn: () => {
    assertEquals(main(3, 2), 5);
  },
});
