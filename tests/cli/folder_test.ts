import { assert, assertEquals, assertInstanceOf } from "../dev_deps.ts";
import { Folder } from "../../src/cli/folder.ts";

const folder = new Folder();

Deno.test({
  name: "should return true",
  fn() {
    const bool = folder.is_directory("tests");
    assert(bool);
  },
});

Deno.test({
  name: "should return false",
  fn() {
    const bool = folder.is_directory("README.md");
    assertEquals(bool, false);
  },
});

Deno.test({
  name: "should return an Object",
  fn() {
    const content = folder.read_directory("tests");
    assertInstanceOf(content, Object);
  },
});
