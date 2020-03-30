import React from 'react';
import {NavLink} from "react-router-dom";
import {FlexColumnCenterCenter} from "../../../../neko-3-styles/flex-containers";
import {SIGN_IN_PATH} from "../../../../neko-1-main/m-1-ui/Routes";

interface ISetNewPassProps {
    loading: boolean;
    error: string;
    success: boolean;

    password1: string;
    setPassword1Callback: (pass: string) => void;
    password2: string;
    setPassword2Callback: (pass: string) => void;

    setNewPass: () => void;
}

const SetNewPass: React.FC<ISetNewPassProps> = (
    {
        loading, error, success,

        password1, setPassword1Callback,
        password2, setPassword2Callback,

        setNewPass
    }
) => {

    console.log('render SetNewPass');
    return (
        <div
            style={{
                ...FlexColumnCenterCenter,
                height: '80vh',
            }}
        >
            SetNewPass

            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : success
                        ? <div style={{color: 'lime'}}>Success!</div>
                        : <div><br/></div>
            }

            <input
                value={password1}
                onChange={e => setPassword1Callback(e.currentTarget.value)}
            />
            <input
                value={password2}
                onChange={e => setPassword2Callback(e.currentTarget.value)}
            />

            <button
                onClick={setNewPass}
                disabled={loading || success}
            >Set new password</button>

            <NavLink to={SIGN_IN_PATH}>Sign In</NavLink>
        </div>
    );
};

export default SetNewPass;
