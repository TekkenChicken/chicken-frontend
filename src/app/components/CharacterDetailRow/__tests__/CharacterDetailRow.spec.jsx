import React from "react";
import { mount } from "enzyme";
import * as renderer from "react-test-renderer";

import stubFrameData from '../../../fixtures/framedata.json';
import CharacterDetailRow from "../";

describe("CharacterDetailRow", () => {
    it("should render as expected", () => {
        //select a character from the stub data
        const character = stubFrameData["king"];
        const data = character.data[2];
        const component = renderer.create(<CharacterDetailRow data={data}/>).toJSON();
        expect(component).toMatchSnapshot();
    })

    it("should allow editing onClick", () => {
        //select a character from the stub data
        const character = stubFrameData["king"];
        const data = character.data[2];
        const component = mount(<CharacterDetailRow data={data}/>);

        component.simulate('click');
        const control = component.find('.control input');
        expect(control.exists()).toBe(true);
    })
});
