import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTodoInput {
    // @Field()
    // id: string;

    @Field({ nullable: true })
    title: string;

    @Field({ nullable: true })
    deadline: string;

    @Field({ nullable: true })
    comments: string;
}
