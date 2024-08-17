import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Todo {
    // @Prop()
    // id: String;

    @Prop()
    title: String;

    @Prop()
    deadline: String;

    @Prop()
    comments: String;
}

export const TodoSchema = SchemaFactory.createForClass(Todo)