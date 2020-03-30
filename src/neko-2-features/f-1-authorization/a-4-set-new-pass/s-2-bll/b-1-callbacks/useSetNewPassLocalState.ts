import {useState} from "react";
import {Dispatch} from "redux";
import {useBooleanSelector} from "../../../../f-3-common/c-1-boolean-reducer/useBooleanSelectors";
import {SET_NEW_PASS_ERROR} from "../b-2-redux/setNewPassActions";
import {setNewPassClear} from "./setNewPassBooleanCallbacks";

export const useSetNewPassLocalState = (dispatch: Dispatch) => {
    const [password1, setPassword1] = useState('test password nya');
    const [password2, setPassword2] = useState('test password nya');

    const [redirect, setRedirect] = useState(false);

    const [error] = useBooleanSelector([SET_NEW_PASS_ERROR]);

    const setPassword1Callback = (passwordC: string) => {
        setPassword1(passwordC);
        error.data.message && setNewPassClear(dispatch);
    };
    const setPassword2Callback = (passwordC: string) => {
        setPassword2(passwordC);
        error.data.message && setNewPassClear(dispatch);
    };

    return {
        password1, setPassword1Callback,
        password2, setPassword2Callback,

        redirect, setRedirect,
    }
};
