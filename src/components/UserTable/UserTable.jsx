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
import { Mutation } from "react-apollo";
import ReactLoading from "react-loading";
import Theme from "Theme";

import { UPDATE_USER_SCHEMA_INFO } from "graphqls";

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
                            <div className="mb-2 mb-md-0">
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
                                    className="btn btn-danger mr-1"
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
                                <Mutation
                                    mutation={UPDATE_USER_SCHEMA_INFO}
                                    onCompleted={data => {
                                        this.setState({
                                            rows: data.UpdateUserSchemaInfo.rows
                                        });
                                    }}
                                >
                                    {(
                                        updateUserSchemaInfo,
                                        { loading, error }
                                    ) => {
                                        if (error) return "plz reload";
                                        return (
                                            <button
                                                onClick={() => {
                                                    updateUserSchemaInfo({
                                                        variables: {
                                                            schemaId: this.props
                                                                .schemaId,
                                                            updateRows: Object.values(
                                                                this.modify
                                                            ),
                                                            deleteRows: Object.values(
                                                                this.delete
                                                            ),
                                                            createRows: Object.values(
                                                                this.create
                                                            )
                                                        }
                                                    });
                                                    this.modify = {};
                                                    this.delete = {};
                                                    this.create = {};
                                                }}
                                                className="btn btn-primary"
                                            >
                                                {loading ? (
                                                    <ReactLoading
                                                        height="23px"
                                                        width="20px"
                                                        type="spin"
                                                        color={
                                                            Theme.primaryFontColor
                                                        }
                                                    />
                                                ) : error ? (
                                                    "reload"
                                                ) : (
                                                    "저장"
                                                )}
                                            </button>
                                        );
                                    }}
                                </Mutation>
                            </div>
                            <div className="mb-2 mb-md-0">
                                <SearchBar {...props.searchProps} />
                                <ExportCSVButton
                                    {...props.csvProps}
                                    className="btn btn-secondary ml-1"
                                >
                                    Export CSV!!
                                </ExportCSVButton>
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
