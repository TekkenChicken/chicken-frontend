import { withContext, compose } from "recompose";
import PropTypes from "prop-types";
import { Metadata, Map } from "models";
import withCharacters from "./withCharacters";
import whileLoading from "./whileLoading";
import { RouteComponentProps } from "@reach/router";

export const CharacterPropTypes = {
    data: PropTypes.object,
};

export interface CharacterContext {
    data: Map<Metadata>;
}

const context = withContext<CharacterContext, CharacterContext>(
    CharacterPropTypes,
    ({ data }) => ({
        data,
    }),
);

export default compose<{}, RouteComponentProps>(
    withCharacters,
    whileLoading,
    context,
);
