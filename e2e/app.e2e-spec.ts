import { browser, element, by, promise } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Tour of Heroez';
  let deferred = promise.defer();

  beforeEach(function () {
    browser.get('');
  });

  function headerMatchesExpected(element: any) {
    element.getText().then(
      function success(text: any) {
        if (text === expectedMsg) {
          deferred.fulfill(text);
        } else {
          deferred.reject('H1 element did not contain the expected text');
        }
      },
      function error(reason: any) {
        deferred.reject(reason);
      }
    );
  }

  let headingElement = element(by.css('h1'));

});
