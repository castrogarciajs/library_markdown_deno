import { Status } from "../../cli/status.ts";
import { assertEquals } from "../dev_deps.ts";
import { IPath } from "../../interfaces/path.ts";

const status = new Status();

Deno.test({
  name: "should return status 200",
  async fn() {
    const paths: IPath[] = [
      {
        href: "https://google.com",
        text: "Google",
        file: "/path/to/file.md",
      },
      {
        href: "https://github.com",
        text: "GitHub",
        file: "/path/to/file.md",
      },
    ];
    const res = await status.validate_link(paths);
    res.forEach((elem) => {
      assertEquals(elem.status, 200);
      assertEquals(elem.OK, "OK");
    });
  },
});

Deno.test({
  name: "Should return status 404",
  async fn() {
    const paths: IPath[] = [
      {
        href: "https://google.om",
        text: "Google",
        file: "/path/to/file.md",
      },
      {
        href: "https://githucom",
        text: "GitHub",
        file: "/path/to/file.md",
      },
    ];
    const res = await status.validate_link(paths);
    res.forEach((elem) => {
      assertEquals(elem.status, 404);
      assertEquals(elem.OK, "fail");
    });
  },
});

Deno.test({
  name: "should return total 1",
  fn() {
    const paths: IPath[] = [
      {
        href: "https://google.com",
        text: "google",
        file: "README.md",
      },
    ];

    const state = status.stats_unique(paths);
    assertEquals(state.totalFile, 1);
  },
});

Deno.test({
  name: "should return unique 1",
  fn() {
    const paths: IPath[] = [
      {
        href: "https://google.com",
        text: "google",
        file: "README.md",
      },
      {
        href: "https://google.com",
        text: "google",
        file: "README.md",
      },
    ];

    const state = status.stats_unique(paths);
    assertEquals(state.unique, 1);
  },
});
