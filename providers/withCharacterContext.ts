import { withContext, compose } from "recompose";
import PropTypes from "prop-types";
import { Metadata } from "models";
import withCharacters from "./withCharacters";

export const CharacterPropTypes = {
    data: PropTypes.object,
};

export interface CharacterContext {
    data: Metadata[];
}

const context = withContext<CharacterContext, CharacterContext>(
    CharacterPropTypes,
    ({ data }) => ({
        data,
    }),
);

export default compose(
    withCharacters,
    context,
);
