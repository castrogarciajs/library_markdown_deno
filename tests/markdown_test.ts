import { Markdown } from "../src/markdown.ts";
import { assertEquals, assert } from "./deps.ts";

const markdown = new Markdown();

Deno.test({
  name: "should return false",
  fn() {
    const resolve = markdown.is_file_markdown("main.ts");
    assertEquals(resolve, false);
  },
});

Deno.test({
  name: "should return true",
  fn() {
    const resolve = markdown.is_file_markdown("README.md");
    assert(resolve);
  },
});
