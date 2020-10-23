import {timer, initialState} from './Timer';


describe("Timer reducer", () => {
    it("increase timer", () => {
      expect(timer.reducer(initialState, timer.actions.increaseTimer())).toEqual({ seconds: initialState.seconds + 60 });
    });
    it("decrease timer", () => {
      expect(timer.reducer(initialState, timer.actions.decreaseTimer())).toEqual({ seconds: initialState.seconds - 60 });
    });
    it("update timer", () => {
      expect(timer.reducer(initialState, timer.actions.updateTimer())).toEqual({ seconds: initialState.seconds - 1 });
    });
  });
