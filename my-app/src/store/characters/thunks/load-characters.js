import { getPage } from "../../../hooks/http/useHttp";
import { selectorCharactersIds } from "../selector/selectors";
import {
  startLoading,
  failLoading,
  successLoading,
} from "../slice/charactersSlice";

export const loadCharacters = (numberPage) => {
  return (dispatch, getState) => {
    // if (selectorCharactersIds(getState()).length > 0) {
    //   return;
    // }

    dispatch(startLoading());

    try {
      getPage(numberPage).then((data) => {
        dispatch(successLoading(data));
      });
    } catch {
      dispatch(failLoading());
    }
  };
};
