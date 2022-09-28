type TColor = 'green' | 'blue' | 'red' | 'orange' | string;
type TAlign = 'left' | 'center' | 'right';

export type TData = {
    title?: string;
    color?: TColor
    align?: TAlign;
    bold?: boolean;
    sticky?: boolean;
    className?: string;
    children?: TData[];
    values?: {
        [code: string]: string | string[] | number | number[]
    }
}

export type TColumn = {
    title: string;
    color?: TColor;
    code?: string;
    className?: string;
    children?: TColumn[];
}

export type TTable = {
    data: TData[];
    columns: TColumn[];
    root: HTMLElement;
    maxHeight?: number;
    fillHeight?: boolean;
    headerColor?: TColor;
}

export type THeadCell = {
    title: string;
    color?: TColor
    colspan?: number;
    rowspan?: number;
    className?: string[];
    codes?: string[];
};

export type TTheadData = THeadCell[][];