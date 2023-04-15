import { assertEquals, assertInstanceOf } from "../dev_deps.ts";
import { Path } from "../../cli/path.ts";

const path = new Path();

Deno.test({
  name: "Should return content",
  fn() {
    const content = path.path_read_file(
      "markdown/index.md"
    );
    assertEquals(typeof content, "string");
  },
});

Deno.test({
  name: "Should return Array of objects",
  fn() {
    const content = path.validate_path(
      "markdown/index.md"
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
      "markdown/javascript/javascript.md"
    );
    assertInstanceOf(content, Array);
  },
});
