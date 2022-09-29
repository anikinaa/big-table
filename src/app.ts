import { mock } from './table/table.mock'
const { Table } = require('../dist/big-table/script');
// const Table = require('@anikin/table');


new Table({
    ...mock,
    columns: [
        {
            title: 'Marvin'
        },
        {
            title: 'Blanda'
        },
        {
            title: 'Marvin - Blanda'
        },
        {
            title: 'Table',
            children: [
                {
                    title: 'Jaguar Civic',
                    code: 'code1'
                },
                {
                    title: 'Thai',
                    children: [
                        {
                            title: 'Fiat CTS',
                            code: 'code2'
                        },
                        {
                            title: 'Mercedes Benz Fortwo',
                            code: 'code3'
                        },
                    ]
                }
            ]
        },
    ],
    data: [
        // строка-разделитель фиксированная
        {
            title: 'Soul',
            color: 'red'
        },
        // строка-разделитель прокручивающаеся
        {
            title: 'Soul',
            sticky: false
        },
        {
            title: 'Country',
            children: [
                // строка c данными
                {
                    title: 'Rock',
                    values: {
                        code1: 5
                    }
                }
            ],
        }, {
            title: 'Reggae',
            children: [
                {
                    title: 'Funk',
                    children: [
                        {
                            // строка c данными
                            title: 'Metal',
                            values: {
                                code1: 5
                            }
                        }
                    ]
                },

                {
                    title: 'Rap',
                    children: [
                        {
                            // строка c данными
                            title: 'Jazz',
                            values: {
                                code2: 5
                            }
                        },
                        {
                            // строка c данными
                            title: 'Hip Hop',
                            values: {
                                code3: 5
                            }
                        }
                    ]
                }
            ]
        }
    ],
    root: document.getElementById('root'),
    fullHeight: true,
    headerColor: 'blue'
})