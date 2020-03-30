import {ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../../neko-1-main/m-2-bll/store";
import {IBooleanActions} from "../../../../f-3-common/c-1-boolean-reducer/booleanActions";
import {passwordValidator} from "../../../../f-2-helpers/h-1-authorization/passwordValidator";
import {setNewPassError} from "./setNewPassBooleanCallbacks";
import {setNewPass} from "../setNewPassThunk";

type ExtraArgument = {};

export const setNewPassCallback = (
    dispatch: ThunkDispatch<IAppStore, ExtraArgument, IBooleanActions>,
    token: string,
    password1: string,
    password2: string,
) => () => {
    if (!token) {
        setNewPassError(dispatch, 'No resetPasswordToken!');

    } else if (password1 !== password2) {
        setNewPassError(dispatch, 'No resetPasswordToken!');

    } else if (!passwordValidator(password1)) {
        setNewPassError(dispatch, 'Password not valid! must be more than 7 characters...');

    } else {
        dispatch(setNewPass(password1, token));
    }
};
