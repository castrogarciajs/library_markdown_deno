import { assertEquals } from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { exists_file } from "../../src/dev.ts";

Deno.test({
  name: "Should return true",
  fn: () => {
    const bool = exists_file(
      "C:/Users/NICOLAS/Desktop/markdown_library/README.md"
    );
    assertEquals(bool, true);
  },
});
