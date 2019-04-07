import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "/Users/ijeonghun/Documents/Workspace/remody-dashboard/node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

const products = [
    {
        id: 1,
        name: "Product1",
        price: 120
    },
    {
        id: 3,
        name: "Product3",
        price: 123
    },
    {
        id: 4,
        name: "Product4",
        price: 124
    },
    {
        id: 5,
        name: "Product5",
        price: 125
    },
    {
        id: 6,
        name: "Product6",
        price: 126
    },
    {
        id: 7,
        name: "Product7",
        price: 127
    },
    {
        id: 8,
        name: "Product8",
        price: 128
    },
    {
        id: 9,
        name: "Product9",
        price: 129
    },
    {
        id: 10,
        name: "Product10",
        price: 130
    },
    {
        id: 11,
        name: "Product11",
        price: 131
    },
    {
        id: 12,
        name: "Product12",
        price: 132
    },
    {
        id: 13,
        name: "Product13",
        price: 133
    },
    {
        id: 14,
        name: "Product14",
        price: 144
    },
    {
        id: 2,
        name: "Product2",
        price: 80
    }
];

const UserTable = props => {
    const renderColumn = () => {
        return props.meta.map(({ dataField, columnName }) => (
            <TableHeaderColumn dataField={dataField}>
                {columnName}
            </TableHeaderColumn>
        ));
    };
    return (
        <BootstrapTable data={products} version="4" pagination>
            <TableHeaderColumn isKey dataField="id">
                Product ID
            </TableHeaderColumn>
            {renderColumn()}
        </BootstrapTable>
    );
};

export default UserTable;
