import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />', ()=>{
	it('Renders w/o crashing', ()=>{
		let wrapper = shallow(<Feedback />);
	});

});