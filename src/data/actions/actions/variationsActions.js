export const fetchVariations = () => dispatch => {
  dispatch({ type: FETCH_VARIATIONS_LOADING });
  return getVariations()
    .then(variations => dispatch({
      type: FETCH_VARIATIONS,
      payload: variations
    }));
};
