import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
    @Field(() => ID)
    id: string;

    @Field({ nullable: true })
    title?: string;

    @Field({ nullable: true })
    deadline?: string;

    @Field({ nullable: true })
    comments?: string;
}
