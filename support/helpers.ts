import { faker } from '@faker-js/faker';

interface User {
    username: string;
    password: string;
    email: string;
}

export class TestDataHelper {
    static getRandomUser(): User {
        return {
            username: `user_${Date.now()}`,
            password: ``,
            email: faker.internet.email()
        };
    };
};