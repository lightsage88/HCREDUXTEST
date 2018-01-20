import React from 'react';
import {shallow} from 'enzyme';

import {AuralStatus} from './aural-status';

describe('<AuralStatus />', ()=>{
	it('Renders w/o crashing', ()=>{
		let wrapper = shallow(<AuralStatus />);
		 console.log(wrapper);
		});
})