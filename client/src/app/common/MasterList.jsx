import React, { useEffect, useState } from 'react'
import { Backdrop, CircularProgress, Paper } from '@mui/material';
import TableGrid from './TableGrid';

const MasterList = ({columns, feature}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () => {
        try {
            const response = await feature.list();
            setData(response);
        } catch (error) {
            setData([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <Paper elevation={3} style={{ padding: "1.5em" }}>
            <Backdrop open={loading} style={{ zIndex: 9999 }}>
                <CircularProgress />
            </Backdrop>

            <TableGrid columns={columns} data={data} />
        </Paper>
    );
};

export default MasterList;