import Move from "./move";

export default interface Character {
    name: string;
    label: string;
    data: Move[];
}
