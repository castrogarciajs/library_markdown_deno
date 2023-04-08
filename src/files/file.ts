import { existsSync } from "https://deno.land/std@0.182.0/fs/mod.ts";
import { isAbsolute } from "https://deno.land/std@0.182.0/path/mod.ts";

export class File {
  exists_file(pathname: string): boolean {
    return existsSync(pathname);
  }
  validate_absolute(pathname: string): boolean {
    return isAbsolute(pathname);
  }
}
