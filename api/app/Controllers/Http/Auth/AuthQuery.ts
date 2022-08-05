import User from '../../../Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
export default class AuthQuery {
    async register(ctx: HttpContextContract) {
        const data = ctx.request.all();
        const user =await User.create(data);
        console.log("user is ",user);
        await ctx.auth.login(user)
        return user;
    }
}
