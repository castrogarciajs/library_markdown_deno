import { Markdown } from "./cli/markdown.ts";
import { Path } from "./cli/path.ts";
import { Status } from "./cli/status.ts";

export function markdown_deno(path_name: string, option: string[]) {
  const markdown = new Markdown();
  const path = new Path();
  const status = new Status();

  const array = markdown.get_all_markdown(path_name);

  if (option[0] === undefined && option[1] === undefined) {
    array.forEach((item) => {
      const resolve = path.validate_path(item);
      console.info(resolve);
    });
  }

  if (option[0] === "--evaluate") {
    array.forEach((item) => {
      const resolve = path.validate_path(item);
      status
        .validate_link(resolve)
        .then((data) => console.info(data))
        .catch((err) => console.error(err));
    });
  }
}

if (import.meta.main) {
  markdown_deno("markdown/javascript/javascript.md", []);
}
