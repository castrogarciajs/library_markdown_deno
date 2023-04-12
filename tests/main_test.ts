import { assertEquals } from "./dev_deps.ts";
import { main } from "../main.ts";

Deno.test({
  name: "Should return 5",
  fn: () => {
    assertEquals(main(3, 2), 5);
  },
});
