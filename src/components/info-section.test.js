import React from 'react';
import {shallow,mount} from 'enzyme';

import InfoSection from './info-section';

describe('<InfoSection />', ()=>{
	it('Renders w/o crashing', ()=>{
		let wrapper = mount(<InfoSection />);
	});

});