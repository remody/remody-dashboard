import React from "react";
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

const defaultSorted = [
    {
        dataField: "id",
        order: "desc"
    }
];

class UserTable extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            rows: props.rows
        };
    }
    render() {
        const { rows } = this.state;
        const { columns } = this.props;
        return (
            <>
                <button
                    onClick={() => {
                        const newRow = {};
                        columns.map(({ dataField }) => {
                            newRow[`${dataField}`] = "";
                            return null;
                        });
                        this.setState(({ rows }) => ({
                            rows: [
                                ...rows,
                                {
                                    ...newRow,
                                    id: rows.length + 1
                                    //TODO: 가장 큰 값을 주고 이를 Props로 관리
                                }
                            ]
                        }));
                    }}
                >
                    추가
                </button>
                <button
                    onClick={() => {
                        const sortArray = [
                            ...this.node.selectionContext.selected
                        ];
                        this.setState(({ rows }) => ({
                            rows: rows.filter(
                                ({ id }) => sortArray.indexOf(id) < 0
                            )
                        }));
                    }}
                >
                    선택항목 삭제
                </button>
                <BootstrapTable
                    keyField="id"
                    ref={n => (this.node = n)}
                    data={rows}
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
                    selectRow={{ mode: "checkbox", clickToSelect: false }}
                    pagination={paginationFactory(options)}
                    defaultSorted={defaultSorted}
                />
            </>
        );
    }
}

export default UserTable;
