interface BasicAuthWithEmailAndPassword {
    email: string;
    password: string;
}

export interface SigninI extends BasicAuthWithEmailAndPassword {}

export interface SignupI extends BasicAuthWithEmailAndPassword {}

export interface TokenI {
    token: string;
}
