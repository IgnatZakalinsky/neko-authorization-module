import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import SignInPage from '../../neko-2-features/f-1-authorization/a-1-sign-in/s-1-ui/SignInPage';
import RegisterPage
    from '../../neko-2-features/f-1-authorization/a-2-register/r-1-ui/RegisterPage';
import ForgotPage from '../../neko-2-features/f-1-authorization/a-3-forgot/f-1-ui/ForgotPage';
import NekoPage from "../../neko-2-features/f-4-social/s-1-neko/n-1-ui/NekoPage";
import SetNewPassPage from "../../neko-2-features/f-1-authorization/a-4-set-new-pass/s-1-ui/SetNewPassPage";

// all project paths
export const SIGN_IN_PATH = '/sign-in';
export const REGISTER_PATH = '/register';
export const FORGOT_PATH = '/forgot';
export const SET_NEW_PASS_PATH = '/set-new-password';

export const NEKO_PATH = '/neko'; // profile

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Redirect to={SIGN_IN_PATH}/>}/>

            <Route path={SIGN_IN_PATH} render={() => <SignInPage/>}/>
            <Route path={REGISTER_PATH} render={() => <RegisterPage/>}/>
            <Route path={FORGOT_PATH} render={() => <ForgotPage/>}/>
            <Route path={SET_NEW_PASS_PATH + '/:token'} render={() => <SetNewPassPage/>}/>

            <Route path={NEKO_PATH} render={() => <NekoPage/>}/>

            <Route render={() => <Redirect to={SIGN_IN_PATH}/>}/>
        </Switch>
    );
};

export default Routes;
