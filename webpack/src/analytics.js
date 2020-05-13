import * as $ from "jquery";

const createAnalytics = () => {
  let counter = 0;
  let destroyed = false;

  console.log("text");

  const listener = () => counter++;

  $(document).on("click", listener);

  return {
    destroy() {
      $(document).off("click", listener);
      destroyed = true;
    },

    getClicks() {
      if (!destroyed) {
        return `Analytics is destroyed. Total clicks = ${counter}`;
      }

      return counter;
    },
  };
};

window.analytics = createAnalytics();
