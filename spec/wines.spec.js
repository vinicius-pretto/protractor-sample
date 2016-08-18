describe('wines', () => {
  beforeEach(() => {
    require('../index.js');
  });

  it('should insert a wine', () => {
    browser.get('/');

    function getText(name) {
      return element(by.binding(name)).getText()
    }

    element(by.model('wine.name')).sendKeys('Luigi Bosca');
    element(by.model('wine.variety')).sendKeys('Malbec');
    element(by.model('wine.country')).sendKeys('Argentina');
    element(by.model('wine.price')).sendKeys('60');

    element(by.id('btn-add-wine')).click();

    expect(getText('wine.name')).toEqual('Luigi Bosca');
    expect(getText('wine.variety')).toEqual('Malbec');
    expect(getText('wine.country')).toEqual('Argentina');
    expect(getText('wine.price')).toEqual('R$ 60');    
  });
});
  
  