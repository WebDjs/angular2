import { ILog } from './';

export interface User {
    username: string;
    password: string;
    confirmPassword?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    description?: string;
    imageUrl?: string;
    logs?: ILog[];
};
