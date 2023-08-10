import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class User {
    static async create(data) {
        return await prisma.user.create({
            data
        });
    }
    static async findUnique(where) {
        return await prisma.user.findUnique({
            where
        });
    }
}