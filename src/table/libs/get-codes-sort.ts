import type { TColumn } from '../type'

export function getCodesSort(columns: TColumn[], codes = []) {
    columns.forEach(({children, code}) => {
        if (code) {
            codes.push(code);
        }
        if (children) {
            getCodesSort(children, codes)
        }
    })

    return codes;
}