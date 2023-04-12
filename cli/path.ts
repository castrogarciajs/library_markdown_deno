import { IPath } from "../interfaces/path.ts";

export class Path {
  path_read_file(path_name: string) {
    const decoder = new TextDecoder("utf-8");
    const data = decoder.decode(Deno.readFileSync(path_name));
    return data;
  }

  validate_path(path_name: string) {
    const path_result: IPath[] = [];
    const content = this.path_read_file(path_name);
    const rule =
      /\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+[a-zA-Z0-9!-_$]+)\)/gi;

    let condition = rule.exec(content);

    while (condition !== null) {
      path_result.push({
        href: condition[2],
        text: condition[1],
        file: path_name,
      });
      condition = rule.exec(content);
    }
    return path_result;
  }
}
