import MainCtrl from './main.controller';

describe('Main Controller Test', function () {
  let ctrl;
  let scope = {
    $on: function (eventName, callback) {
      scope.eventName = eventName;
      scope.eventCallback = callback;
    }
  };

  beforeEach(function () {
    ctrl = new MainCtrl(scope);
  });

  describe('testing main controller scope properties and actions', function () {

    it('should have pageTitle = JSPM Angular Project', function () {
      expect(scope.pageTitle).toEqual('JSPM Angular Project');
    });

    it('should have $stateChangeSuccess event listener', function () {
      expect(scope.eventName).toEqual('$stateChangeSuccess');
    });

    it('should update the pageTitle', function () {
      let toState = {
        data: {
          pageTitle: 'Testing'
        }
      };

      scope.eventCallback(null, toState);

      expect(scope.pageTitle).toEqual('Testing | JSPM Angular Project');
    });

    it('should keep the default pageTitle', function () {
      let toState = {
        data: {
          pageTitle: undefined
        }
      };

      scope.eventCallback(null, toState);

      expect(scope.pageTitle).toEqual('JSPM Angular Project');
    });

    it('should keep the default pageTitle', function () {
      let toState = {
        data: undefined
      };

      scope.eventCallback(null, toState);

      expect(scope.pageTitle).toEqual('JSPM Angular Project');
    });

    it('should keep the default pageTitle', function () {
      let toState = {};

      scope.eventCallback(null, toState);

      expect(scope.pageTitle).toEqual('JSPM Angular Project');
    });

  });

});
