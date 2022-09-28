import type { TColumn } from '../type'
import { getCountChildren } from './get-count-children'

export function getColorColumns(
    columns: TColumn[],
    colorColumns: Record<number, TColumn['color']> = {},
    globalIndex = 0,
    parentColor?: TColumn['color']
) {

    let localIndex = globalIndex;

    columns.forEach(({color, children}) => {
        if ((color || parentColor) && !children) {
            colorColumns[localIndex] = color || parentColor;
        }

        if (children) {
            getColorColumns(children, colorColumns, localIndex, color || parentColor);

            localIndex += getCountChildren(children);
        } else {
            localIndex++
        }
    })

    return colorColumns;
}