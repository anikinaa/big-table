import "./main.css";
import $9sXgr$swchelperssrc_class_call_checkmjs from "@swc/helpers/src/_class_call_check.mjs";
import $9sXgr$swchelperssrc_create_classmjs from "@swc/helpers/src/_create_class.mjs";
import $9sXgr$swchelperssrc_object_spreadmjs from "@swc/helpers/src/_object_spread.mjs";
import $9sXgr$swchelperssrc_object_spread_propsmjs from "@swc/helpers/src/_object_spread_props.mjs";
import $9sXgr$swchelperssrc_sliced_to_arraymjs from "@swc/helpers/src/_sliced_to_array.mjs";
import $9sXgr$swchelperssrc_to_consumable_arraymjs from "@swc/helpers/src/_to_consumable_array.mjs";
import {debounce as $9sXgr$debounce} from "lodash";









function $f86d47f64b9cc4a7$export$1663e1d4d245d661(columns) {
    var codes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    columns.forEach(function(param) {
        var children = param.children, code = param.code;
        if (code) codes.push(code);
        if (children) $f86d47f64b9cc4a7$export$1663e1d4d245d661(children, codes);
    });
    return codes;
}


function $c633b86b68fd66aa$export$cf13ac0605cc7091(rows) {
    return rows.reduce(function(acc, param) {
        var children = param.children;
        return children ? acc + $c633b86b68fd66aa$export$cf13ac0605cc7091(children) : acc + 1;
    }, 0);
}


function $2c790baa0ce2a5a7$export$2496bd952b3e0300(theadData) {
    return theadData[0].reduce(function(acc, item) {
        return item.colspan ? item.colspan + acc : acc + 1;
    }, 0);
}



function $cd6d058b143259f2$export$524484cb4e29ef80(columns) {
    var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var _Math;
    var levels = columns.map(function(param) {
        var children = param.children, title = param.title;
        if (!title) return level - 1;
        return children && title ? $cd6d058b143259f2$export$524484cb4e29ef80(children, level + 1) : level;
    });
    return (_Math = Math).max.apply(_Math, (0, $9sXgr$swchelperssrc_to_consumable_arraymjs)(levels));
}





