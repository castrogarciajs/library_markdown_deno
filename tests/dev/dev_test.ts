import { assertEquals, assert } from "../deps.ts";
import { File } from "../../src/files/file.ts";

const file = new File();

Deno.test({
  name: "Should return true",
  fn() {
    const bool = file.exists_file(
      "C:/Users/NICOLAS/Desktop/markdown_library/README.md"
    );
    assertEquals(bool, true);
  },
});

Deno.test({
  name: "Should return false",
  fn() {
    const bool = file.exists_file("NotFund.md");
    assertEquals(bool, false);
  },
});

Deno.test({
  name: "Should return false",
  fn() {
    const bool = file.validate_absolute("NotFund.md");
    assertEquals(bool, false);
  },
});

Deno.test({
  name: "Should return true",
  fn() {
    const bool = file.validate_absolute(
      "C:/Users/NICOLAS/Desktop/markdown_library/README.md"
    );
    assertEquals(bool, true);
  },
});

Deno.test({
  name: "Should returu a path absolute",
  fn() {
    const absolute = file.conver_to_absolute("README.md");
    assert(absolute);
  },
});
