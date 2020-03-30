import React from 'react';
import SetNewPass from "./SetNewPass";
import {useParams, Redirect} from "react-router-dom";
import {useSetNewPassContainerLogic} from "../s-2-bll/b-1-callbacks/useSetNewPassContainerLogic";
import {setNewPassClear} from "../s-2-bll/b-1-callbacks/setNewPassBooleanCallbacks";
import {SIGN_IN_PATH} from "../../../../neko-1-main/m-1-ui/Routes";

const SetNewPassContainer: React.FC = () => {
    const {token} = useParams();
    const {
        loading, error, success, dispatch,

        password1, setPassword1Callback,
        password2, setPassword2Callback,

        redirect, setRedirect,

        setNewPass,
    } = useSetNewPassContainerLogic(token || '');

    // redirect logic
    if (success.value) setTimeout(() => setRedirect(true), 500);
    if (redirect) {
        setTimeout(() => setNewPassClear(dispatch), 500);
        return <Redirect to={SIGN_IN_PATH}/>;
    }

    console.log('render SetNewPassContainer');
    return (
        <SetNewPass
            loading={loading.value}
            error={error.data.message || ''}
            success={success.value}

            password1={password1} setPassword1Callback={setPassword1Callback}
            password2={password2} setPassword2Callback={setPassword2Callback}

            setNewPass={setNewPass}

        />
    );
};

export default SetNewPassContainer;
