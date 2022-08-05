import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthService from './AuthService';
import AuthValidator from './AuthValidator';


export default class AuthController {
    private authService: AuthService
    private authValidator: AuthValidator

    constructor() {
        this.authService = new AuthService()
        this.authValidator = new AuthValidator()
    }

    async register(ctx: HttpContextContract) {
        await this.authValidator.validateSignupSchema(ctx)
        return this.authService.register(ctx);
    }

    async login(ctx: HttpContextContract) {
        const payload=await this.authValidator.validateLoginSchema(ctx)
        let data = ctx.request.all();
        console.log("login",data);
        return ctx.auth.use('web').attempt(data.email, data.password)
    }

    async getUser(ctx: HttpContextContract) {
        try {
            return ctx.auth.use('web').authenticate();
        } catch (error) {

        }
    }

    async logout({ auth }) {
        return auth.logout()
    }






}
