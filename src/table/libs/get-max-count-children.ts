type TData = {
    children?: TData[];
    title?: string;
    [key: string]: unknown;
}

export function getMaxCountChildren(columns: TData[], level = 0){
    const levels = columns.map(({children, title}) =>  {
        if (!title) {
            return level - 1;
        }
        return children && title ? getMaxCountChildren(children, level + 1) : level
    });
    return Math.max(...levels);
}