import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Todo } from './schemas/todo.schema';
import { UpdateTodoInput } from './dto/update-todo.input';
import { CreateTodoInput } from './dto/create-todo.input';

@Injectable()
export class TodoService {

    constructor(
        @InjectModel(Todo.name)
        private todoModel: mongoose.Model<Todo>
    ){}

    async findAll(): Promise<Todo[]> {
        const todos = await this.todoModel.find()
        return todos;
    }

    async findById(id: string): Promise<Todo> {
        const todo = await this.todoModel.findById(id)

        if(!todo){
            throw new NotFoundException('Todo not found.');
        }

        return todo;
    }

    async create(createTodoInput: CreateTodoInput): Promise<Todo> {
        return await this.todoModel.create(createTodoInput)
    }

    async updateById(id: string, updateTodoInput: UpdateTodoInput): Promise<Todo> {
        return await this.todoModel.findByIdAndUpdate(id, updateTodoInput, {
            new: true,
        }).exec();
    }

    async deleteById(id: string): Promise<Todo> {
        return await this.todoModel.findByIdAndDelete(id);
    }
}
