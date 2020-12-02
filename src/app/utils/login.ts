import { sha3_256 } from 'js-sha3';

export class Login {
    public static cryptoPassword(username: string, password: string) {
        const timestamp = new Date().getTime();
        const hash = sha3_256(password);
        const pwd = sha3_256(`${username}-${hash}-${timestamp}`);
        return {
            pwd,
            timestamp
        }
    }
}
