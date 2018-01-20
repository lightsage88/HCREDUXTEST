import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', ()=>{
	it('Renders w/o crashing', ()=>{
		let wrapper = shallow(<Header />);
	});

});