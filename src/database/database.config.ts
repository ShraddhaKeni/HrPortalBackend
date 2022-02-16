import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/dbConfig.interface';
import { User } from 'src/auth/user.entity';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
    development: {
        ssl: false,
        // autoLoadEntities: true,
        entities: [User],
        synchronize: true,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: `${process.env.DB_PASS}`,
        database: process.env.DEV_DB_NAME,
        type: 'postgres'
    },
    test: {
        ssl: false,
        // autoLoadEntities: true,
        entities: [User],
        synchronize: true,
        host: process.env.TEST_DB_HOST,
        port: process.env.TEST_DB_PORT,
        username: process.env.TEST_DB_USER,
        password: `${process.env.TEST_DB_PASS}`,
        database: process.env.TEST_DB_NAME,
        type: 'postgres'
    },
    production: {
        ssl: true,
        // autoLoadEntities: true,
        entities: [User],
        synchronize: true,
        host: process.env.PROD_DB_HOST,
        username: process.env.PROD_DB_USER,
        password: `${process.env.PROD_DB_PASS}`,
        database: process.env.PROD_DB_NAME,
        type: 'postgres'
    },
};