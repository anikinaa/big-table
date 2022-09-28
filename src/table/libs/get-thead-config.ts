import type { TColumn, TTheadData, THeadCell } from '../type';

export function getTheadConfig(columns: TColumn[], maxLevel, level = 0, rows: TTheadData = []){
    const row: THeadCell[] = [];
    let childRows = [];

    columns.forEach(({title, children, color, className: ch, code}) => {
        const className: string[] = []
        if (ch) {
            className.push(ch)
        }
        if (code) {
            className.push(`data-code-${code}`)
        }

        if (children) {
            const childrenClassNames =  getChildrenClassNamesCodes(children);

            row.push({
                title,
                color,
                className: [...className, ...childrenClassNames],
                colspan: getCountChildren(children),
            })
            childRows = [...childRows, ...children.map((item) => ({...item, color: item.color || color}))];
        } else {
            const cell: THeadCell = {title, color, className};
            if (maxLevel - level > 0) {
                cell.rowspan = maxLevel - level + 1;
            }
            row.push(cell);
        }
    });
    rows.push(row);

    if (childRows.length) {
        getTheadConfig(childRows, maxLevel, level + 1, rows);
    }

    return rows;
}

function getCountChildren(items: TColumn[]){
    let count = items.length;

    items.forEach(({ children }) => {
        if (children) {
            count--;
            count += getCountChildren(children);
        }
    });

    return count;
}

function getChildrenClassNamesCodes(items: TColumn[]){
    let className = [];

    items.forEach(({ children, code }) => {
        if (code) {
            className.push(`data-code-${code}`)
        }
        if (children) {
            const childrenClassNames =  getChildrenClassNamesCodes(children);

            className = [...className, ...childrenClassNames];
        }
    });

    return className;
}