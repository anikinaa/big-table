import type { TTheadData } from '../type'

export function getCountColumns(theadData: TTheadData) {
    return theadData[0].reduce((acc, item) => item.colspan ? item.colspan + acc : acc + 1, 0);
}