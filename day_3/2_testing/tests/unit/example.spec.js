// individual standalone test
test("add 1 + 2 to equal 3", () => {
  expect(1 + 2).toEqual(3);
});

// 'it' is an alias of 'test'
it("add 1 + 2 to equal 3", () => {
  expect(1 + 2).toEqual(3);
});

// suites group common tests together
describe("All The Matchers!!", () => {
  // toEqual checks equivilence toBe checks reference
  test("object equality", () => {
    let a = { foo: 'bar' };
    let b = { foo: 'bar' };
  
    expect(a).toEqual(b);
    expect(a).not.toBe(b);  // this is how to negate a match
  });
  
  test("number equality", () => {
    expect(2).toBeGreaterThan(1);     // toGreaterThanOrEqual
    expect(2).toBeLessThan(3);  
    expect(2.05).toBeCloseTo(2, 1);   // super useful! second param not what you think!
  });
  
  test("array equality", () => {
    expect([1,2,3]).toContain(3);
    expect([1,2,5,3,4]).not.toEqual([1,2,3,4,5]);
    expect([1,3,2,5,4].sort()).toEqual([4,3,2,5,1].sort());
  });

  test("string equality", () => {
    let postcodeRegex = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/
    expect("BN2 3QE").toMatch(postcodeRegex);
    expect("  THIS is My StRinG ".trim().toLowerCase()).toEqual("this is my string");
  });
});

// setup and teardown
describe("beforeEach and afterEach", () => {
  beforeAll(() => {
    console.log("start");
  })

  beforeEach(() => {
    console.log("setup");
  });

  afterEach(() => {
    console.log("teardown");
  });

  afterAll(() => {
    console.log("finish")
  })

  test("1 + 1 = 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

// mock functions
test("mocking foreach", () => {
  let callback = jest.fn((i) => 42);
  [1,2,3].map(callback);

  expect(callback.mock.calls.length).toEqual(3);         // check total number of calls made
  expect(callback.mock.calls[0][0]).toBe(1);      // check the input to our mock function
  expect(callback.mock.results[2].value).toBe(42);  // check the return of our 3rd mock function call
});