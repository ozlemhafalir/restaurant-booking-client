import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'date', headerName: 'Date', width: 200},
    {field: 'guest', headerName: 'Guest', width: 200},
    {field: 'note', headerName: 'Note', width: 200},
    {field: 'createdOn', headerName: 'Created On', width: 200},
    {field: 'action', headerName: 'Action', width: 100},
];

const rows = [
    {id: 1, name: 'Snow', date: '2024/01/01', guest: 3, note: "", createdOn: '2024/01/01'},
    {id: 2, name: 'Lannister', date: '2024/01/01', guest: 3, note: "", createdOn: '2024/01/01'},
    {id: 3, name: 'Lannister', date: '2024/01/01', guest: 3, note: "", createdOn: '2024/01/01'},
    {id: 4, name: 'Stark', date: '2024/01/01', guest: 3, note: "", createdOn: '2024/01/01'},
    {id: 5, name: 'Targaryen', date: '2024/01/01', guest: 3, note: "", createdOn: '2024/01/01'},
    {id: 6, name: 'Melisandre', date: '2024/01/01', guest: 3, note: "", createdOn: '2024/01/01'},
    {id: 7, name: 'Clifford', date: '2024/01/01', guest: 3, note: "", createdOn: '2024/01/01'},
    {id: 8, name: 'Frances', date: '2024/01/01', guest: 3, note: "", createdOn: '2024/01/01'},
    {id: 9, name: 'Roxie', date: '2024/01/01', guest: 3, note: "", createdOn: '2024/01/01'},
];

export default function ReservationsList() {
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 5},
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}
