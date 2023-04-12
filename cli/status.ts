import { IPath } from "../interfaces/path.ts";
import { IStatus } from "../interfaces/status.ts";

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
          if (err.res) {
            await err.res.body.cancel();
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

  stats_unique(path_name: IPath[]) {
    const link = path_name.map((item) => item.href);
    const no_repeat = new Set(link);
    return {
      totalFile: link.length,
      unique: no_repeat.size,
    };
  }

  broken_link(path_name: IStatus[]) {
    const broken = path_name.filter((link) => link.OK === "fail");
    return {
      totalFile: path_name.length,
      broken: broken.length,
    };
  }
}
