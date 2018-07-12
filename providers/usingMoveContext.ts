import { getContext } from "recompose";
import { MoveContext, MovePropTypes } from "./withMoveContext";

export default getContext<MoveContext>(MovePropTypes);
