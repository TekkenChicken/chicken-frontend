import { withContext, compose } from "recompose";
import PropTypes from "prop-types";
import { Move } from "models";
import withMoves from "./withMoves";
import whileLoading from "./whileLoading";
import { RouteComponentProps } from "@reach/router";

export const MovePropTypes = {
    data: PropTypes.object,
};

export interface MoveContext {
    data: Move[];
    label: string;
}

const context = withContext<MoveContext, MoveContext>(
    MovePropTypes,
    ({ data }) => ({
        data,
    }),
);

export default compose<{}, RouteComponentProps>(
    withMoves,
    whileLoading,
    context,
);
