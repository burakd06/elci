// controllers/user.controller.js

import { login as loginService, createUser as createUserService, getUserById } from '../services/user.service.js';

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Kullanıcı adı ve şifre gereklidir' });
    }

    try {
        const { user, token } = await loginService(username, password);
        res.json({ message: 'Giriş başarılı', token });
    } catch (error) {
        console.error('Login hatası:', error);
        res.status(401).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    const { username, password, isAdmin } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Kullanıcı adı ve şifre gereklidir' });
    }

    try {
        const { user, token } = await createUserService(username, password, isAdmin);
        res.status(201).json({ message: 'Kullanıcı oluşturuldu', user, token });
    } catch (error) {
        console.error('Kullanıcı oluşturma hatası:', error);
        res.status(400).json({ message: error.message });
    }
};

export const getProfile = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }
        res.json({ username: user.username, isAdmin: user.isAdmin });
    } catch (error) {
        console.error('Profile hatası:', error);
        res.status(500).json({ message: 'Bir hata oluştu' });
    }
};
