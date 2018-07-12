import axios, { AxiosRequestConfig } from "axios";
import React from "react";

const source = axios.CancelToken.source();

const config: AxiosRequestConfig = {
    baseURL: "http://api.tekkenchicken.com/api/framedata",
    cancelToken: source.token,
};

const client = axios.create(config);

const withMoves = (WrappedComponent: React.ComponentType) => (
    class extends React.Component {
        public state = {
            data: null,
            error: null,
        };

        public async componentDidMount() {
            await client.get(label)
                .then( (response) => this.setState({ data: response.data }))
                .catch( (e) => this.setState({ error: e }));
        }

        public componentWillUnmount() {
            source.cancel();
        }

        public render() {
            return (<WrappedComponent {...this.state} {...this.props}/>);
        }
    }
);

export default withMoves;
