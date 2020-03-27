import React from 'react';
import {NavLink} from "react-router-dom";
import {FlexColumnCenterCenter} from "../../../../neko-3-styles/flex-containers";
import {SIGN_IN_PATH} from "../../../../neko-1-main/m-1-ui/Routes";

interface ISetNewPassProps {
    // loading: boolean;
    // error: string;
    // success: boolean;
    //
    // email: string;
    //
    // setEmailCallback: (email: string) => void;
    //
    // forgotCallback: () => void;

    pass1: string;
    pass2: string;
    setPass1: (pass: string) => void;
    setPass2: (pass: string) => void;
}

const SetNewPass: React.FC<ISetNewPassProps> = (
    {
        // loading, error, success,
        //
        // email, setEmailCallback,
        //
        // forgotCallback
        pass1, setPass1,
        pass2, setPass2,
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

            {/*{loading*/}
                {/*? <div style={{color: 'orange'}}>loading...</div>*/}
                {/*: error*/}
                    {/*? <div style={{color: 'red'}}>{error}</div>*/}
                    {/*: success*/}
                        {/*? <div style={{color: 'lime'}}>Success!</div>*/}
                        {/*: <div><br/></div>*/}
            {/*}*/}

            <input
                value={pass1}
                onChange={e => setPass1(e.currentTarget.value)}
            />
            <input
                value={pass2}
                onChange={e => setPass2(e.currentTarget.value)}
            />

            <button
                // onClick={forgotCallback}
                // disabled={loading || success}
            >Set new password</button>

            <NavLink to={SIGN_IN_PATH}>Sign In</NavLink>
        </div>
    );
};

export default SetNewPass;
