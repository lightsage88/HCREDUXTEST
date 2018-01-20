import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', ()=>{
	it('Renders w/o crashing', ()=>{
		let wrapper = shallow(<GuessCount />);
	});

});