
export const GO_TO_STEP = 'GO_TO_STEP';
export const GO_NEXT = 'GO_NEXT';
export const GO_BACK = 'GO_BACK';
// route actions
const goToStep = (stepIndex) => ({ type: GO_TO_STEP, payload: stepIndex });
const goNext = (stepIndex) => ({ type: GO_NEXT, payload: stepIndex });
const goBack = (stepIndex) => ({ type: GO_BACK, payload: stepIndex });
// export all routes actions
export {
  goToStep,
  goNext,
  goBack,
};
