import { Request, Response, NextFunction } from 'express'
import postService from '../service/postsService'

async function findPostById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id
    const post = await postService.findPost(id as unknown as number)
    res.json(post)
  } catch(err) {
    next(err)
  } 
}

async function getPosts(req: Request, res: Response, next: NextFunction) {
  try {
    const post = await postService.listPosts()
    res.json(post)
  } catch(err) {
    next(err)
  }

}

async function createPost(req: Request, res: Response, next: NextFunction) {
  try {
    const { author, content, description, title } = req.body
    const newPost = await postService.createNewPost({
      author,
      content,
      description,
      title,
    })
    res.status(201).json(newPost)
  } catch(err) {
    next(err)
  } 
}

async function deletePostById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id
    await postService.deletePost(id as unknown as number)
    res.status(204).json()
  } catch(err) {
    next(err)
  }

}

export default {
  findPostById,
  getPosts,
  createPost,
  deletePostById
}
