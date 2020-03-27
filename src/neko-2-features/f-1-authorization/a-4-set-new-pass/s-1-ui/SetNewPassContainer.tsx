import React, {useState} from 'react';
import SetNewPass from "./SetNewPass";
import {useParams} from "react-router-dom";

const SetNewPassContainer: React.FC = () => {
    // const {
    //     loading, error, success, dispatch,
    //
    //     email, setEmailCallback,
    //
    //     redirect, setRedirect,
    //
    //     forgot,
    // } = useForgotContainerLogic();
    //
    // // redirect logic
    // if (success.value) setTimeout(() => setRedirect(true), 500);
    // if (redirect) {
    //     setTimeout(() => forgotClear(dispatch), 500);
    //     return <Redirect to={SIGN_IN_PATH}/>;
    // }

    const {token} = useParams();
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');


    console.log('render SetNewPassContainer');
    return (
        <SetNewPass
            // loading={loading.value}
            // error={error.data.message || ''}
            // success={success.value}
            //
            // email={email} setEmailCallback={setEmailCallback}
            //
            // forgotCallback={forgot}
            pass1={pass1} setPass1={setPass1}
            pass2={pass2} setPass2={setPass2}

        />
    );
};

export default SetNewPassContainer;
