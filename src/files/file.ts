import { existsSync } from "https://deno.land/std@0.182.0/fs/mod.ts";
import { isAbsolute, resolve } from "https://deno.land/std@0.182.0/path/mod.ts";

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
