import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions/actions';

describe('<GuessForm />', ()=>{
	it('Renders w/o crashing', ()=>{
		let wrapper = shallow(<GuessForm />);
	});
	it('dispatches makeGuess from onSubmit', ()=>{
		const dispatch = jest.fn();
		const wrapper = mount(<GuessForm dispatch={dispatch} />);
		let value = parseInt(89, 10);
		wrapper.find('input[type="number"]').instance().value = Number(value);
		wrapper.simulate('submit');
		expect(dispatch).toHaveBeenCalledWith(makeGuess(value.toString()));
		//looked up answer for this one, and still got errors, however, I realized
		//that line 14 of guess-form.js has something that translates the value
		//into a string. So I just altered this to have the test expect the dispatch
		//to have been called with a value that had been converted to a string.
	});  

});