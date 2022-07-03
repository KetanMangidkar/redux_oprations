export const appAction = {
  INCREAMENT_COUNT: "INCREAMENT_COUNT",
  DECREAMENT_COUNT: "DECREAMENT_COUNT",
};

export const countAction = (count) => {
  return {
    type: appAction.INCREAMENT_COUNT,
    payload: count,
  };
};