function $e4f67c8207b8e741$export$2e9d1c26dc8725f8(columns, maxLevel) {
    var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, rows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
    var row = [];
    var childRows = [];
    columns.forEach(function(param) {
        var title = param.title, children = param.children, color = param.color, ch = param.className, code = param.code;
        var className = [];
        if (ch) className.push(ch);
        if (code) className.push("data-code-".concat(code));
        if (children) {
            var childrenClassNames = $e4f67c8207b8e741$var$getChildrenClassNamesCodes(children);
            row.push({
                title: title,
                color: color,
                className: (0, $9sXgr$swchelperssrc_to_consumable_arraymjs)(className).concat((0, $9sXgr$swchelperssrc_to_consumable_arraymjs)(childrenClassNames)),
                colspan: $e4f67c8207b8e741$var$getCountChildren(children)
            });
            childRows = (0, $9sXgr$swchelperssrc_to_consumable_arraymjs)(childRows).concat((0, $9sXgr$swchelperssrc_to_consumable_arraymjs)(children.map(function(item) {
                return (0, $9sXgr$swchelperssrc_object_spread_propsmjs)((0, $9sXgr$swchelperssrc_object_spreadmjs)({}, item), {
                    color: item.color || color
                });
            })));
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
    if (childRows.length) $e4f67c8207b8e741$export$2e9d1c26dc8725f8(childRows, maxLevel, level + 1, rows);
    return rows;
}
function $e4f67c8207b8e741$var$getCountChildren(items) {
    var count = items.length;
    items.forEach(function(param) {
        var children = param.children;
        if (children) {
            count--;
            count += $e4f67c8207b8e741$var$getCountChildren(children);
        }
    });
    return count;
}
function $e4f67c8207b8e741$var$getChildrenClassNamesCodes(items) {
    var className = [];
    items.forEach(function(param) {
        var children = param.children, code = param.code;
        if (code) className.push("data-code-".concat(code));
        if (children) {
            var childrenClassNames = $e4f67c8207b8e741$var$getChildrenClassNamesCodes(children);
            className = (0, $9sXgr$swchelperssrc_to_consumable_arraymjs)(className).concat((0, $9sXgr$swchelperssrc_to_consumable_arraymjs)(childrenClassNames));
        }
    });
    return className;
}



function $22babb8017a3bc1e$export$65f773ad43475030(columns) {
    var colorColumns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, globalIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, parentColor = arguments.length > 3 ? arguments[3] : void 0;
    var localIndex = globalIndex;
    columns.forEach(function(param) {
        var color = param.color, children = param.children;
        if ((color || parentColor) && !children) colorColumns[localIndex] = color || parentColor;
        if (children) {
            $22babb8017a3bc1e$export$65f773ad43475030(children, colorColumns, localIndex, color || parentColor);
            localIndex += (0, $c633b86b68fd66aa$export$cf13ac0605cc7091)(children);
        } else localIndex++;
    });
    return colorColumns;
}




var $e761e5cb48c880b0$var$COLOR_CLASSES = [
    "green",
    "blue",
    "red",
    "yellow",
    "orange"
];
var $e761e5cb48c880b0$export$54ec01a60f47d33d = /*#__PURE__*/ function() {
    "use strict";
    function Table(args) {
        (0, $9sXgr$swchelperssrc_class_call_checkmjs)(this, Table);
        console.log(args.data);
        this.initialArgs = args;
        this.init();
        this.updateResize();
    }
    (0, $9sXgr$swchelperssrc_create_classmjs)(Table, [
        {
            key: "updateResize",
            value: function updateResize() {
                var _this = this;
                window.addEventListener("resize", (0, $9sXgr$debounce)(function() {
                    return _this.init();
                }, 300));
            }
        },
        {
            key: "init",
            value: function init() {
                var _this = this;
                var _initialArgs = this.initialArgs, columns = _initialArgs.columns, root = _initialArgs.root, maxHeight = _initialArgs.maxHeight, fullHeight = _initialArgs.fullHeight, data = _initialArgs.data, headerColor = _initialArgs.headerColor;
                this.root = root;
                this.data = data;
                this.maxLevelColumns = (0, $cd6d058b143259f2$export$524484cb4e29ef80)(columns);
                this.maxLevelData = (0, $cd6d058b143259f2$export$524484cb4e29ef80)(this.data, 1);
                this.theadData = (0, $e4f67c8207b8e741$export$2e9d1c26dc8725f8)(columns, this.maxLevelColumns);
                this.countColumns = (0, $2c790baa0ce2a5a7$export$2496bd952b3e0300)(this.theadData);
                this.codes = (0, $f86d47f64b9cc4a7$export$1663e1d4d245d661)(columns);
                this.colorColumns = (0, $22babb8017a3bc1e$export$65f773ad43475030)(columns);
                this.createTable(maxHeight, fullHeight);
                setTimeout(function() {
                    _this.renderThead(headerColor);
                }, 10);
                setTimeout(function() {
                    _this.renderTbody();
                }, 20);
                setTimeout(function() {
                    _this.fixedColumns();
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
                    this.root.style.maxHeight = "".concat(window.innerHeight - top, "px");
                } else this.root.style.maxHeight = "".concat(maxHeight, "px");
                wrap.appendChild(this.table);
                this.root.appendChild(wrap);
            }
        },
        {
            key: "renderThead",
            value: function renderThead(headerColor) {
                var _this = this;
                this.thead = document.createElement("thead");
                this.setColor(this.thead, headerColor);
                this.theadData.forEach(function(columns) {
                    var tr = document.createElement("tr");
                    var countColumn = 0;
                    columns.forEach(function(param) {
                        var title = param.title, colspan = param.colspan, rowspan = param.rowspan, color = param.color, className = param.className;
                        var td = document.createElement("td");
                        td.innerHTML = title;
                        _this.setColor(td, color);
                        if (className && className.length) className.forEach(function(ch) {
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
                    _this.thead.appendChild(tr);
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
                var _this = this;
                data.forEach(function(item, index) {
                    var title = item.title, children = item.children, values = item.values, color = item.color, bold = item.bold, _align = item.align, align = _align === void 0 ? "left" : _align, className = item.className;
                    var tr = prevTr && index === 0 ? prevTr : document.createElement("tr");
                    _this.handlersRows(tr, parentCells);
                    if (bold) tr.classList.add("bold");
                    if (className) tr.classList.add(className);
                    _this.setColor(tr, color);
                    var td = document.createElement("td");
                    _this.setColor(td, color || _this.colorColumns[numberCell]);
                    td.innerHTML = title;
                    td.classList.add("align-".concat(align));
                    if (children) {
                        td.setAttribute("rowspan", (0, $c633b86b68fd66aa$export$cf13ac0605cc7091)(children).toString());
                        tr.appendChild(td);
                        if (!prevTr || index > 0) _this.tbody.appendChild(tr);
                        _this.renderTbodyRow(children.map(function(item) {
                            return (0, $9sXgr$swchelperssrc_object_spread_propsmjs)((0, $9sXgr$swchelperssrc_object_spreadmjs)({}, item), {
                                color: color || item.color,
                                bold: bold || item.bold
                            });
                        }), curColumn + 1, tr, numberCell + 1, (0, $9sXgr$swchelperssrc_to_consumable_arraymjs)(parentCells).concat([
                            td
                        ]));
                    } else if (values) {
                        var tail = _this.maxLevelData - curColumn;
                        td.setAttribute("colspan", tail.toString());
                        if (title) tr.appendChild(td);
                        _this.renderValues(tr, values, color);
                        _this.tbody.appendChild(tr);
                    } else _this.renderRowDivider(tr, item, curColumn);
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
                td.style.top = "".concat(this.thead.offsetHeight, "px");
                if (!sticky) td.classList.add("row-divider_no-sticky");
                if (align) td.classList.add("align-".concat(align));
                this.setColor(td, color);
                var wrap = document.createElement("div");
                wrap.innerHTML = title;
                wrap.style.width = "".concat(this.root.offsetWidth - 30, "px");
                wrap.style.left = "5px";
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
                    if ($e761e5cb48c880b0$var$COLOR_CLASSES.indexOf(color) >= 0) el.classList.add(color);
                    else el.style.backgroundColor = color;
                }
            }
        },
        {
            key: "renderValues",
            value: function renderValues(tr, values, colorRow) {
                var _this = this;
                this.codes.forEach(function(code, index) {
                    var td = document.createElement("td");
                    var className = "data-code-".concat(code);
                    td.classList.add(className);
                    _this.handlersColumns(td, className);
                    _this.setColor(td, colorRow || _this.colorColumns[_this.maxLevelData + index]);
                    var value = values[code];
                    if (Array.isArray(value)) {
                        var subTable = document.createElement("table");
                        var subTbody = document.createElement("tbody");
                        value.forEach(function(val) {
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
                var _this = this;
                var offsetLeft = [];
                rows.forEach(function(tr, index) {
                    var columns = Array.prototype.slice.call(tr.children);
                    if (columns.length > 1) {
                        offsetLeft = offsetLeft.filter(function(item) {
                            return item[0] > index;
                        });
                        var countTopRow = offsetLeft.length;
                        var curLeft = offsetLeft.reduce(function(acc, param) {
                            var _param = (0, $9sXgr$swchelperssrc_sliced_to_arraymjs)(param, 2), i = _param[0], left = _param[1];
                            return acc + left;
                        }, 0);
                        for(var i = 0; i < _this.maxLevelData - countTopRow; i++){
                            var cell = columns[i];
                            var cellWidth = cell.offsetWidth;
                            var cellColspan = Number(cell.getAttribute("colspan"));
                            cell.classList.add("fixed-column");
                            cell.style.left = "".concat(curLeft, "px");
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
                tr.addEventListener("mouseenter", function() {
                    elements.forEach(function(el) {
                        el.classList.add("hovered");
                    });
                });
                tr.addEventListener("mouseleave", function() {
                    elements.forEach(function(el) {
                        el.classList.remove("hovered");
                    });
                });
            }
        },
        {
            key: "handlersColumns",
            value: function handlersColumns(td, className) {
                td.addEventListener("mouseenter", function() {
                    var cells = document.getElementsByClassName(className);
                    Array.prototype.slice.call(cells).forEach(function(el) {
                        el.classList.add("hovered");
                    });
                });
                td.addEventListener("mouseleave", function() {
                    var cells = document.getElementsByClassName(className);
                    Array.prototype.slice.call(cells).forEach(function(el) {
                        el.classList.remove("hovered");
                    });
                });
            }
        }
    ]);
    return Table;
}();




export {$e761e5cb48c880b0$export$54ec01a60f47d33d as default};
//# sourceMappingURL=module.js.map
