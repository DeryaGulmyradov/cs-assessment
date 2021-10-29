import { userState, userDataSelector, counterSelector } from './selectors';

const mockUserState = {
  userData: { firstName: 'Derya' },
  counter: 7,
};
const mockState = {
  user: mockUserState,
};

describe('selectors', () => {
  it('returns user state props', () => {
    expect(userState(mockState)).toEqual(mockUserState);
  });

  it('returns userData props', () => {
    expect(userDataSelector(mockState)).toEqual(mockUserState.userData);
  });

  it('returns counter props', () => {
    expect(counterSelector(mockState)).toEqual(mockUserState.counter);
  });
});
