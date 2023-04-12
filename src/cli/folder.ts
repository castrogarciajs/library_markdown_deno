export class Folder {
  is_directory(path_name: string): boolean {
    const state = Deno.statSync(path_name);
    return state.isDirectory;
  }
  read_directory(path_name: string) {
    const content = Deno.readDirSync(path_name);

    return content;
  }
}


