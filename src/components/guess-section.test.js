import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', ()=>{
	it('Renders w/o crashing', ()=>{
		let wrapper = shallow(<GuessSection />);
	});

});