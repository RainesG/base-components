import classNames from "classnames";
import styles from "./imageList.module.scss";
import React from "react";

const baseClass = `imageList`;

interface ImageItemType {
  width: number;
  height: number;
  filename: string;
  storename: string;
  size: number;
  path: string;
  hash: string;
  created_at: string;
  url: string;
  delete: string;
  page: string;
}

export interface ImageListType {
  imageList: ImageItemType[];
  marginTop?: boolean;
  row?: number;
  gap?: number | string;
}

export const ImageList = ({
  imageList,
  marginTop = true,
  row = 4,
  gap = "1rem",
}: ImageListType) => {
  return (
    <div
      className={classNames(styles[baseClass], {
        [styles[`${baseClass}_marginTop`]]: marginTop,
      })}
    >
      {imageList.map(({ url }, index) => {
        return (
          <div
            key={`${baseClass}-${index}`}
            className={styles[`${baseClass}_imageWrapper`]}
            style={{ width: `calc((100% - ${gap} * (${row} - 1)) / ${row})` }}
          >
            <img src={url} alt="" />
          </div>
        );
      })}
    </div>
  );
};
