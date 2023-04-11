export class Path {
  path_read_file(pathname: string) {
    const decoder = new TextDecoder("utf-8");
    const data = decoder.decode(Deno.readFileSync(pathname));
    return data;
  }
}