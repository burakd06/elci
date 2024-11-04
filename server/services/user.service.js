// services/user.service.js

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByUsername, createUser as modelCreateUser, findUserById } from '../models/user.model.js';

export async function login(username, password) {
    const user = await findUserByUsername(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Geçersiz kullanıcı adı veya şifre');
    }

    const token = jwt.sign(
        { id: user.id, username: user.username, isAdmin: user.isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return { user, token };
}

export async function createUser(username, password, isAdmin) {
    const existingUser = await findUserByUsername(username);

    if (existingUser) {
        throw new Error('Bu kullanıcı adı zaten mevcut');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await modelCreateUser({
        username,
        password: hashedPassword,
        isAdmin: isAdmin || false,
    });

    const token = jwt.sign(
        { id: user.id, username: user.username, isAdmin: user.isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    return { user, token };
}

export async function getUserById(id) {
    return await findUserById(id);
}
