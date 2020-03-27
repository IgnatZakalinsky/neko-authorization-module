import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {passwordCoding} from "../../../f-2-helpers/h-1-authorization/passwordCoding";
import {SetNewPassAPI} from "../s-3-dal/SetNewPassAPI";
import {ISetNewPassActions} from "./b-2-redux/setNewPassActions";

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const setNewPass =
    (password: string, token: string): ThunkAction<Return, IAppStore, ExtraArgument, ISetNewPassActions> =>
        async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISetNewPassActions>, getStore: IGetStore) => {

            // registerLoading(dispatch, true);

            try {
                const data = await SetNewPassAPI.setNewPass(passwordCoding(password), token);

                if (data.error) {
                    // registerError(dispatch, data.error);

                } else {
                    // registerSuccess(dispatch, true);

                    console.log('Neko setNewPass Success!', data)
                }
            } catch (e) {
                // registerError(dispatch, e.response.data.error);

                console.log('Neko setNewPass Error!', {...e})
            }
        };
