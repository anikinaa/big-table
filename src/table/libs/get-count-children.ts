import type { TData } from '../type'

export function getCountChildren(rows:TData[]){
    return rows.reduce((acc, {children}) => children ? acc + getCountChildren(children) : acc + 1, 0)
}