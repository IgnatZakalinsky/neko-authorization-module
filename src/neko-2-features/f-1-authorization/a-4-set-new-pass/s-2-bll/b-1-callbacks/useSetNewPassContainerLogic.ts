import {useDispatch} from "react-redux";
import {useBooleanSelector} from "../../../../f-3-common/c-1-boolean-reducer/useBooleanSelectors";
import {SET_NEW_PASS_ACTION_NAMES} from "../b-2-redux/setNewPassActions";
import {useSetNewPassLocalState} from "./useSetNewPassLocalState";
import {setNewPassCallback} from "./setNewPassCallBacks";

export const useSetNewPassContainerLogic = (token: string) => {
    // redux
    const [loading, error, success] = useBooleanSelector(SET_NEW_PASS_ACTION_NAMES);
    const dispatch = useDispatch();

    // local state
    const {
        password1, setPassword1Callback,
        password2, setPassword2Callback,

        redirect, setRedirect,
    } = useSetNewPassLocalState(dispatch);

    // callbacks
    const setNewPass = setNewPassCallback(dispatch, token, password1, password2);

    return {
        loading, error, success, dispatch,

        password1, setPassword1Callback,
        password2, setPassword2Callback,

        redirect, setRedirect,

        setNewPass,
    }
};
