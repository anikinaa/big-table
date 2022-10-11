require("./main.css");
require("@swc/helpers/lib/_class_call_check.js");
require("@swc/helpers/lib/_create_class.js");
require("@swc/helpers/lib/_object_spread.js");
require("@swc/helpers/lib/_object_spread_props.js");
require("@swc/helpers/lib/_sliced_to_array.js");
require("@swc/helpers/lib/_to_consumable_array.js");
var $iCJSG$lodash = require("lodash");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $8554213740643d43$export$54ec01a60f47d33d; });
import "8554213740643d43:@swc/helpers/lib/_class_call_check.js:esm";
import "8554213740643d43:@swc/helpers/lib/_create_class.js:esm";
import "8554213740643d43:@swc/helpers/lib/_object_spread.js:esm";
import "8554213740643d43:@swc/helpers/lib/_object_spread_props.js:esm";
import "8554213740643d43:@swc/helpers/lib/_sliced_to_array.js:esm";
import "8554213740643d43:@swc/helpers/lib/_to_consumable_array.js:esm";


function $3e447f080766b212$export$1663e1d4d245d661(columns) {
    var codes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    columns.forEach((param)=>{
        var children = param.children, code = param.code;
        if (code) codes.push(code);
        if (children) $3e447f080766b212$export$1663e1d4d245d661(children, codes);
    });
    return codes;
}


function $57a4cb7b9853f642$export$cf13ac0605cc7091(rows) {
    return rows.reduce((acc, param)=>{
        var children = param.children;
        return children ? acc + $57a4cb7b9853f642$export$cf13ac0605cc7091(children) : acc + 1;
    }, 0);
}


function $6cef2999b013aa98$export$2496bd952b3e0300(theadData) {
    return theadData[0].reduce((acc, item)=>item.colspan ? item.colspan + acc : acc + 1, 0);
}


import "6126098324a5b469:@swc/helpers/lib/_to_consumable_array.js:esm";
function $6126098324a5b469$export$524484cb4e29ef80(columns) {
    var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var _Math;
    var levels = columns.map((param)=>{
        var children = param.children, title = param.title;
        if (!title) return level - 1;
        return children && title ? $6126098324a5b469$export$524484cb4e29ef80(children, level + 1) : level;
    });
    return (_Math = Math).max.apply(_Math, (0, $6126098324a5b469$import$5a5c6451aa60633f$2e2bcd8739ae039)(levels));
}


import "3bf207d58ad0721f:@swc/helpers/lib/_object_spread.js:esm";
import "3bf207d58ad0721f:@swc/helpers/lib/_object_spread_props.js:esm";
import "3bf207d58ad0721f:@swc/helpers/lib/_to_consumable_array.js:esm";
function $3bf207d58ad0721f$export$2e9d1c26dc8725f8(columns, maxLevel) {
    var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, rows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    var row = [];
    var childRows = [];
    columns.forEach((param)=>{
        var title = param.title, children = param.children, color = param.color, ch = param.className, code = param.code;
        var className = [];
        if (ch) className.push(ch);
        if (code) className.push(`data-code-${code}`);
        if (children) {
            var childrenClassNames = $3bf207d58ad0721f$var$getChildrenClassNamesCodes(children);
            row.push({
                title: title,
                color: color,
                className: (0, $3bf207d58ad0721f$import$5a5c6451aa60633f$2e2bcd8739ae039)(className).concat((0, $3bf207d58ad0721f$import$5a5c6451aa60633f$2e2bcd8739ae039)(childrenClassNames)),
                colspan: $3bf207d58ad0721f$var$getCountChildren(children)
            });
            childRows = (0, $3bf207d58ad0721f$import$5a5c6451aa60633f$2e2bcd8739ae039)(childRows).concat((0, $3bf207d58ad0721f$import$5a5c6451aa60633f$2e2bcd8739ae039)(children.map((item)=>(0, $3bf207d58ad0721f$import$25ed7b93d4e79a51$2e2bcd8739ae039)((0, $3bf207d58ad0721f$import$edcaf86a4f533110$2e2bcd8739ae039)({}, item), {
                    color: item.color || color
                }))));
        } else {
            var cell = {
                title: title,
                color: color,
                className: className
            };
            if (maxLevel - level > 0) cell.rowspan = maxLevel - level + 1;
            row.push(cell);
        }
    });
    rows.push(row);
    if (childRows.length) $3bf207d58ad0721f$export$2e9d1c26dc8725f8(childRows, maxLevel, level + 1, rows);
    return rows;
}
function $3bf207d58ad0721f$var$getCountChildren(items) {
    var count = items.length;
    items.forEach((param)=>{
        var children = param.children;
        if (children) {
            count--;
            count += $3bf207d58ad0721f$var$getCountChildren(children);
        }
    });
    return count;
}
function $3bf207d58ad0721f$var$getChildrenClassNamesCodes(items) {
    var className = [];
    items.forEach((param)=>{
        var children = param.children, code = param.code;
        if (code) className.push(`data-code-${code}`);
        if (children) {
            var childrenClassNames = $3bf207d58ad0721f$var$getChildrenClassNamesCodes(children);
            className = (0, $3bf207d58ad0721f$import$5a5c6451aa60633f$2e2bcd8739ae039)(className).concat((0, $3bf207d58ad0721f$import$5a5c6451aa60633f$2e2bcd8739ae039)(childrenClassNames));
        }
    });
    return className;
}



