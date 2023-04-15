import { assertEquals } from "./dev_deps.ts";

Deno.test({
  name: "Should return 5",
  fn: () => {
    assertEquals(5, 5);
  },
});
