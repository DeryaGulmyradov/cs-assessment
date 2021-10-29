import { userReducer, updateUserData, updateCounter } from './slice';

describe('user reducer', () => {
  const initialState = {
    userData: {
      firstName: 'John',
      lastName: 'Harris',
      hourlyRate: '$55',
    },
    counter: 12,
  };
  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle updated counter', () => {
    const updatedState = userReducer(initialState, updateCounter(1000));
    expect(updatedState.counter).toEqual(1000);
  });

  it('should handle updated user data', () => {
    const actual = userReducer(
      initialState,
      updateUserData({
        firstName: 'Ann',
        lastName: 'Taylor',
        hourlyRate: '$75',
      }),
    );
    expect(actual.userData).toEqual({
      firstName: 'Ann',
      lastName: 'Taylor',
      hourlyRate: '$75',
    });
  });

  //   it('should handle decrement', () => {
  //     const actual = userReducer(initialState, updateCounter());
  //     expect(actual.value).toEqual(2);
  //   });
});
