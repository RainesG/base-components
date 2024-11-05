import React from "react";
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
export declare const ImageList: ({ imageList, marginTop, row, gap, }: ImageListType) => React.JSX.Element;
export {};
