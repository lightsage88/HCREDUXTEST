import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', ()=>{
	it("renders w/o dying", ()=>{
		let wrapper = shallow(<Game />);
	});
	//had to look this one up...I guess I need to better understand
	//when to use shallow vs mount. I get that mount is for more
	//detailed testing, but I assumed that since Game is what would be
	//considered the more 'parent' component, that this would need to have
	//mount. Although, it doesn't actively call any dispatches itself.
	

});