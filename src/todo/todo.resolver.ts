import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './schemas/todo.schema';

@Resolver('Todo')
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query('todos')
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }
  
  @Query('todo')
  async findById(@Args('id') id: string): Promise<Todo> {
    return this.todoService.findById(id);
  }

  @Mutation('createTodo')
  async createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput): Promise<Todo> {
    return this.todoService.create(createTodoInput);
  }
  
  @Mutation('updateTodo')
  async updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput): Promise<Todo> {
    return this.todoService.updateById(updateTodoInput.id, updateTodoInput);
  }

  @Mutation('deleteTodo')
  async deleteTodo(@Args('id') id: string): Promise<Todo> {
    return this.todoService.deleteById(id);
  }
}
