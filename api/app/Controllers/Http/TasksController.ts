import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ToDoList from 'App/Models/ToDoList';

export default class TasksController {
    public async createTask(ctx:HttpContextContract){
        const data = ctx.request.all();
        const save=await ToDoList.create(data);

    }
}
