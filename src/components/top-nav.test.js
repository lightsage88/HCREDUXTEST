import React from 'react';
import {shallow, mount} from 'enzyme';
import reducer from '../reducers/reducer';
import {TopNav} from './top-nav';
import {restartGame, generateAuralUpdate} from '../actions/actions';

describe('<TopNav />', ()=>{

	it('Renders w/o crashing', ()=>{
		let wrapper = shallow(<TopNav />);
	});

	it('should call restartGame properly', ()=>{
		const dispatch = jest.fn();
		const wrapper = mount(<TopNav  dispatch={dispatch}/>);
		// const action = restartGame(number);
		wrapper.find('a.new').simulate('click');
		expect(dispatch).toHaveBeenCalled();
		const action = dispatch.mock.calls[0][0];
		let correctAnswerForThis = action.correctAnswer;
		console.log(correctAnswerForThis);
		//what is mock.calls, man? lets talk about it, please.
		expect(action.type).toEqual('RESTART_GAME');
		expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
		expect(action.correctAnswer).toEqual(correctAnswerForThis);
	});

	it('should call generateAuralUpdate properly',()=>{
		const dispatch = jest.fn();
		const wrapper = mount(<TopNav dispatch={dispatch}/>);
		wrapper.find('a.visuallyhidden').simulate('click');
		expect(dispatch).toHaveBeenCalled();
		const action = dispatch.mock.calls[0][0];
		expect(action.type).toEqual('GENERATE_AURAL_UPDATE');
	});


});