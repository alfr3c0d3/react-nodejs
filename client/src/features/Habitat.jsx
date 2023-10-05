import React from 'react'
import { habitats } from '../app/api/services';
import MasterList from '../app/common/MasterList';

const Habitat = () => {
    const columns = [
        { field: 'id', hide: true },
        {
            field: "name",
            headerName: "Name",
            editable: true,
            flex: 1
        },
        {
            field: "climate",
            headerName: "Climate",
            editable: true,
            flex: 1
        },
        {
            field: "temperature",
            headerName: "Temperature",
            type: "number",
            editable: true,
            headerAlign: 'left',
            align: "left",
            flex: 1
        }
    ];

    return (
        <MasterList columns={columns} feature={habitats}/>
    );
};

export default Habitat;