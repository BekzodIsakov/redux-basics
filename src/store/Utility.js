export const updateState = (oldState, updatedState) => {
  console.log(updatedState);
  return {
    ...oldState,
    ...updatedState,
  };
};
