import { Entity, ObjectIdColumn, ManyToOne, ObjectID, Column, PrimaryGeneratedColumn } from "typeorm";
import { Article } from './Article'

@Entity()
export class Category {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    createDate: number;

    @ManyToOne(type => Article, article => article.categories)
    article: Article

}
