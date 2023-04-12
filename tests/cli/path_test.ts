import { assertEquals } from "../dev_deps.ts";
import { Path } from "../../cli/path.ts";

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

Deno.test({
  name: "Should return Array of objects",
  fn() {
    const content = path.validate_path(
      "C:/Users/NICOLAS/Desktop/markdown_library/markdown/index.md"
    );
    content.forEach((item) => {
      assertEquals(typeof item, "object");
    });
  },
});

Deno.test({
  name: "Should return Array empty",
  fn() {
    const content = path.validate_path(
      "C:/Users/NICOLAS/Desktop/markdown_library/markdown/javascript/javascript.md"
    );
    assertEquals(content, []);
  },
});
