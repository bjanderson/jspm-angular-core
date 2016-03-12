
describe('Main E2E Test', function() {

  it('should default to the home page', function() {
    browser.get('http://localhost:20080/');
    expect(browser.getTitle()).toEqual('Home | JSPM Angular Project');
  });

});
