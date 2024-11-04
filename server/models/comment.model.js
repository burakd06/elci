// models/comment.model.js

import prisma from '../db.js';

export async function fetchAllComments() {
    try {
        return await prisma.comments.findMany({
            orderBy: {
                created_at: 'desc'  // Change createdAt to created_at
            }
        });
    } catch (error) {
        console.error('Yorumları alma hatası:', error);
        throw new Error('Yorumları alırken hata oluştu.');
    }
}


export async function fetchCommentsByProduct(product, isAdmin) {
    try {
        const whereClause = isAdmin ? { product } : { product, approved: true };
        return await prisma.comments.findMany({
            where: whereClause,
            orderBy: { created_at: 'desc' } // Change createdAt to created_at
        });
    } catch (error) {
        console.error('Ürünle ilişkili yorumları alma hatası:', error);
        throw new Error('Yorumları alırken hata oluştu.');
    }
}


export async function addComment(username, product, comment) {
    try {
        return await prisma.comments.create({
            data: { username, product, comment }
        });
    } catch (error) {
        console.error('Yorum ekleme hatası:', error);
        throw new Error('Yorum eklenirken hata oluştu.');
    }
}

export async function approveComment(id) {
    try {
        return await prisma.comments.update({
            where: { id },
            data: { approved: true }
        });
    } catch (error) {
        console.error('Yorum onaylama hatası:', error);
        throw new Error('Yorum onaylanırken hata oluştu.');
    }
}
