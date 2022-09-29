import type { TData, TColumn } from './type'
import { faker } from '@faker-js/faker';

const mockColumn: TColumn[] = [
    {
        title: faker.company.companyName(),
    },
    {
        title: faker.company.companyName(),
        className: 'sefsdf',
    },
    {
        title: faker.company.companyName(),
    },
];

mockColumn.push({
    title: faker.commerce.product(),
    children: [
        {
            title: faker.vehicle.vehicle(),
            code: 'code1',
        },
        {
            title: faker.animal.cat(),
            children: [
                {
                    title: faker.vehicle.vehicle(),
                    code: 'code2',
                },
                {
                    title: faker.vehicle.vehicle(),
                    code: 'code3',
                },
            ],
        },
    ],
});

mockColumn.push({
    title: faker.commerce.product(),
    children: [
        {
            title: faker.vehicle.vehicle(),
            code: 'code4',
        },
        {
            title: faker.vehicle.vehicle(),
            code: 'code5',
        },
    ],
});

const main: TColumn = {
    title: faker.commerce.product(),
    children: [],
}

let code = 5;

// @ts-ignore
new Array(30).fill(0).forEach(() => {
    main.children.push({
        title: new Date().toDateString(),
        children: [
            {
                title: faker.vehicle.vehicle(),
                code: 'code' + code + 1,
            },
            {
                title: faker.animal.cat(),
                children: [
                    {
                        title: faker.vehicle.vehicle(),
                        code: 'code' + code + 2,
                    },
                    {
                        title: faker.vehicle.vehicle(),
                        code: 'code' + code + 3,
                    },
                ],
            },
        ],
    });
    code += 3;
});

mockColumn.push(main)

let mockData: TData[] = [
    {
        title: faker.music.genre(),
        color: 'red',
    },
    {
        title: faker.music.genre(),
        bold: true,
        className: 'sefsdf',
        children: [
            {
                title: faker.music.genre(),
                values: {
                    code3: Math.ceil(Math.random() * 100),
                },
            },
            {
                title: faker.music.genre(),
                values: {
                    code3: Math.ceil(Math.random() * 100),
                },
            },
        ],
    },
    {
        title: faker.music.genre(),
        children: [
            {
                title: faker.music.genre(),
                values: {
                    code3: Math.ceil(Math.random() * 100),
                },
            },
            {
                title: faker.music.genre(),
                align: 'right',
                values: {
                    code3: Math.ceil(Math.random() * 100),
                },
            },
        ],
    },
    {
        title: faker.music.genre(),
        color: 'green',
        children: [
            {
                title: faker.music.genre(),
                children: [{
                    title: faker.music.genre(),
                    values: {
                        code3: Math.ceil(Math.random() * 100),
                    },
                }],
            },
            {
                title: faker.music.genre(),
                children: [
                    {
                        title: faker.music.genre(),
                        children: [
                            {
                                values: {
                                    code1: 'sdfsdfsd&nbsp;fsdfsdfsdfsdf',
                                    code2: [Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 100)],
                                    code3: Math.ceil(Math.random() * 100),
                                },
                            }, {
                                values: {
                                    code3: Math.ceil(Math.random() * 100),
                                },
                            },
                        ],
                    },
                    {
                        title: faker.music.genre(),
                        values: {
                            code3: Math.ceil(Math.random() * 100),
                        },
                    },
                ],
            },
        ],
    },
    {
        title: faker.music.genre(),
        color: 'red',
        sticky: false,
        align: 'center'
    },
]
//
// const last = mockData[3]
//
// // @ts-ignore
// new Array(10).fill(0).forEach(() => {
//     mockData = [...mockData, last]
// })


// const mockData: TData[] = new Array(1).fill(0).map(() => ({
//     title: faker.music.genre(),
//     children: new Array(2).fill(0).map(() => ({
//         title: faker.music.genre(),
//         children: [
//             {
//                 title: faker.music.genre(),
//             },
//             {
//                 title: faker.music.genre(),
//             }
//         ]
//         // values: new Array(code).fill(0).reduce((acc, val, index) => {
//         //     acc['code' + index + 1] = Math.ceil(Math.random()*100);
//         //
//         //     return acc
//         // }, {
//         //     title1: faker.vehicle.vehicle(),
//         //     title2: faker.vehicle.vehicle(),
//         // }),
//     }))
// }))

// mockData.unshift({
//     title: faker.vehicle.vehicle()
// })

mockColumn[1].color = 'orange';
mockColumn.push(
    {
        title: faker.music.genre(),
        color: 'red',
        code: 'code1'
    },)

export const mock = {
    columns: mockColumn,
    data: mockData,
}
