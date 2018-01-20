import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from '../actions/actions';

describe(reducer, ()=>{
const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

const guesses1 = [6, 8, 88, 88];
const correctAnswer = 68;

	it('Should set the initial state when nothing is passed in', ()=>{
		const state = reducer(undefined, {type: '__UNKNOWN'});
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make your guess!');
		expect(state.auralStatus).toEqual('');
		expect(typeof(state.correctAnswer) === 'number').toEqual(true);
	});
	it('Should return the current state on an unknown action', () =>{
		let currentState = {};
		const state = reducer(currentState, {type: '__UNKNOWN'});
		expect(state).toBe(currentState);
	});

	describe('restartGame', ()=>{
		it('should reset the state', ()=>{
			let state, punkAssBlood = reducer(undefined, {type: '__UNKNOWN'});
			state = reducer(state, restartGame(88));
			expect(state === punkAssBlood).toEqual(false);
			expect(state.correctAnswer === 88).toEqual(true);
		});
	});

	describe('makeGuess', ()=>{
		it('should add guesses to the state', ()=>{
			let state = reducer(undefined, {type: '__UNKNOWN'});
			state = reducer(state, makeGuess(6));
			state = reducer(state, makeGuess(2));
			state = reducer(state, makeGuess(11));
			console.log(state);
			expect(state.guesses).toEqual([6, 2, 11]);
			expect(state.guesses.length).toEqual(3);
			// expect(state.feedback === 'Make your guess!').toEqual(false);
		});
		it('should change the feedback per guess', ()=>{
			let state = reducer(undefined, {type: '__UNKNOWN'});
			state = reducer(state, makeGuess(6));
			expect(state.feedback === 'Make your guess!').toEqual(false);
		});
		it('should have ice cold if difference is >=50', ()=>{
			let state = reducer(undefined, {type: '__UNKNOWN'});
			state = reducer(state, makeGuess(10));
			const difference = Math.abs(state.guesses[0] - state.correctAnswer);
			// console.log(state.correctAnswer);
			// console.log(state.guesses[0]);
			if (difference >= 50) {
				expect(state.feedback).toEqual("You're Ice Cold...");
				console.log(state.feedback);
			} else if (difference >= 30) {
				expect(state.feedback).toEqual("You're Cold...");
				console.log(state.feedback);
			} else if (difference >= 10) {
				expect(state.feedback).toEqual("You're Warm.");
				console.log(state.feedback);
	        } else if (difference >= 1) {
	        	expect(state.feedback).toEqual("You're Hot!");
				console.log(state.feedback);
	        } else {
	        	expect(state.feedback).toEqual('You got it!');
				console.log(state.feedback);
	        }


		});
	});

}); 