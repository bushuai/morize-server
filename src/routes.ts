import { fetchArticles, fetchArticle, saveArticle } from './controllers/article'

export const Routes = [
  {
    path: '/articles',
    method: 'get',
    action: fetchArticles
  },
  {
    path: '/articles/:id',
    method: 'get',
    action: fetchArticle
  },
  {
    path: '/articles',
    method: 'post',
    action: saveArticle
  }
]