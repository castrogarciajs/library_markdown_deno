import { Markdown } from "./cli/markdown.ts";
import { Path } from "./cli/path.ts";
import { Status } from "./cli/status.ts";

export function markdown_deno(path_name: string, option: string[]) {
  const markdown = new Markdown();
  const path = new Path();
  const status = new Status();

  const array = markdown.get_all_markdown(path_name);

  if (option[0] !== "--validate" && option[0] !== "--stats")
    return console.error(
      "La Opcion ingresada no se encuentra disponible, si quieres mas informacion utiliza la opcion --help"
    );

  if (option[0] === undefined && option[1] === undefined) {
    array.forEach((item) => {
      const resolve = path.validate_path(item);
      console.info(resolve);
    });
  }

  if (option[0] === "--validate") {
    array.forEach((item) => {
      const resolve = path.validate_path(item);
      status
        .validate_link(resolve)
        .then((data) => console.info(data))
        .catch((err) => console.error(err.message));
    });
  }

  if (option[0] === "--stats") {
    array.forEach((item) => {
      const resolve = path.validate_path(item);
      const stats = status.stats_unique(resolve);
      console.log(stats);
    });
  }
  if (
    (option[0] === "--stats" && option[1] === "--validate") ||
    (option[0] === "--validate" && option[1] === "--stats")
  ) {
    array.forEach((item) => {
      const resolve = path.validate_path(item);
      status
        .validate_link(resolve)
        .then((data) => console.info(status.broken_link(data)))
        .catch((err) => console.error(err.message));
    });
  }
}
