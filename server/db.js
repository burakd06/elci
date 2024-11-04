// db.js örneği:
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$connect()
    .then(() => console.log('Veritabanına başarıyla bağlanıldı.'))
    .catch(error => console.error('Veritabanına bağlanırken hata:', error));

export default prisma;
