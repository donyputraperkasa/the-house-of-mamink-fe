export type AuthUser = {
    id: number;
    email: string;
    username?: string;
    role?: string;
};

export type AuthResponse = {
    access_token: string;
    user: AuthUser;
};

export type LoginPayload = {
    email: string;
    password: string;
};

export type RegisterPayload = {
    email: string;
    password: string;
};
