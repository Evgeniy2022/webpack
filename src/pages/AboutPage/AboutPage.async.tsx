import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() =>
        resolve(
          import("./AboutPage").then((module) => ({
            default: module.AboutPage,
          })),
          //@ts-ignore
          1400
        )
      );
    })
);
