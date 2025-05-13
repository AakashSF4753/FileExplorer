ej.treegrid.TreeGrid.Inject(ej.treegrid.DetailRow, ej.treegrid.Page, ej.treegrid.Filter, ej.treegrid.Toolbar, ej.treegrid.Edit, ej.treegrid.Sort, ej.treegrid.CommandColumn);
let fileManagerData = [
    {
        name: 'Desktop',
        type: '📁 Folder',
        created: new Date('2023-01-01'),
        modified: new Date('2023-08-01'),
        Children: [
            {
                name: 'ProjectAlpha',
                type: '📁 Folder',
                created: new Date('2023-07-10'),
                modified: new Date('2023-08-03'),
                Children: [
                    {
                        name: 'Proposal.docx',
                        type: '🗃️ File',
                        size: 512000,
                        created: new Date('2023-07-10'),
                        modified: new Date('2023-08-01')
                    },
                    {
                        name: 'Timeline.xlsx',
                        type: '🗃️ File',
                        size: 1048576,
                        created: new Date('2023-07-12'),
                        modified: new Date('2023-08-03')
                    }
                ]
            },
            {
                name: 'ToDoList.txt',
                type: '🗃️ File',
                size: 51200,
                created: new Date('2023-08-05'),
                modified: new Date('2023-08-10')
            },
            {
                name: 'MeetingNotes_August.pdf',
                type: '🗃️ File',
                size: 460800,
                created: new Date('2023-08-15'),
                modified: new Date('2023-08-15')
            }
        ]
    },
    {
        name: 'Documents',
        type: '📁 Folder',
        created: new Date('2022-01-01'),
        modified: new Date('2023-08-21'),
        Children: [
            {
                name: 'Work',
                type: '📁 Folder',
                created: new Date('2022-06-01'),
                modified: new Date('2023-08-21'),
                Children: [
                    {
                        name: 'ProjectAlpha',
                        type: '📁 Folder',
                        created: new Date('2023-07-10'),
                        modified: new Date('2023-08-03'),
                        Children: [
                            {
                                name: 'Proposal.docx',
                                type: '🗃️ File',
                                size: 512000,
                                created: new Date('2023-07-10'),
                                modified: new Date('2023-08-01')
                            },
                            {
                                name: 'Timeline.xlsx',
                                type: '🗃️ File',
                                size: 1048576,
                                created: new Date('2023-07-12'),
                                modified: new Date('2023-08-03')
                            }
                        ]
                    },
                    {
                        name: 'ProjectBeta',
                        type: '📁 Folder',
                        created: new Date('2023-06-22'),
                        modified: new Date('2023-07-18'),
                        Children: [
                            {
                                name: 'Report.pdf',
                                type: '🗃️ File',
                                size: 1024000,
                                created: new Date('2023-06-22'),
                                modified: new Date('2023-07-15')
                            },
                            {
                                name: 'Budget.xlsx',
                                type: '🗃️ File',
                                size: 1048576,
                                created: new Date('2023-06-25'),
                                modified: new Date('2023-07-18')
                            }
                        ]
                    },
                    {
                        name: 'Meetings',
                        type: '📁 Folder',
                        created: new Date('2023-07-01'),
                        modified: new Date('2023-08-21'),
                        Children: [
                            {
                                name: 'TeamMeeting_August.pdf',
                                type: '🗃️ File',
                                size: 512000,
                                created: new Date('2023-08-20'),
                                modified: new Date('2023-08-21')
                            },
                            {
                                name: 'ClientMeeting_July.pdf',
                                type: '🗃️ File',
                                size: 1048576,
                                created: new Date('2023-07-15'),
                                modified: new Date('2023-07-16')
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Personal',
                type: '📁 Folder',
                created: new Date('2021-01-01'),
                modified: new Date('2023-04-10'),
                Children: [
                    {
                        name: 'Taxes',
                        type: '📁 Folder',
                        created: new Date('2021-04-03'),
                        modified: new Date('2023-04-10'),
                        Children: [
                            {
                                name: '2022.pdf',
                                type: '🗃️ File',
                                size: 1024000,
                                created: new Date('2023-04-10'),
                                modified: new Date('2023-04-10')
                            },
                            {
                                name: '2021.pdf',
                                type: '🗃️ File',
                                size: 1048576,
                                created: new Date('2022-04-05'),
                                modified: new Date('2022-04-06')
                            },
                            {
                                name: '2020.pdf',
                                type: '🗃️ File',
                                size: 1024000,
                                created: new Date('2021-04-03'),
                                modified: new Date('2021-04-03')
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

var tree = new ej.treegrid.TreeGrid({
    dataSource: fileManagerData,
    childMapping: 'Children',
    treeColumnIndex: 0,
    columns: [
        { field: 'name', headerText: 'Name', width: 200 },
        { field: 'type', headerText: 'Type', width: 120 },
        {
            field: 'size',
            headerText: 'Size (KB)',
            textAlign: 'Right',
            width: 120,
            valueAccessor: function (field, data) {
                return data.size ? (data.size / 1024).toFixed(2) + ' KB' : '';
            }
        },
        { field: 'created', headerText: 'Created On', type: 'date', format: 'yMd', width: 120, textAlign: 'Right' },
        { field: 'modified', headerText: 'Last Modified', type: 'date', format: 'yMd', width: 120, textAlign: 'Right' },
    ],
    height: 400,
    pageSettings: { pageSize: 10 },
    enableHover: true,
    enableStickyHeader: true,
});
tree.appendTo('#TreeGrid');