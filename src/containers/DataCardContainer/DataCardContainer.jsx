import React from "react";
import { Query } from "react-apollo";

import { USER_SCHEMAS } from "../../graphql";

const DataCardContainer = () => {
    return (
        <Query query={USER_SCHEMAS}>
            {({ loading, error, data }) => {
                if (loading) {
                    return "Loading";
                }
                if (error) {
                    return "error";
                }
                return data.userSchemas.map(item => (
                    <div key={item.id}>
                        {item.name}
                        {item.rowCount}
                    </div>
                ));
            }}
        </Query>
    );
};
export default DataCardContainer;
