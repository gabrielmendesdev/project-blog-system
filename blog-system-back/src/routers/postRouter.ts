 
import express from 'express';
import postController from '../controllers/postController';
 
const routes = express.Router();
 
routes.get('/:id', postController.findPostById);
routes.get('/', postController.getPosts);

routes.post('/', postController.createPost);

routes.delete('/:id', postController.deletePostById)
 
export {routes as default}