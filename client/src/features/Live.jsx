import React from 'react'
import { lives } from '../app/api/services';
import MasterList from '../app/common/MasterList';

const Live = () => {
    const columns = [
        { field: 'id', hide: true },
        {
            field: "monster",
            headerName: "Monster",
            editable: true,
            flex: 1
        },
        {
            field: "habitat",
            headerName: "Habitat",
            editable: true,
            flex: 1
        }
    ];

    return (
        <MasterList columns={columns} feature={lives}/>
    );
};

export default Live;