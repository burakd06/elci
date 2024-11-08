// controllers/comment.controller.js

import { 
    fetchAllComments, 
    fetchCommentsByProduct, 
    addComment, 
    approveComment 
} from '../services/comment.service.js';

export const getComments = async (req, res) => {
    try {
        const comments = await fetchAllComments();
        res.json(comments);
    } catch (error) {
        console.error('Yorumları alma hatası:', error);
        res.status(500).json({ message: 'Yorumlar alınırken bir hata oluştu.' });
    }
};

export const getCommentsByProduct = async (req, res) => {
    const { product } = req.params;
    const isAdmin = req.user?.isAdmin;

    try {
        const comments = await fetchCommentsByProduct(product, isAdmin);
        res.json(comments);
    } catch (error) {
        console.error('Ürünle ilişkili yorumları alma hatası:', error);
        res.status(500).json({ message: 'Yorumlar alınırken bir hata oluştu.' });
    }
};

export const createComment = async (req, res) => {
    const { username, product, comment } = req.body;

    try {
        const newComment = await addComment(username, product, comment);
        res.status(201).json(newComment);
    } catch (error) {
        console.error('Yorum ekleme hatası:', error);
        res.status(500).json({ message: 'Yorum eklenirken bir hata oluştu.' });
    }
};

export const approveCommentById = async (req, res) => {
    const id = parseInt(req.params.id, 10); // id'yi Int'e çeviriyoruz
    const isAdmin = req.user?.isAdmin;

    if (!isAdmin) {
        return res.status(403).json({ message: 'Yalnızca adminler onaylayabilir.' });
    }

    if (isNaN(id)) {
        return res.status(400).json({ message: 'Geçersiz ID değeri.' });
    }

    try {
        const approvedComment = await approveComment(id);
        res.json(approvedComment);
    } catch (error) {
        console.error('Yorum onaylama hatası:', error);
        res.status(500).json({ message: 'Yorum onaylanırken bir hata oluştu.' });
    }
};

