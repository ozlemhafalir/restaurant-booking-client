import * as React from 'react';
import {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import api from "../api.jsx";
import Button from "@mui/material/Button";
import {Menu, MenuItem} from "@mui/material"; // Import axios


export default function ReservationsList() {
    const params = useParams();
    const [page, setPage] = useState(1)
    const {isPending, error, data, refetch} = useQuery({
        queryKey: [`owner-restaurant-reservations-${params['id']}`],
        queryFn: () =>
            api.get(`/api/owner-restaurant/${params['id']}/reservation/?page=${page}`).then((res) =>
                res.data,
            ),
    });
    const columns = [
        {field: 'username', headerName: 'Name', width: 200},
        {field: 'date', headerName: 'Date', width: 200},
        {field: 'guests', headerName: 'Guest', width: 100},
        {field: 'note', headerName: 'Note', width: 200},
        {field: 'created_on', headerName: 'Created On', width: 200},
        {
            field: "action",
            headerName: "Action",
            sortable: false,
            renderCell: (params) => {
                const [anchorEl, setAnchorEl] = React.useState(null);
                const open = Boolean(anchorEl);
                const handleClick = (event) => {
                    setAnchorEl(event.currentTarget);
                };
                const handleClose = async () => {
                    setAnchorEl(null);
                };
                const patchStatus = async (status) => {
                    await api.patch(`/api/owner-restaurant/${params.row.restaurant.id}/reservation/${params.row.id}/`, {
                        status: status
                    }).then((res) => {
                        refetch();
                    });
                    handleClose()
                }
                const handleCancel = async () => patchStatus('cancelled');
                const handleApprove = async () => patchStatus('approved');

                return (
                    <>
                        <Button
                            id="reservation-action-button"
                            aria-controls={open ? 'reservation-action-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            {params.row.status}
                        </Button>
                        {params.row.status != 'cancelled' && (
                            <Menu
                                id="reservation-action-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'reservation-action-button',
                                }}
                            >
                                {params.row.status == 'pending' && (
                                    <MenuItem onClick={handleApprove}>Approve</MenuItem>
                                )}
                                <MenuItem onClick={handleCancel}>Cancel</MenuItem>
                            </Menu>
                        )}
                    </>)
            }
        },
    ];
    useEffect(() => {
        refetch()
    }, [page])
    const handlePaginationChange = (model) => {
        setPage(model.page + 1)
    }
    return data && (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={data.results}
                columns={columns}
                loading={isPending}
                initialState={{
                    pagination: {
                        paginationModel: {page: page - 1, pageSize: 10},
                        rowCount: data.count
                    },
                }}
                onPaginationModelChange={handlePaginationChange}
                paginationMode={"server"}
            />
        </div>
    );
}
