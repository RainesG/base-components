import React from "react";
export interface IImage {
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
export interface IImageList {
    imageList: IImage[];
    marginTop?: boolean;
    row?: number;
    gap?: number | string;
}
export declare const ImageList: ({ imageList, marginTop, row, gap, }: IImageList) => React.JSX.Element;
