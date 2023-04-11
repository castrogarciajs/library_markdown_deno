import { extname } from "./deps.ts";
import { Folder } from "./folder.ts";

export class Markdown {
  is_file_markdown(pathname: string): boolean {
    return extname(pathname) === ".md" ? true : false;
  }

  get_file_markdown(pathname: string) {
    let files: string[] = [];
    const folder = new Folder();

    if (this.is_file_markdown(pathname)) {
      files.push(pathname);
    } else if (folder.is_directory(pathname)) {
      const content = folder.read_directory(pathname);
      for (const item of content) {
        files = files.concat(this.get_file_markdown(`${pathname}/${item.name}`));
      }
    }
    return files;
  }
}
