import { Entity, ObjectIdColumn, ObjectID, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Article } from './Article'

@Entity()
export class User {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @ManyToOne(type => Article, article => article.likedUsers)
    likedArticles: Article[]

}
