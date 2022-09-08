import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,  UpdateDateColumn} from 'typeorm';
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

@Entity('users')
@ObjectType()

export class User {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String)
  id: string;

  @Column()
  @Field({ nullable: true })
  name: string;

  @CreateDateColumn()
  @Field({ nullable: true })
  createdAt: Date;

  @UpdateDateColumn()
  @Field({ nullable: true })
  updatedAt: Date;
}

@InputType()
export class UserInput {
  @Field({ nullable: false })
  name: string;
}

@InputType()
export class DeleteUserInput {
  @Field({ nullable: false })
  id: string;
}


@Entity('hello')
@ObjectType()
export class hello{
  @Column()
  @Field({ nullable: true })
  msg: string;
}