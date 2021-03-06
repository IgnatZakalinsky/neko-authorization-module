import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {
    SIGN_IN_PATH, REGISTER_PATH, FORGOT_PATH,
    NEKO_PATH,
    SET_NEW_PASS_PATH
} from './Routes';
import {FlexAlignCenterSpaceAroundWrap} from "../../neko-3-styles/flex-containers";

const Header: React.FC = () => {
    const [show, setShow] = useState(false);

    return (
        <div style={{...FlexAlignCenterSpaceAroundWrap}}>
            <button onClick={() => setShow(!show)}>{show ? 'hide dev header' : 'show dev header'}</button>

            {show && <NavLink to={SIGN_IN_PATH}>sign-in</NavLink>}
            {show && <NavLink to={REGISTER_PATH}>register</NavLink>}
            {show && <NavLink to={FORGOT_PATH}>forgot</NavLink>}
            {show && <NavLink to={SET_NEW_PASS_PATH}>set-new-pass</NavLink>}

            {show && <NavLink to={NEKO_PATH}>neko</NavLink>}
        </div>
    );
};

export default Header;
