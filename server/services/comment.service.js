// services/comment.service.js

import { 
    fetchAllComments as modelFetchAllComments, 
    fetchCommentsByProduct as modelFetchCommentsByProduct,
    fetchCommentsByProductAdmin as modelFetchCommentsByProductAdmin,
    addComment as modelAddComment, 
    approveComment as modelApproveComment 
} from '../models/comment.model.js';

export async function fetchAllComments() {
    return await modelFetchAllComments();
}

export async function fetchCommentsByProduct(product, isAdmin) {
    return await modelFetchCommentsByProduct(product, isAdmin);
}

export async function fetchCommentsByProductAdmin(product, isAdmin) {
    return await modelFetchCommentsByProductAdmin(product, isAdmin);
}

export async function addComment(username, product, comment) {
    return await modelAddComment(username, product, comment);
}

export async function approveComment(id) {
    return await modelApproveComment(id);
}
