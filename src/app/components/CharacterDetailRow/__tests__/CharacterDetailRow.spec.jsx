import React from "react";
import { mount } from "enzyme";
import * as renderer from "react-test-renderer";

import stubFrameData from '../../../fixtures/framedata.json';
import CharacterDetailRow from "../";

describe("CharacterDetailRow", () => {
    //select a character from the stub data
    const character = stubFrameData["king"];
    const data = character.data[2];

    it("should render as expected", () => {
        const component = renderer.create(<CharacterDetailRow data={data}/>).toJSON();
        expect(component).toMatchSnapshot();
    })

    it("should allow editing onClick", () => {
        const component = mount(<CharacterDetailRow data={data}/>);
        component.simulate('click');
        const control = component.find('.control input');
        expect(control.exists()).toBe(true);
    });

    it("should show a cancel button upon click", () => {
        const component = mount(<CharacterDetailRow data={data}/>);
        component.simulate('click');
        const button = component.find('.control .cancel');
        expect(button.exists()).toBe(true);
    });
});
