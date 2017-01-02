import { Log } from './';

export interface User {
    id?: string;
    username: string;
    password: string;
    confirmPassword?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    description?: string;
    imageUrl?: string;
    logs?: Log[];
};