function $6e766ae2cb4a6255$export$65f773ad43475030(columns) {
    var colorColumns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, globalIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, parentColor = arguments.length > 3 ? arguments[3] : void 0;
    var localIndex = globalIndex;
    columns.forEach((param)=>{
        var color = param.color, children = param.children;
        if ((color || parentColor) && !children) colorColumns[localIndex] = color || parentColor;
        if (children) {
            $6e766ae2cb4a6255$export$65f773ad43475030(children, colorColumns, localIndex, color || parentColor);
            localIndex += (0, $57a4cb7b9853f642$export$cf13ac0605cc7091)(children);
        } else localIndex++;
    });
    return colorColumns;
}




var $8554213740643d43$var$COLOR_CLASSES = [
    "green",
    "blue",
    "red",
    "yellow",
    "orange"
];
var $8554213740643d43$export$54ec01a60f47d33d = /*#__PURE__*/ function() {
    "use strict";
    function Table(args) {
        (0, $8554213740643d43$import$f319d06aa2d670dd$2e2bcd8739ae039)(this, Table);
        this.initialArgs = args;
        this.init();
        this.updateResize();
    }
    (0, $8554213740643d43$import$4d417c4d70828a96$2e2bcd8739ae039)(Table, [
        {
            key: "updateResize",
            value: function updateResize() {
                window.addEventListener("resize", (0, $iCJSG$lodash.debounce)(()=>this.init(), 300));
            }
        },
        {
            key: "init",
            value: function init() {
                var _initialArgs = this.initialArgs, columns = _initialArgs.columns, root = _initialArgs.root, maxHeight = _initialArgs.maxHeight, fullHeight = _initialArgs.fullHeight, data = _initialArgs.data, headerColor = _initialArgs.headerColor;
                this.root = root;
                this.data = data;
                this.maxLevelColumns = (0, $6126098324a5b469$export$524484cb4e29ef80)(columns);
                this.maxLevelData = (0, $6126098324a5b469$export$524484cb4e29ef80)(this.data, 1);
                this.theadData = (0, $3bf207d58ad0721f$export$2e9d1c26dc8725f8)(columns, this.maxLevelColumns);
                this.countColumns = (0, $6cef2999b013aa98$export$2496bd952b3e0300)(this.theadData);
                this.codes = (0, $3e447f080766b212$export$1663e1d4d245d661)(columns);
                this.colorColumns = (0, $6e766ae2cb4a6255$export$65f773ad43475030)(columns);
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
        },
        {
            key: "createTable",
            value: function createTable() {
                var maxHeight = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 600, fullHeight = arguments.length > 1 ? arguments[1] : void 0;
                this.table = document.createElement("table");
                this.table.setAttribute("cellspacing", "0");
                this.table.setAttribute("class", "big-table");
                var wrap = document.createElement("div");
                wrap.classList.add("big-table-wrap");
                this.root.classList.add("big-table-wrap__border");
                this.root.innerHTML = "";
                if (fullHeight) {
                    var ref;
                    var top = (ref = this.root.getBoundingClientRect()) === null || ref === void 0 ? void 0 : ref.top;
                    this.root.style.maxHeight = `${window.innerHeight - top}px`;
                    wrap.style.maxHeight = `${window.innerHeight - top}px`;
                } else {
                    this.root.style.maxHeight = `${maxHeight}px`;
                    wrap.style.maxHeight = `${maxHeight}px`;
                }
                wrap.appendChild(this.table);
                this.root.appendChild(wrap);
            }
        },
        {
            key: "renderThead",
            value: function renderThead(headerColor) {
                this.thead = document.createElement("thead");
                this.setColor(this.thead, headerColor);
                this.theadData.forEach((columns)=>{
                    var tr = document.createElement("tr");
                    var countColumn = 0;
                    columns.forEach((param)=>{
                        var title = param.title, colspan = param.colspan, rowspan = param.rowspan, color = param.color, className = param.className;
                        var td = document.createElement("td");
                        td.innerHTML = title;
                        this.setColor(td, color);
                        if (className && className.length) className.forEach((ch)=>{
                            td.classList.add(ch);
                        });
                        countColumn += colspan || 1;
                        // if (countColumn === this.countColumns) {
                        //     td.classList.add('no-border')
                        // }
                        if (colspan) td.setAttribute("colspan", colspan.toString());
                        if (rowspan) td.setAttribute("rowspan", rowspan.toString());
                        tr.appendChild(td);
                    });
                    this.thead.appendChild(tr);
                });
                this.table.appendChild(this.thead);
            }
        },
        {
            key: "renderTbody",
            value: function renderTbody() {
                this.tbody = document.createElement("tbody");
                this.renderTbodyRow(this.data);
                this.table.appendChild(this.tbody);
            }
        },
        {
            key: "renderTbodyRow",
            value: function renderTbodyRow(data) {
                var curColumn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, prevTr = arguments.length > 2 ? arguments[2] : void 0, numberCell = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, parentCells = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [];
                data.forEach((item, index)=>{
                    var title = item.title, children = item.children, values = item.values, color = item.color, bold = item.bold, _align = item.align, align = _align === void 0 ? "left" : _align, className = item.className;
                    var tr = prevTr && index === 0 ? prevTr : document.createElement("tr");
                    this.handlersRows(tr, parentCells);
                    if (bold) tr.classList.add("bold");
                    if (className) tr.classList.add(className);
                    this.setColor(tr, color);
                    var td = document.createElement("td");
                    this.setColor(td, color || this.colorColumns[numberCell]);
                    td.innerHTML = title;
                    td.classList.add(`align-${align}`);
                    if (children) {
                        td.setAttribute("rowspan", (0, $57a4cb7b9853f642$export$cf13ac0605cc7091)(children).toString());
                        tr.appendChild(td);
                        if (!prevTr || index > 0) this.tbody.appendChild(tr);
                        this.renderTbodyRow(children.map((item)=>(0, $8554213740643d43$import$25ed7b93d4e79a51$2e2bcd8739ae039)((0, $8554213740643d43$import$edcaf86a4f533110$2e2bcd8739ae039)({}, item), {
                                color: color || item.color,
                                bold: bold || item.bold
                            })), curColumn + 1, tr, numberCell + 1, (0, $8554213740643d43$import$5a5c6451aa60633f$2e2bcd8739ae039)(parentCells).concat([
                            td
                        ]));
                    } else if (values) {
                        var tail = this.maxLevelData - curColumn;
                        td.setAttribute("colspan", tail.toString());
                        if (title) tr.appendChild(td);
                        this.renderValues(tr, values, color);
                        this.tbody.appendChild(tr);
                    } else this.renderRowDivider(tr, item, curColumn);
                });
            }
        },
        {
            key: "renderRowDivider",
            value: function renderRowDivider(tr, item, curColumn) {
                var _sticky = item.sticky, sticky = _sticky === void 0 ? true : _sticky, color = item.color, title = item.title, align = item.align, bold = item.bold;
                var tail = this.countColumns - curColumn;
                var td = document.createElement("td");
                td.setAttribute("colspan", tail.toString());
                td.classList.add("row-divider");
                td.style.top = `${this.thead.offsetHeight}px`;
                if (!sticky) td.classList.add("row-divider_no-sticky");
                if (align) td.classList.add(`align-${align}`);
                this.setColor(td, color);
                var wrap = document.createElement("div");
                wrap.innerHTML = title;
                wrap.style.width = `${this.root.offsetWidth - 30}px`;
                wrap.style.left = `5px`;
                wrap.setAttribute("class", "sticky-row-wrap");
                td.appendChild(wrap);
                tr.appendChild(td);
                this.tbody.appendChild(tr);
            }
        },
        {
            key: "setColor",
            value: function setColor(el, color) {
                if (color) {
                    if ($8554213740643d43$var$COLOR_CLASSES.indexOf(color) >= 0) el.classList.add(color);
                    else el.style.backgroundColor = color;
                }
            }
        },
        {
            key: "renderValues",
            value: function renderValues(tr, values, colorRow) {
                this.codes.forEach((code, index)=>{
                    var td = document.createElement("td");
                    var className = `data-code-${code}`;
                    td.classList.add(className);
                    this.handlersColumns(td, className);
                    this.setColor(td, colorRow || this.colorColumns[this.maxLevelData + index]);
                    var value = values[code];
                    if (Array.isArray(value)) {
                        var subTable = document.createElement("table");
                        var subTbody = document.createElement("tbody");
                        value.forEach((val)=>{
                            var subTr = document.createElement("tr");
                            var subTd = document.createElement("td");
                            subTd.innerHTML = val.toString();
                            subTr.appendChild(subTd);
                            subTbody.appendChild(subTr);
                        });
                        td.classList.add("with-sub-table");
                        subTable.appendChild(subTbody);
                        td.appendChild(subTable);
                    } else if (value) td.innerHTML = value.toString();
                    tr.appendChild(td);
                });
            }
        },
        {
            key: "fixedColumns",
            value: function fixedColumns() {
                var thead = Array.prototype.slice.call(this.thead.children);
                this.fixedColumnsRows(thead);
                var tbody = Array.prototype.slice.call(this.tbody.children);
                this.fixedColumnsRows(tbody);
            }
        },
        {
            key: "fixedColumnsRows",
            value: function fixedColumnsRows(rows) {
                var offsetLeft = [];
                rows.forEach((tr, index)=>{
                    var columns = Array.prototype.slice.call(tr.children);
                    if (columns.length > 1) {
                        offsetLeft = offsetLeft.filter((item)=>item[0] > index);
                        var countTopRow = offsetLeft.length;
                        var curLeft = offsetLeft.reduce((acc, param)=>{
                            var _param = (0, $8554213740643d43$import$a521aa921bda7687$2e2bcd8739ae039)(param, 2), i = _param[0], left = _param[1];
                            return acc + left;
                        }, 0);
                        for(var i = 0; i < this.maxLevelData - countTopRow; i++){
                            var cell = columns[i];
                            var cellWidth = cell.offsetWidth;
                            var cellColspan = Number(cell.getAttribute("colspan"));
                            cell.classList.add("fixed-column");
                            cell.style.left = `${curLeft}px`;
                            curLeft += cell.offsetWidth;
                            if (cellColspan) i += cellColspan;
                            // -1 не учитываем текущую строку
                            var cellRowspan = Number(cell.getAttribute("rowspan"));
                            if (cellRowspan > 1) offsetLeft.push([
                                index + cellRowspan,
                                cellWidth
                            ]);
                        }
                    }
                });
            }
        },
        {
            key: "handlersRows",
            value: function handlersRows(tr, elements) {
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
        },
        {
            key: "handlersColumns",
            value: function handlersColumns(td, className) {
                td.addEventListener("mouseenter", ()=>{
                    var cells = document.getElementsByClassName(className);
                    Array.prototype.slice.call(cells).forEach((el)=>{
                        el.classList.add("hovered");
                    });
                });
                td.addEventListener("mouseleave", ()=>{
                    var cells = document.getElementsByClassName(className);
                    Array.prototype.slice.call(cells).forEach((el)=>{
                        el.classList.remove("hovered");
                    });
                });
            }
        }
    ]);
    return Table;
}();




//# sourceMappingURL=main.js.map
