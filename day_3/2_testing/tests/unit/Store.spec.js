import { mutations } from '../../src/store.js';

describe("store", () => {
  test("ADD_USER", () => {
    let mockState = {
      users: []
    };
    let oli = { id: 0, name: 'Oli', age: 36 };
    mutations['ADD_USER'](mockState, oli);
    expect(mockState.users).toContain(oli);
  })
})