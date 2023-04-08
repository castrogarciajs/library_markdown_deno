export class Dev {
  is_directory(pathname: string): boolean {
    const state = Deno.statSync(pathname);
    return state.isDirectory;
  }
}
