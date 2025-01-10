import { PostDTO } from 'src/dto/postDto'
import { Post } from '../models/postsModel'

async function findPost(id: number): Promise<Post | null> {
  return await Post.findByPk(id)
}

async function listPosts(): Promise<Post[]> {
  return await Post.findAll({order: [['createdAt', 'DESC']]})
}

async function createPost(post: PostDTO): Promise<Post> {
  return await Post.create({ ...post })
}

async function deletePost(id: number): Promise<void> {
    await Post.destroy({where: {id}})
}

export default {
  listPosts,
  findPost,
  createPost,
  deletePost
}
