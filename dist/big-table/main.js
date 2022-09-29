require("./main.css");
var $crn9m$lodash = require("lodash");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $8feaf02265a2b007$export$54ec01a60f47d33d);


function $e3b0dda5593459d2$export$1663e1d4d245d661(columns, codes = []) {
    columns.forEach(({ children: children , code: code  })=>{
        if (code) codes.push(code);
        if (children) $e3b0dda5593459d2$export$1663e1d4d245d661(children, codes);
    });
    return codes;
}


function $e8a5bbb00d4d909a$export$cf13ac0605cc7091(rows) {
    return rows.reduce((acc, { children: children  })=>children ? acc + $e8a5bbb00d4d909a$export$cf13ac0605cc7091(children) : acc + 1, 0);
}


function $fc4d4751592cc969$export$2496bd952b3e0300(theadData) {
    return theadData[0].reduce((acc, item)=>item.colspan ? item.colspan + acc : acc + 1, 0);
}


function $a1f4c455fa3441c7$export$524484cb4e29ef80(columns, level = 0) {
    const levels = columns.map(({ children: children , title: title  })=>{
        if (!title) return level - 1;
        return children && title ? $a1f4c455fa3441c7$export$524484cb4e29ef80(children, level + 1) : level;
    });
    return Math.max(...levels);
}


function $1cc50f0566e47139$export$2e9d1c26dc8725f8(columns, maxLevel, level = 0, rows = []) {
    const row = [];
    let childRows = [];
    columns.forEach(({ title: title , children: children , color: color , className: ch , code: code  })=>{
        const className = [];
        if (ch) className.push(ch);
        if (code) className.push(`data-code-${code}`);
        if (children) {
            const childrenClassNames = $1cc50f0566e47139$var$getChildrenClassNamesCodes(children);
            row.push({
                title: title,
                color: color,
                className: [
                    ...className,
                    ...childrenClassNames
                ],
                colspan: $1cc50f0566e47139$var$getCountChildren(children)
            });
            childRows = [
                ...childRows,
                ...children.map((item)=>({
                        ...item,
                        color: item.color || color
                    }))
            ];
        } else {
            const cell = {
                title: title,
                color: color,
                className: className
            };
            if (maxLevel - level > 0) cell.rowspan = maxLevel - level + 1;
            row.push(cell);
        }
    });
    rows.push(row);
    if (childRows.length) $1cc50f0566e47139$export$2e9d1c26dc8725f8(childRows, maxLevel, level + 1, rows);
    return rows;
}
function $1cc50f0566e47139$var$getCountChildren(items) {
    let count = items.length;
    items.forEach(({ children: children  })=>{
        if (children) {
            count--;
            count += $1cc50f0566e47139$var$getCountChildren(children);
        }
    });
    return count;
}
function $1cc50f0566e47139$var$getChildrenClassNamesCodes(items) {
    let className = [];
    items.forEach(({ children: children , code: code  })=>{
        if (code) className.push(`data-code-${code}`);
        if (children) {
            const childrenClassNames = $1cc50f0566e47139$var$getChildrenClassNamesCodes(children);
            className = [
                ...className,
                ...childrenClassNames
            ];
        }
    });
    return className;
}



function $21690849897d159c$export$65f773ad43475030(columns, colorColumns = {}, globalIndex = 0, parentColor) {
    let localIndex = globalIndex;
    columns.forEach(({ color: color , children: children  })=>{
        if ((color || parentColor) && !children) colorColumns[localIndex] = color || parentColor;
        if (children) {
            $21690849897d159c$export$65f773ad43475030(children, colorColumns, localIndex, color || parentColor);
            localIndex += (0, $e8a5bbb00d4d909a$export$cf13ac0605cc7091)(children);
        } else localIndex++;
    });
    return colorColumns;
}




