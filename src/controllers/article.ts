import { Context } from 'koa'
import { getManager, Like } from 'typeorm'
import { Article } from '../entity/Article'


export async function fetchArticles (context: Context) {
  const articleRepository = getManager().getRepository(Article)
  const articles = await articleRepository.find()
  context.body = articles
}

export async function fetchArticle (context: Context) {
  const articleRepository = getManager().getRepository(Article)
  const id = context.params.id
  const article = await articleRepository.findOne(id)
  context.body = article
}

export async function saveArticle (context: Context) {}
