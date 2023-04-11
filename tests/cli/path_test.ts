import { assertEquals } from "../dev_deps.ts";
import { Path } from "../../src/cli/path.ts";

const path = new Path();

Deno.test({
  name: "Should return content",
  fn() {
    const content = path.path_read_file(
      "C:/Users/NICOLAS/Desktop/markdown_library/markdown/index.md"
    );
    assertEquals(typeof content, "string");
  },
});
