import { assert, assertEquals } from "./deps.ts";
import { Dev } from "../src/dev.ts";

const dev = new Dev();

Deno.test({
  name: "should return true",
  fn() {
    const bool = dev.is_directory("tests");
    assert(bool);
  },
});

Deno.test({
  name: "should return false",
  fn() {
    const bool = dev.is_directory("README.md");
    assertEquals(bool, false);
  },
});
