export type Result =
    | {
          ok: true;
      }
    | {
          ok: false;
          err: (label: string) => string;
      };
