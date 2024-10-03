import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import api from "../api.jsx";  // Import axios

const columns = [
    { field: 'username', headerName: 'Name', width: 200 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'guests', headerName: 'Guest', width: 200 },
    { field: 'note', headerName: 'Note', width: 200 },
    { field: 'created_on', headerName: 'Created On', width: 200 },
    { field: 'action', headerName: 'Action', width: 100 },
];

export default function ReservationsList() {
    const params = useParams();
    const {isPending, error, data} = useQuery({
        queryKey: [`owner-restaurant-reservations-${params['id']}`],
        queryFn: () =>
            api.get(`/api/owner-restaurant/${params['id']}/reservation/`).then((res) =>
                res.data,
            ),
    })
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data?.results}
                columns={columns}
                loading={isPending}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}
