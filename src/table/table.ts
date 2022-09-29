import './style.scss'
import { debounce } from 'lodash';
import type { TData, TTheadData, TTable } from './type'
import {
    getCountColumns,
    getMaxCountChildren,
    getTheadConfig,
    getCountChildren,
    getCodesSort,
    getColorColumns,
} from './libs'

const COLOR_CLASSES = ['green', 'blue', 'red', 'yellow', 'orange']

export class Table {
    maxLevelColumns: number;
    maxLevelData: number;
    countColumns: number;
    colorColumns: Record<number, TData['color']>;
    table: HTMLTableElement;
    thead: HTMLTableSectionElement;
    tbody: HTMLTableSectionElement;
    theadData: TTheadData;
    root: HTMLElement;
    codes: string[];
    data: TData[];

    initialArgs: TTable

    constructor(args: TTable) {

        this.initialArgs = args;
        this.init();

        this.updateResize();
    }

    updateResize() {
        window.addEventListener('resize', debounce(() => this.init(), 300));
    }

    init() {
        const { columns, root, maxHeight, fullHeight, data, headerColor } = this.initialArgs;

        this.root = root;
        this.data = data;
        this.maxLevelColumns = getMaxCountChildren(columns);
        this.maxLevelData = getMaxCountChildren(this.data, 1);
        this.theadData = getTheadConfig(columns, this.maxLevelColumns);
        this.countColumns = getCountColumns(this.theadData);
        this.codes = getCodesSort(columns);
        this.colorColumns = getColorColumns(columns);

        this.createTable(maxHeight, fullHeight);

        setTimeout(() => {
            this.renderThead(headerColor);
        }, 10)
        setTimeout(() => {
            this.renderTbody();
        }, 20)

        setTimeout(() => {
            this.fixedColumns();
        }, 200)
    }

    createTable(maxHeight: number = 600, fullHeight: boolean) {
        this.table = document.createElement('table');
        this.table.setAttribute('cellspacing', '0');
        this.table.setAttribute('class', 'big-table');
        this.root.classList.add('big-table-wrap');
        this.root.innerHTML = '';
        if (fullHeight) {
            const top = this.root.getBoundingClientRect()?.top;
            this.root.style.maxHeight = `${window.innerHeight - top}px`;
        } else {
            this.root.style.maxHeight = `${maxHeight}px`;
        }
        this.root.append(this.table);
    }

    renderThead(headerColor: TData['color']) {
        this.thead = document.createElement('thead');

        this.setColor(this.thead, headerColor);

        this.theadData.forEach((columns) => {
            const tr = document.createElement('tr');
            let countColumn = 0;
            columns.forEach(({ title, colspan, rowspan, color, className }) => {
                const td = document.createElement('td');
                td.innerHTML = title;
                this.setColor(td, color);

                if (className && className.length) {
                    className.forEach((ch) => {
                        td.classList.add(ch)
                    })
                }

                countColumn += colspan || 1;
                if (countColumn === this.countColumns) {
                    td.classList.add('no-border')
                }

                if (colspan) {
                    td.setAttribute('colspan', colspan.toString())
                }

                if (rowspan) {
                    td.setAttribute('rowspan', rowspan.toString())
                }

                tr.append(td);
            })
            this.thead.append(tr);
        });

        this.table.append(this.thead);
    }

    renderTbody() {
        this.tbody = document.createElement('tbody');
        this.renderTbodyRow(this.data);
        this.table.append(this.tbody);
    }

    renderTbodyRow(
        data: TData[],
        curColumn = 0,
        prevTr?: HTMLTableRowElement,
        numberCell = 0,
        parentCells: HTMLTableCellElement[] = [],
    ) {
        data.forEach((item, index) => {
            const { title, children, values, color, bold, align = 'left', className } = item;
            const tr = prevTr && index === 0 ? prevTr : document.createElement('tr');
            this.handlersRows(tr, parentCells);

            if (bold) {
                tr.classList.add('bold')
            }

            if (className) {
                tr.classList.add(className)
            }

            this.setColor(tr, color)

            const td = document.createElement('td');
            this.setColor(td, color || this.colorColumns[numberCell]);
            td.innerHTML = title;
            td.classList.add(`align-${align}`);

            if (children) {
                td.setAttribute('rowspan', getCountChildren(children).toString());
                tr.append(td);

                if (!prevTr || index > 0) {
                    this.tbody.append(tr);
                }

                this.renderTbodyRow(children.map(item => ({
                    ...item,
                    color: color || item.color,
                    bold: bold || item.bold,
                })), curColumn + 1, tr, numberCell + 1, [...parentCells, td]);
            } else if (values) {
                const tail = this.maxLevelData - curColumn;

                td.setAttribute('colspan', (tail).toString());
                if (title) {
                    tr.append(td);
                }

                this.renderValues(tr, values, color);

                this.tbody.append(tr);
            } else {
                this.renderRowDivider(tr, item, curColumn);
            }
        })
    }

