import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ToDoLists extends BaseSchema {
    protected tableName = 'to_do_lists'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer("user_id");
            table.string("task_name", 255);
            table.text("description");
            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
