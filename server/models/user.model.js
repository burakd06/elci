// models/user.model.js

import prisma from '../db.js';

export async function findUserByUsername(username) {
    try {
        return await prisma.user.findUnique({
            where: { username }
        });
    } catch (error) {
        console.error('Kullanıcı alma hatası:', error);
        throw new Error('Kullanıcı alınırken hata oluştu.');
    }
}

export async function createUser(data) {
    try {
        return await prisma.user.create({ data });
    } catch (error) {
        console.error('Kullanıcı oluşturma hatası:', error);
        throw new Error('Kullanıcı oluşturulurken hata oluştu.');
    }
}

export async function findUserById(id) {
    try {
        return await prisma.user.findUnique({
            where: { id }
        });
    } catch (error) {
        console.error('Kullanıcı alma hatası:', error);
        throw new Error('Kullanıcı alınırken hata oluştu.');
    }
}
