import StudentReducer from '../reducers/student_reducer';

describe('Reducers', () => {
  describe('StudentReducer', () => {
    it('exports an function', () => {
      expect(typeof StudentReducer).toBe('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(StudentReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState'};
      const newState = StudentReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });
  });
});
