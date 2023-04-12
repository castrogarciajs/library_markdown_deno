import { Status } from "../../src/cli/status.ts";
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
