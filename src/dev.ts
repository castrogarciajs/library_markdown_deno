import { existsSync } from "https://deno.land/std@0.182.0/fs/mod.ts";

export const exists_file = (path_name: string): boolean => {
  const bool = existsSync(path_name);
  return bool;
};

