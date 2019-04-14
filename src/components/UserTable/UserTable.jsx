import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const sizePerPageOptionRenderer = ({ text, page, onSizePerPageChange }) => (
    <li key={text} role="presentation" className="dropdown-item">
        <div
            tabIndex="-1"
            role="menuitem"
            data-page={page}
            onMouseDown={e => {
                e.preventDefault();
                onSizePerPageChange(page);
            }}
            style={{}}
        >
            {text}
        </div>
    </li>
);

const options = {
    sizePerPageOptionRenderer
};

const columns = [
    {
        dataField: "id",
        text: "Product ID",
        sort: true
    },
    {
        dataField: "name",
        text: "Product Name",
        sort: true
    },
    {
        dataField: "price",
        text: "Product Price",
        sort: true
    }
];

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

const defaultSorted = [
    {
        dataField: "id",
        order: "desc"
    }
];

const UserTable = props => {
    const [row, handleRow] = useState(products);
    return (
        <>
            <button
                onClick={() => {
                    const newRow = {};
                    columns.map(({ dataField }) => {
                        newRow[`${dataField}`] = "";
                        return null;
                    });
                    handleRow([
                        ...row,
                        {
                            ...newRow,
                            id: row.length + 1
                        }
                    ]);
                }}
            >
                추가
            </button>
            <BootstrapTable
                keyField="id"
                data={row}
                columns={columns}
                cellEdit={cellEditFactory({
                    mode: "click",
                    blurToSave: true,
                    afterSaveCell: (oldValue, newValue, row, column) => {
                        console.log(row);
                        //TODO: old value와 newvalue의 차이를 확인하여 차이가 없으면 엔드
                        //아니면 이때 뮤테이션을 보냄
                    }
                })}
                pagination={paginationFactory(options)}
                defaultSorted={defaultSorted}
            />
        </>
    );
};

export default UserTable;
