import { BadRequestException, NotFoundException } from '../exceptions/apiExceptions'
import { PostDTO } from '../dto/postDto'
import postRepository from '../repositories/postRepository'

const findPost = async (id: number) => {
  try {
    const existentPost = await postRepository.findPost(id)

    if(!existentPost) {
      throw new NotFoundException("Post não encontrado")
    }

    return existentPost
  } catch (error) {
    console.error(error)
    throw error
  }
}

const listPosts = async () => {
  try {
    return await postRepository.listPosts()
  } catch (error) {
    console.error(error)
    throw error
  }
}

const createNewPost = async (post: PostDTO) => {
  try {
    if (!post.author) {
      throw new BadRequestException('Autor é um campo obrigatório')
    }
    if (!post.content) {
      throw new BadRequestException('Conteúdo é um campo obrigatório')
    }
    if (!post.description) {
      throw new BadRequestException('Descrição é um campo obrigatório')
    }
    if (!post.title) {
      throw new BadRequestException('Título é um campo obrigatório')
    }

    return await postRepository.createPost(post)
  } catch (error) {
    console.error(error)
    throw error
  }
}

const deletePost = async (id: number) => {
  try {
    const existentPost = await postRepository.findPost(id)

    if(!existentPost) {
      throw new NotFoundException("Post não encontrado")
    }

    return await postRepository.deletePost(id)
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default {
  findPost,
  listPosts,
  createNewPost,
  deletePost
}
