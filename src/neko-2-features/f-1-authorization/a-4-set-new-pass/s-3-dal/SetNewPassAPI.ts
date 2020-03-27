import {instance} from "../../../../base-url";

export interface ISetNewPassData {
    success: boolean;

    error: string;
}

export const SetNewPassAPI = {
    setNewPass: async (password: string, resetPasswordToken: string) => {
        const response = await instance
            .post<ISetNewPassData>('/auth/set-new-password', {password, resetPasswordToken});
        return response.data;
    },

};