const $8feaf02265a2b007$var$COLOR_CLASSES = [
    "green",
    "blue",
    "red",
    "yellow",
    "orange"
];
class $8feaf02265a2b007$export$54ec01a60f47d33d {
    constructor(args){
        this.initialArgs = args;
        this.init();
        this.updateResize();
    }
    updateResize() {
        window.addEventListener("resize", (0, $crn9m$lodash.debounce)(()=>this.init(), 300));
    }
    init() {
        const { columns: columns , root: root , maxHeight: maxHeight , fullHeight: fullHeight , data: data , headerColor: headerColor  } = this.initialArgs;
        this.root = root;
        this.data = data;
        this.maxLevelColumns = (0, $a1f4c455fa3441c7$export$524484cb4e29ef80)(columns);
        this.maxLevelData = (0, $a1f4c455fa3441c7$export$524484cb4e29ef80)(this.data, 1);
        this.theadData = (0, $1cc50f0566e47139$export$2e9d1c26dc8725f8)(columns, this.maxLevelColumns);
        this.countColumns = (0, $fc4d4751592cc969$export$2496bd952b3e0300)(this.theadData);
        this.codes = (0, $e3b0dda5593459d2$export$1663e1d4d245d661)(columns);
        this.colorColumns = (0, $21690849897d159c$export$65f773ad43475030)(columns);
        this.createTable(maxHeight, fullHeight);
        setTimeout(()=>{
            this.renderThead(headerColor);
        }, 10);
        setTimeout(()=>{
            this.renderTbody();
        }, 20);
        setTimeout(()=>{
            this.fixedColumns();
        }, 200);
    }
    createTable(maxHeight = 600, fullHeight) {
        this.table = document.createElement("table");
        this.table.setAttribute("cellspacing", "0");
        this.table.setAttribute("class", "big-table");
        this.root.classList.add("big-table-wrap");
        this.root.innerHTML = "";
        if (fullHeight) {
            const top = this.root.getBoundingClientRect()?.top;
            this.root.style.maxHeight = `${window.innerHeight - top}px`;
        } else this.root.style.maxHeight = `${maxHeight}px`;
        this.root.append(this.table);
    }
    renderThead(headerColor) {
        this.thead = document.createElement("thead");
        this.setColor(this.thead, headerColor);
        this.theadData.forEach((columns)=>{
            const tr = document.createElement("tr");
            let countColumn = 0;
            columns.forEach(({ title: title , colspan: colspan , rowspan: rowspan , color: color , className: className  })=>{
                const td = document.createElement("td");
                td.innerHTML = title;
                this.setColor(td, color);
                if (className && className.length) className.forEach((ch)=>{
                    td.classList.add(ch);
                });
                countColumn += colspan || 1;
                if (countColumn === this.countColumns) td.classList.add("no-border");
                if (colspan) td.setAttribute("colspan", colspan.toString());
                if (rowspan) td.setAttribute("rowspan", rowspan.toString());
                tr.append(td);
            });
            this.thead.append(tr);
        });
        this.table.append(this.thead);
    }
    renderTbody() {
        this.tbody = document.createElement("tbody");
        this.renderTbodyRow(this.data);
        this.table.append(this.tbody);
    }
    renderTbodyRow(data, curColumn = 0, prevTr, numberCell = 0, parentCells = []) {
        data.forEach((item, index)=>{
            const { title: title , children: children , values: values , color: color , bold: bold , align: align = "left" , className: className  } = item;
            const tr = prevTr && index === 0 ? prevTr : document.createElement("tr");
            this.handlersRows(tr, parentCells);
            if (bold) tr.classList.add("bold");
            if (className) tr.classList.add(className);
            this.setColor(tr, color);
            const td = document.createElement("td");
            this.setColor(td, color || this.colorColumns[numberCell]);
            td.innerHTML = title;
            td.classList.add(`align-${align}`);
            if (children) {
                td.setAttribute("rowspan", (0, $e8a5bbb00d4d909a$export$cf13ac0605cc7091)(children).toString());
                tr.append(td);
                if (!prevTr || index > 0) this.tbody.append(tr);
                this.renderTbodyRow(children.map((item)=>({
                        ...item,
                        color: color || item.color,
                        bold: bold || item.bold
                    })), curColumn + 1, tr, numberCell + 1, [
                    ...parentCells,
                    td
                ]);
            } else if (values) {
                const tail = this.maxLevelData - curColumn;
                td.setAttribute("colspan", tail.toString());
                if (title) tr.append(td);
                this.renderValues(tr, values, color);
                this.tbody.append(tr);
            } else this.renderRowDivider(tr, item, curColumn);
        });
    }
    renderRowDivider(tr, item, curColumn) {
        const { sticky: sticky = true , color: color , title: title , align: align , bold: bold  } = item;
        const tail = this.countColumns - curColumn;
        const td = document.createElement("td");
        td.setAttribute("colspan", tail.toString());
        td.classList.add("row-divider");
        td.style.top = `${this.thead.offsetHeight}px`;
        if (!sticky) td.classList.add("row-divider_no-sticky");
        if (align) td.classList.add(`align-${align}`);
        this.setColor(td, color);
        const wrap = document.createElement("div");
        wrap.innerHTML = title;
        wrap.style.width = `${this.root.offsetWidth - 30}px`;
        wrap.style.left = `5px`;
        wrap.setAttribute("class", "sticky-row-wrap");
        td.append(wrap);
        tr.append(td);
        this.tbody.append(tr);
    }
    setColor(el, color) {
        if (color) {
            if ($8feaf02265a2b007$var$COLOR_CLASSES.indexOf(color) >= 0) el.classList.add(color);
            else el.style.backgroundColor = color;
        }
    }
    renderValues(tr, values, colorRow) {
        this.codes.forEach((code, index)=>{
            const td = document.createElement("td");
            const className = `data-code-${code}`;
            td.classList.add(className);
            this.handlersColumns(td, className);
            this.setColor(td, colorRow || this.colorColumns[this.maxLevelData + index]);
            const value = values[code];
            if (Array.isArray(value)) {
                const subTable = document.createElement("table");
                const subTbody = document.createElement("tbody");
                value.forEach((val)=>{
                    const subTr = document.createElement("tr");
                    const subTd = document.createElement("td");
                    subTd.innerHTML = val.toString();
                    subTr.append(subTd);
                    subTbody.append(subTr);
                });
                td.classList.add("with-sub-table");
                subTable.append(subTbody);
                td.append(subTable);
            } else if (value) td.innerHTML = value.toString();
            tr.append(td);
        });
    }
    fixedColumns() {
        const thead = Array.prototype.slice.call(this.thead.children);
        this.fixedColumnsRows(thead);
        const tbody = Array.prototype.slice.call(this.tbody.children);
        this.fixedColumnsRows(tbody);
    }
    fixedColumnsRows(rows) {
        let offsetLeft = [];
        rows.forEach((tr, index)=>{
            const columns = Array.prototype.slice.call(tr.children);
            if (columns.length > 1) {
                offsetLeft = offsetLeft.filter((item)=>item[0] > index);
                const countTopRow = offsetLeft.length;
                let curLeft = offsetLeft.reduce((acc, [i, left])=>acc + left, 0);
                for(let i = 0; i < this.maxLevelData - countTopRow; i++){
                    const cell = columns[i];
                    const cellWidth = cell.offsetWidth;
                    const cellColspan = Number(cell.getAttribute("colspan"));
                    cell.classList.add("fixed-column");
                    cell.style.left = `${curLeft}px`;
                    curLeft += cell.offsetWidth;
                    if (cellColspan) i += cellColspan;
                    // -1 не учитываем текущую строку
                    const cellRowspan = Number(cell.getAttribute("rowspan"));
                    if (cellRowspan > 1) offsetLeft.push([
                        index + cellRowspan,
                        cellWidth
                    ]);
                }
            }
        });
    }
    handlersRows(tr, elements) {
        tr.addEventListener("mouseenter", ()=>{
            elements.forEach((el)=>{
                el.classList.add("hovered");
            });
        });
        tr.addEventListener("mouseleave", ()=>{
            elements.forEach((el)=>{
                el.classList.remove("hovered");
            });
        });
    }
    handlersColumns(td, className) {
        td.addEventListener("mouseenter", ()=>{
            const cells = document.getElementsByClassName(className);
            Array.prototype.slice.call(cells).forEach((el)=>{
                el.classList.add("hovered");
            });
        });
        td.addEventListener("mouseleave", ()=>{
            const cells = document.getElementsByClassName(className);
            Array.prototype.slice.call(cells).forEach((el)=>{
                el.classList.remove("hovered");
            });
        });
    }
}




//# sourceMappingURL=main.js.map
