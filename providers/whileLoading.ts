import { branch, renderComponent } from "recompose";
import { CharacterContext } from "./withCharacterContext";
import { Loader } from "components";

const whileLoading = (WrappedComponent: React.ComponentType) => branch(
    (props: CharacterContext) => props.data === null,
    renderComponent(Loader),
)(WrappedComponent);

export default whileLoading;
