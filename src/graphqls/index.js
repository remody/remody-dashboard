import gql from "graphql-tag";

export const ALL_USER = gql`
    query {
        users {
            id
            name
            email
        }
    }
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(data: { email: $email, password: $password }) {
            token
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($name: String!, $email: String!, $password: String!) {
        createUser(data: { name: $name, email: $email, password: $password }) {
            token
        }
    }
`;

export const ME = gql`
    query me {
        me {
            name
            email
        }
    }
`;

export const CREATE_AUTH_ACCESS_CODE = gql`
    mutation createAuthAccessCode($email: String!) {
        createAuthAccessCode(email: $email)
    }
`;

export const CHANGE_USER_PASSWORD = gql`
    mutation changeUserPassword(
        $email: String!
        $accessCode: String!
        $password: String!
    ) {
        changeUserPassword(
            data: {
                accessCode: $accessCode
                email: $email
                password: $password
            }
        ) {
            name
            email
        }
    }
`;

export const USER_SCHEMAS = gql`
    query {
        userSchemas {
            id
            name
            rowCount
            user {
                name
            }
            created
            columns {
                name
            }
        }
    }
`;

export const USER_SCHEMA_INFO = gql`
    query UserSchemaInfo($schemaId: String!) {
        UserSchemaInfo(schemaId: $schemaId) {
            fields
            rows
            nextId
        }
    }
`;

export const UPDATE_USER_SCHEMA_INFO = gql`
    mutation UpdateUserSchemaInfo(
        $schemaId: String!
        $updateRows: [Object!]!
        $deleteRows: [Int!]!
        $createRows: [Int!]!
    ) {
        UpdateUserSchemaInfo(
            data: {
                schemaId: $schemaId
                updateRows: $updateRows
                deleteRows: $deleteRows
                createRows: $createRows
            }
        ) {
            fields
            rows
            nextId
        }
    }
`;

export const PAPERS = gql`
    query papers($first: Int, $after: String, $queryString: String) {
        papers(first: $first, after: $after, queryString: $queryString) {
            id
            owner {
                name
            }
            title
            author
            belong
            publishedyear
            url
        }
    }
`;

export const UPLOAD_FOR_SEARCH = gql`
    mutation uploadForSearch(
        $title: String!
        $author: String!
        $belong: String!
        $publishedyear: Int!
        $file: Upload!
    ) {
        uploadForSearch(
            data: {
                title: $title
                author: $author
                belong: $belong
                publishedyear: $publishedyear
                file: $file
            }
        )
    }
`;
export const UPLOAD_FILE = gql`
    mutation singleUpload($file: Upload!, $schemaId: ID!) {
        singleUpload(file: $file, schemaId: $schemaId)
    }
`;

export const CREATE_TABLE = gql`
    mutation createTable($name: String!, $rows: [Row!]!) {
        createTable(data: { name: $name, rows: $rows }) {
            id
            name
            rowCount
            columns {
                name
                type
                length
                id
            }
        }
    }
`;
