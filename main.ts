import { Markdown } from "./cli/markdown.ts";
import { Path } from "./cli/path.ts";

export function markdown_deno(path_name: string, option?: string[]) {
  const markdown = new Markdown();
  const path = new Path();

  if (!option) {
    const array = markdown.get_all_markdown(path_name);
    array.forEach((item) => {
      const resolve = path.validate_path(item);
      console.info(resolve);
    });
  }
}

if (import.meta.main) {
  markdown_deno("markdown/javascript/javascript.md", ["example"]);
}
