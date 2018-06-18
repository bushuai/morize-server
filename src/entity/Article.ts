import { Entity, ObjectIdColumn, ObjectID, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Category } from './Category';
import { User } from './User';

@Entity()
export class Article {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: string;

    @Column('text')
    content: string;

    @Column()
    viewCount: number;

    @Column()
    isPublish: boolean;

    @OneToMany(type => Category, category => category.article)
    categories: Category[];

    @OneToMany(type => User, user => user.likedArticles)
    likedUsers: User[]

}
