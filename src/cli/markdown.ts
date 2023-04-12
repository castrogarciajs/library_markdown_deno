import { extname } from "$std/path/mod.ts";
import { Folder } from "./folder.ts";

export class Markdown {
  is_file_markdown(path_name: string): boolean {
    return extname(path_name) === ".md" ? true : false;
  }

  get_file_markdown(path_name: string) {
    let files: string[] = [];
    const folder = new Folder();

    if (this.is_file_markdown(path_name)) {
      files.push(path_name);
    } else if (folder.is_directory(path_name)) {
      const content = folder.read_directory(path_name);
      for (const item of content) {
        files = files.concat(this.get_file_markdown(`${path_name}/${item.name}`));
      }
    }
    return files;
  }
}
