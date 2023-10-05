import React from 'react'
import { monsters } from '../app/api/services';
import MasterList from '../app/common/MasterList';

const Monster = () => {
    const columns = [
        { field: 'id', hide: true },
        {
            field: "name",
            headerName: "Name",
            editable: true,
            flex: 1
        },
        {
            field: "personality",
            headerName: "Personality",
            editable: true,
            headerAlign: 'left',
            align: "left",
            flex: 1
        }
    ];

    return (
        <MasterList columns={columns} feature={monsters}/>
    );
};

export default Monster;