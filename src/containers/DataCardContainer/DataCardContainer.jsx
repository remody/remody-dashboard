import React from "react";
import { Query } from "react-apollo";

import { USER_SCHEMAS } from "../../graphql";
import DataCard from "../../components/DataCard/DataCard";

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
                    <DataCard key={item.id} {...item} />
                ));
            }}
        </Query>
    );
};
export default DataCardContainer;
