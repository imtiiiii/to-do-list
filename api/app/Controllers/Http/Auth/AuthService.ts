
import AuthQuery from './AuthQuery';


export default class AuthService {
    private authQuery: AuthQuery
    constructor() {
        this.authQuery = new AuthQuery
    }

    public async register(ctx) {
        return this.authQuery.register(ctx)

    }





};
