import { isAbsolute, resolve } from "$std/path/mod.ts";
import { existsSync } from "$std/fs/mod.ts";

export class File {
  exists_file(path_name: string): boolean {
    return existsSync(path_name);
  }
  validate_absolute(path_name: string): boolean {
    return isAbsolute(path_name);
  }
  conver_to_absolute(path_name: string) {
    const cwd = Deno.cwd();
    return resolve(cwd, path_name);
  }
}
