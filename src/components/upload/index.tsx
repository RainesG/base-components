import { InputHTMLAttributes } from "react";
import styles from "./upload.module.scss";
import classNames from "classnames";
import React from "react";
export interface UploadType {
  marginTop?: boolean;
  onClick?: (arg: FileList) => void
}

const baseClass = `upload`;

export const Upload = ({
  multiple,
  accept,
  marginTop = true,
  onClick
}: InputHTMLAttributes<HTMLInputElement> & UploadType) => {
  return (
    <div
      className={classNames(styles[`${baseClass}`], {
        [styles.marginTop]: marginTop,
      })}
    >
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        placeholder="upload"
        onChange={(e) => {
          if (e.target.files) {
            onClick?.(e.target.files)
          }
        }}
      />
      <p className={styles[`${baseClass}_textContent`]}>上传图片</p>
    </div>
  );
};
