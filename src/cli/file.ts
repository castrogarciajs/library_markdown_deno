import { isAbsolute, resolve } from "$std/path/mod.ts";
import { existsSync } from "$std/fs/mod.ts";

export class File {
  exists_file(pathname: string): boolean {
    return existsSync(pathname);
  }
  validate_absolute(pathname: string): boolean {
    return isAbsolute(pathname);
  }
  conver_to_absolute(pathname: string) {
    const cwd = Deno.cwd();
    return resolve(cwd, pathname);
  }
}
