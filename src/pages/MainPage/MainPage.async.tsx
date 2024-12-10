import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() =>
        resolve(
          import("./MainPage").then((module) => ({
            default: module.MainPage,
          })),
          //@ts-ignore
          1400
        )
      );
    })
);
