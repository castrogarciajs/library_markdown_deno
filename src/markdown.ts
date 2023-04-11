import { extname } from "./deps.ts";

export class Markdown {
  is_file_markdown(pathname: string): boolean {
    return extname(pathname) === ".md" ? true : false;
  }
}
