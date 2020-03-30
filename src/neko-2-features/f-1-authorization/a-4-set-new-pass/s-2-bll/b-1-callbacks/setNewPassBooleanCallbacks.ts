import {Dispatch} from "redux";
import {
    booleanClear,
    booleanError,
    booleanLoading,
    booleanSuccess
} from "../../../../f-3-common/c-1-boolean-reducer/booleanCallbacks";
import {SET_NEW_PASS_ACTION_NAMES} from "../b-2-redux/setNewPassActions";

export const setNewPassLoading = (dispatch: Dispatch, loading: boolean) => {
    booleanLoading(dispatch, SET_NEW_PASS_ACTION_NAMES, loading);
};
export const setNewPassError = (dispatch: Dispatch, error: string) => {
    booleanError(dispatch, SET_NEW_PASS_ACTION_NAMES, error);
};
export const setNewPassSuccess = (dispatch: Dispatch, success: boolean) => {
    booleanSuccess(dispatch, SET_NEW_PASS_ACTION_NAMES, success);
};
export const setNewPassClear = (dispatch: Dispatch) => {
    booleanClear(dispatch, SET_NEW_PASS_ACTION_NAMES);
};
