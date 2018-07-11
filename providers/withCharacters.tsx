import axios, { AxiosRequestConfig } from "axios";
import React from "react";

const source = axios.CancelToken.source();

const config: AxiosRequestConfig = {
    baseURL: "http://api.tekkenchicken.com/api/",
    cancelToken: source.token,
};

const client = axios.create(config);

const withCharacters = (WrappedComponent: React.Component) => (
    class extends React.Component {
        public state = {
            data: null,
            error: null,
        };

        public async componentDidMount() {
            await client.get("metadata")
                .then( ({ data }) => this.setState({ data }))
                .catch( (error) => this.setState({ error }));
        }

        public componentWillUnmount() {
            source.cancel();
        }

        public render() {
            return (<WrappedComponent {...this.state} {...this.props}/>);
        }
    }
);

export default withCharacters;
