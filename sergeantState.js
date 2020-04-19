export const sergeantState = (function () {
    let state = false;
    function change(st) {
      state = !state;
    }
    return {
      toggle: function () {
        change(true);
      },
      get: function () {
        return state;
      },
    };
  })();