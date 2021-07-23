import React from 'react';
import profileReducer, {
   addPostActionCreator,
   deletePostActionCreator,
} from './profile-reducer';

let state = {
	postsData: [
		{ post: 'It is my first post', id: '1' },
		{ post: 'Hi', id: '2' },
		{ post: 'Yo', id: '3' },
		{ post: 'Good!', id: '4' },
		{ post: 'No', id: '5' },
	]
};

it('length of postsData should be encremented', () => {
   // 1. data test
   let action = addPostActionCreator('write test');

	// 2. action
	let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(6);
});

it('message of new postsData should be correct', () => {
   // 1. data test
   let action = addPostActionCreator('write test');

	// 2. action
	let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData[5].post).toBe('write test');
});

it('after deleting length of postsData should be decrement', () => {
   // 1. data test
   let action = deletePostActionCreator(1);

	// 2. action
	let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.postsData.length).toBe(5);
});

it('after deleting length of postsData should be decrement if id is incorrect', () => {
   // 1. data test
   let action = deletePostActionCreator(1000);

   // 2. action
   let newState = profileReducer(state, action);

   // 3. expectation
   //   expect(newState.postsData.length).toBe(5);
});
