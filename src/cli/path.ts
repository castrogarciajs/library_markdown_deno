import { IPath } from "../../interfaces/path.ts";

export class Path {
  path_read_file(pathname: string) {
    const decoder = new TextDecoder("utf-8");
    const data = decoder.decode(Deno.readFileSync(pathname));
    return data;
  }

  validate_path(pathname: string) {
    const path_result: Array<IPath> = [];
    const content = this.path_read_file(pathname);
    const rule =
      /\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+[a-zA-Z0-9!-_$]+)\)/gi;

    let condition = rule.exec(content);

    while (condition !== null) {
      path_result.push({
        href: condition[2],
        text: condition[1],
        file: pathname,
      });
      condition = rule.exec(content);
    }
    return path_result;
  }
}
