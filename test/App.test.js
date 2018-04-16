describe('App tests', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('Should initially have set states of a toggle, true; an undefined city, and error of false', () => {
    expect(renderedApp.state()).toEqual(
      {
        currWeatherObj: {},
        hourArray: [],
        dayArray: []
      });
  });

  it('App should have a default state of key and it should be default value', ()=>{

    const expectDefaultState = {
      currWeatherObj: {},
      hourArray: [],
      dayArray: []
    };

    expect(renderedApp.state()).toEqual(expectDefaultState);
  });
});