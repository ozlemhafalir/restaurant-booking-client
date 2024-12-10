import React, {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {Container, Link} from '@mui/material';
import api from "../../api.jsx";
import AccountTabs from "../../components/AccountTabs.jsx";
import {DataGrid} from "@mui/x-data-grid";

const MyRestaurants = ({ username }) => {
    const [page, setPage] = useState(1)

    const { isPending, error, data, refetch } = useQuery({
        queryKey: [`owner-restaurants-${username}`],
        queryFn: () =>
            api.get(`/api/owner-restaurant/?page=${page}`).then((res) => res.data),
    });

    useEffect(() => {
        refetch()
    }, [page])
    const handlePaginationChange = (model) => {
        setPage(model.page + 1)
    }

    const columns = [
        {field: 'name', headerName: 'Name', width: 200},
        {field: 'city_name', headerName: 'City', width: 200},
        {
            field: "action",
            headerName: "Action",
            sortable: false,
            renderCell: (params) => {
                return (
                    <Link href={`/account/restaurant/${params.row.id}/`}>
                        Manage
                    </Link>
                )
            }
        },
    ];

    if (isPending) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return data && (
        <Container sx={{mt: 5}}>
            <AccountTabs value={2}/>
            <div style={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={data.results}
                    columns={columns}
                    loading={isPending}
                    initialState={{
                        pagination: {
                            paginationModel: {page: page - 1, pageSize: 8},
                            rowCount: data.count
                        },
                    }}
                    onPaginationModelChange={handlePaginationChange}
                    paginationMode={"server"}
                />
            </div>
        </Container>
    );
};

export default MyRestaurants;
