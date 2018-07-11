import { getContext } from "recompose";
import { CharacterContext, CharacterPropTypes } from "./withCharacterContext";

export default getContext<CharacterContext>(CharacterPropTypes);
