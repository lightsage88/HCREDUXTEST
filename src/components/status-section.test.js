import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', ()=>{
	it('Renders w/o crashing', ()=>{
		let wrapper = shallow(<StatusSection />);
	});

});