import { mock } from './table/table.mock'
import { Table } from './table'
console.log(mock)

// window.BigTable = Table;
new Table({
    ...mock,
    root: document.getElementById('root'),
    fillHeight: true,
    headerColor: 'blue'
})