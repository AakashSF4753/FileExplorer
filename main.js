ej.treegrid.TreeGrid.Inject(ej.treegrid.DetailRow, ej.treegrid.Page, ej.treegrid.Filter, ej.treegrid.Toolbar, ej.treegrid.Edit, ej.treegrid.Sort, ej.treegrid.CommandColumn);
let fileManagerData = [
  {
    id: 1,
    name: 'Desktop',
    type: '📁 Folder',
    created: new Date('2023-01-01'),
    modified: new Date('2023-08-01'),
    Children: [
      {
        id: 2,
        name: 'ProjectAlpha',
        type: '📁 Folder',
        created: new Date('2023-07-10'),
        modified: new Date('2023-08-03'),
        Children: [
          {
            id: 3,
            name: 'Proposal.docx',
            type: '🗃️ File',
            size: 512000,
            created: new Date('2023-07-10'),
            modified: new Date('2023-08-01')
          },
          {
            id: 4,
            name: 'Timeline.xlsx',
            type: '🗃️ File',
            size: 1048576,
            created: new Date('2023-07-12'),
            modified: new Date('2023-08-03')
          }
        ]
      },
      {
        id: 5,
        name: 'ToDoList.txt',
        type: '🗃️ File',
        size: 51200,
        created: new Date('2023-08-05'),
        modified: new Date('2023-08-10')
      },
      {
        id: 6,
        name: 'MeetingNotes_August.pdf',
        type: '🗃️ File',
        size: 460800,
        created: new Date('2023-08-15'),
        modified: new Date('2023-08-15')
      }
    ]
  },
  {
    id: 7,
    name: 'Documents',
    type: '📁 Folder',
    created: new Date('2022-01-01'),
    modified: new Date('2023-08-21'),
    Children: [
      {
        id: 8,
        name: 'Work',
        type: '📁 Folder',
        created: new Date('2022-06-01'),
        modified: new Date('2023-08-21'),
        Children: [
          {
            id: 9,
            name: 'ProjectAlpha',
            type: '📁 Folder',
            created: new Date('2023-07-10'),
            modified: new Date('2023-08-03'),
            Children: [
              {
                id: 10,
                name: 'Proposal.docx',
                type: '🗃️ File',
                size: 512000,
                created: new Date('2023-07-10'),
                modified: new Date('2023-08-01')
              },
              {
                id: 11,
                name: 'Timeline.xlsx',
                type: '🗃️ File',
                size: 1048576,
                created: new Date('2023-07-12'),
                modified: new Date('2023-08-03')
              }
            ]
          },
          {
            id: 12,
            name: 'ProjectBeta',
            type: '📁 Folder',
            created: new Date('2023-06-22'),
            modified: new Date('2023-07-18'),
            Children: [
              {
                id: 13,
                name: 'Report.pdf',
                type: '🗃️ File',
                size: 1024000,
                created: new Date('2023-06-22'),
                modified: new Date('2023-07-15')
              },
              {
                id: 14,
                name: 'Budget.xlsx',
                type: '🗃️ File',
                size: 1048576,
                created: new Date('2023-06-25'),
                modified: new Date('2023-07-18')
              }
            ]
          },
          {
            id: 15,
            name: 'Meetings',
            type: '📁 Folder',
            created: new Date('2023-07-01'),
            modified: new Date('2023-08-21'),
            Children: [
              {
                id: 16,
                name: 'TeamMeeting_August.pdf',
                type: '🗃️ File',
                size: 512000,
                created: new Date('2023-08-20'),
                modified: new Date('2023-08-21')
              },
              {
                id: 17,
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
        id: 18,
        name: 'Personal',
        type: '📁 Folder',
        created: new Date('2021-01-01'),
        modified: new Date('2023-04-10'),
        Children: [
          {
            id: 19,
            name: 'Taxes',
            type: '📁 Folder',
            created: new Date('2021-04-03'),
            modified: new Date('2023-04-10'),
            Children: [
              {
                id: 20,
                name: '2022.pdf',
                type: '🗃️ File',
                size: 1024000,
                created: new Date('2023-04-10'),
                modified: new Date('2023-04-10')
              },
              {
                id: 21,
                name: '2021.pdf',
                type: '🗃️ File',
                size: 1048576,
                created: new Date('2022-04-05'),
                modified: new Date('2022-04-06')
              },
              {
                id: 22,
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
    treeColumnIndex: 2,
    allowSelection: true,
    selectionSettings: { persistSelection: true },
    toolbar: ['Search'],
    height: 400,
    pageSettings: { pageSize: 10 },
    enableHover: true,
    enableStickyHeader: true,
    columns: [
        { type: 'checkbox', width: 50 },
        { field: 'id', headerText: 'ID', visible: false, isPrimaryKey: true },
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
});
tree.appendTo('#TreeGrid');
