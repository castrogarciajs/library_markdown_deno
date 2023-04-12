import { IPath } from "../interfaces/path.ts";

export class Status {
  async validate_link(path_name: IPath[]) {
    const responses = await Promise.all(
      path_name.map(async (item) => {
        try {
          const response = await fetch(item.href, { method: "GET" });

          const path_response = {
            ...item,
            status: response.status,
            OK: response.statusText,
          };
          if (response) {
            await response.body?.cancel();
          }
          return path_response;
        } catch (err) {
          if(err.res) {
            await err.res.body.cancel()
          }
          const error_response = {
            ...item,
            status: err.res ? err.res : 404,
            OK: "fail",
          };
          return error_response;
        }
      })
    );
    return responses;
  }
}
