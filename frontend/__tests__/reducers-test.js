import StudentReducer from '../reducers/student_reducer';

describe('Reducers', () => {
  describe('StudentReducer', () => {
    it('exports an function', () => {
      expect(typeof StudentReducer).toBe('function');
    });
  });
});
