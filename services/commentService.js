import Comment from '../models/Comment.js';

export async function getComments(postId) {
  const comments = await Comment.find({ 
    "postId": postId
  });
  return comments;
}

export default {
  getComments
}