    renderRowDivider(tr: HTMLTableRowElement, item: TData, curColumn: number) {
        const { sticky = true, color, title, align, bold } = item
        const tail = this.countColumns - curColumn;

        const td = document.createElement('td');
        td.setAttribute('colspan', (tail).toString());
        td.classList.add('row-divider');
        td.style.top = `${this.thead.offsetHeight}px`;
        if (!sticky) {
            td.classList.add('row-divider_no-sticky');
        }

        if (align) {
            td.classList.add(`align-${align}`);
        }
        this.setColor(td, color)

        const wrap = document.createElement('div');
        wrap.innerHTML = title;
        wrap.style.width = `${this.root.offsetWidth - 30}px`;
        wrap.style.left = `5px`;
        wrap.setAttribute('class', 'sticky-row-wrap')
        td.append(wrap)
        tr.append(td);

        this.tbody.append(tr);
    }

    setColor(el: HTMLElement, color: TData['color']) {
        if (color) {
            if (COLOR_CLASSES.indexOf(color) >= 0) {
                el.classList.add(color);
            } else {
                el.style.backgroundColor = color
            }
        }
    }

    renderValues(tr: HTMLTableRowElement, values: TData['values'], colorRow: TData['color']) {
        this.codes.forEach((code, index) => {
            const td = document.createElement('td');

            const className = `data-code-${code}`;
            td.classList.add(className);
            this.handlersColumns(td, className);
            this.setColor(td, colorRow || this.colorColumns[this.maxLevelData + index]);
            const value = values[code];
            if (Array.isArray(value)) {
                const subTable = document.createElement('table');
                const subTbody = document.createElement('tbody');
                value.forEach((val) => {
                    const subTr = document.createElement('tr');
                    const subTd = document.createElement('td');
                    subTd.innerHTML = val.toString();

                    subTr.append(subTd);
                    subTbody.append(subTr);
                });
                td.classList.add('with-sub-table')

                subTable.append(subTbody);
                td.append(subTable);
            } else if (value) {
                td.innerHTML = value.toString();
            }
            tr.append(td);
        })
    }

    fixedColumns() {
        const thead: HTMLTableRowElement[] = Array.prototype.slice.call(this.thead.children);
        this.fixedColumnsRows(thead);
        const tbody: HTMLTableRowElement[] = Array.prototype.slice.call(this.tbody.children);
        this.fixedColumnsRows(tbody);
    }

    fixedColumnsRows(rows: HTMLTableRowElement[]) {

        let offsetLeft: [number, number][] = []

        rows.forEach((tr, index) => {
            const columns: HTMLTableCellElement[] = Array.prototype.slice.call(tr.children);

            if (columns.length > 1) {
                offsetLeft = offsetLeft.filter((item) => item[0] > index);
                const countTopRow = offsetLeft.length;

                let curLeft = offsetLeft.reduce((acc, [i, left]) => acc + left, 0);

                for (let i = 0; i < this.maxLevelData - countTopRow; i++) {
                    const cell = columns[i];
                    const cellWidth = cell.offsetWidth;
                    const cellColspan = Number(cell.getAttribute('colspan'));
                    cell.classList.add('fixed-column')
                    cell.style.left = `${curLeft}px`;
                    curLeft += cell.offsetWidth;

                    if (cellColspan) {
                        i += cellColspan;
                    }

                    // -1 не учитываем текущую строку
                    const cellRowspan = Number(cell.getAttribute('rowspan'));
                    if (cellRowspan > 1) {
                        offsetLeft.push([index + cellRowspan, cellWidth]);
                    }
                }
            }
        })
    }

    handlersRows(tr: HTMLTableRowElement, elements: HTMLTableCellElement[]) {
        tr.addEventListener('mouseenter', () => {
            elements.forEach(el => {
                el.classList.add('hovered')
            })
        })
        tr.addEventListener('mouseleave', () => {
            elements.forEach(el => {
                el.classList.remove('hovered')
            })
        })
    }

    handlersColumns(td: HTMLTableCellElement, className: string) {
        td.addEventListener('mouseenter', () => {
            const cells = document.getElementsByClassName(className);

            Array.prototype.slice.call(cells).forEach((el) => {
                el.classList.add('hovered');
            })
        })
        td.addEventListener('mouseleave', () => {
            const cells = document.getElementsByClassName(className);

            Array.prototype.slice.call(cells).forEach((el) => {
                el.classList.remove('hovered');
            })
        })
    }
}
