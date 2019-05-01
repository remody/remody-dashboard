import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
    CSVExport,
    Search
} from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import styled from "styled-components";

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

const { ExportCSVButton } = CSVExport;
const { SearchBar: OriginSearchBar } = Search;

const options = {
    sizePerPageOptionRenderer
};

const defaultSorted = [
    {
        dataField: "id",
        order: "desc"
    }
];

const SearchBar = styled(OriginSearchBar)`
    position: relative;
    top: 2px;
`;

class UserTable extends React.Component {
    constructor(props) {
        super(props);
        this.modify = {};
        this.delete = {};
        this.create = {};
        console.log(props.nextId);
        this.nextId = props.nextId;
        this.state = {
            rows: props.rows
        };
    }
    render() {
        const { rows } = this.state;
        const { columns } = this.props;
        return (
            <ToolkitProvider
                keyField="id"
                data={rows}
                columns={columns}
                exportCSV
                search
            >
                {props => (
                    <div>
                        <div className="d-block d-md-flex justify-content-md-between">
                            <div>
                                <button
                                    className="btn btn-secondary mr-1"
                                    onClick={() => {
                                        const newRow = {};
                                        columns.map(({ dataField }) => {
                                            newRow[`${dataField}`] = "";
                                            return null;
                                        });
                                        this.nextId += 1;
                                        this.setState(({ rows }) => ({
                                            rows: [
                                                ...rows,
                                                {
                                                    ...newRow,
                                                    id: this.nextId
                                                }
                                            ]
                                        }));
                                        const newId = this.nextId;
                                        //Props로 관리
                                        this.create[`${newId}`] = newId;
                                    }}
                                >
                                    항목 추가
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        const sortArray = [
                                            ...this.node.selectionContext
                                                .selected
                                        ];
                                        sortArray.map(item => {
                                            this.delete[`${item}`] = item;
                                            return null;
                                        });
                                        this.setState(({ rows }) => ({
                                            rows: rows.filter(
                                                ({ id }) =>
                                                    sortArray.indexOf(id) < 0
                                            )
                                        }));
                                    }}
                                >
                                    선택항목 삭제
                                </button>
                            </div>
                            <div>
                                <SearchBar {...props.searchProps} />
                                <ExportCSVButton
                                    {...props.csvProps}
                                    className="btn btn-secondary ml-1"
                                >
                                    Export CSV!!
                                </ExportCSVButton>
                                <button
                                    onClick={() => {
                                        console.log(Object.values(this.create));
                                        console.log(Object.values(this.modify));
                                        console.log(Object.values(this.delete));
                                    }}
                                    className="btn btn-primary ml-2"
                                >
                                    저장
                                </button>
                            </div>
                        </div>
                        <BootstrapTable
                            {...props.baseProps}
                            keyField="id"
                            ref={n => (this.node = n)}
                            data={rows}
                            columns={columns}
                            cellEdit={cellEditFactory({
                                mode: "click",
                                blurToSave: true,
                                afterSaveCell: (
                                    oldValue,
                                    newValue,
                                    row,
                                    column
                                ) => {
                                    this.modify[`${row.id}`] = row;
                                }
                            })}
                            selectRow={{
                                mode: "checkbox",
                                clickToSelect: false
                            }}
                            pagination={paginationFactory(options)}
                            defaultSorted={defaultSorted}
                        />
                    </div>
                )}
            </ToolkitProvider>
        );
    }
}

export default UserTable;
