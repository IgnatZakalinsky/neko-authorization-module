export const SET_NEW_PASS_LOADING = 'SET_NEW_PASS/LOADING';
export const SET_NEW_PASS_ERROR = 'SET_NEW_PASS/ERROR';
export const SET_NEW_PASS_SUCCESS = 'SET_NEW_PASS/SUCCESS';

export const SET_NEW_PASS_ACTION_NAMES = [SET_NEW_PASS_LOADING, SET_NEW_PASS_ERROR, SET_NEW_PASS_SUCCESS];

export const SET_NEW_PASS_SOME = 'SET_NEW_PASS/SOME';

interface ISetNewPassSome { // blank
    type: typeof SET_NEW_PASS_SOME;

}

export type ISetNewPassActions = ISetNewPassSome;

export const setNewPassSome = (): ISetNewPassSome => ({ // blank
    type: SET_NEW_PASS_SOME,

});
