import "reflect-metadata"
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as Router from 'koa-router'
import * as Logger from 'koa-logger'
import { createConnection } from "typeorm"
import { Routes } from './routes'

createConnection().then(async connection => {
    // create koa app
    const app = new Koa()
    app.use(Logger())
    const router = new Router()

    // register all application routes
    Routes.forEach(route => router[route.method](route.path, route.action));

    // run app
    app.use(bodyParser())
    app.use(router.routes())
    app.use(router.allowedMethods())
    app.listen(3000)

    // const article = new Article()
    // article.title = '新1212'
    // article.viewCount = 0
    // article.isPublish = false
    // article.content = '<h2>22212</h2>'
    // article.likedUsers = []
    // article.categories = []

    // await connection.manager.save(article)

    // const articles = await connection.manager.find(Article)
    // console.log('articles: ', articles)
    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await connection.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)
    
    // console.log("Loading users from the database...")
    // const users = await connection.manager.find(User)
    // console.log("Loaded users: ", users)
     
    // console.log("Here you can setup and run express/koa/any other framework.")
    
}).catch(error => console.log(error))
