import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { databaseConfig } from './database.config';
import { User } from 'src/auth/user.entity';

@Module({
    imports: [
        /* TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                const isProduction = process.env.NODE_ENV === 'prod';
        
                return {
                    ssl: isProduction,
                    extra: {
                    ssl: isProduction ? { rejectUnauthorized: false } : null,
                    },
                    type: 'postgres',
                    autoLoadEntities: true,
                    synchronize: true,
                    entities:[User],
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: `${configService.get('DB_PASSWORD')}`,
                    database: configService.get('DB_DATABASE'),
                };
            },
        }) */
      TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async () => {
                let config;
                switch(true) {
                    case (DEVELOPMENT == process.env.NODE_ENV.trim()):
                        console.log(`${process.env.NODE_ENV}`);
                        console.log(`${DEVELOPMENT}: ${JSON.stringify(databaseConfig.development)}`);
                        config = databaseConfig.development;
                        break;
                    case (TEST == process.env.NODE_ENV.trim()):
                        console.log(`${process.env.NODE_ENV}`);
                        console.log(`${TEST}: ${JSON.stringify(databaseConfig.test)}`)
                        config = databaseConfig.test;
                        break;
                    case (PRODUCTION == process.env.NODE_ENV.trim()):
                        console.log(`${process.env.NODE_ENV}`);
                        console.log(`${PRODUCTION}: ${JSON.stringify(databaseConfig.production)}`)
                        config = databaseConfig.production;
                        break;
                    default:
                        console.log(`${process.env.NODE_ENV.trim()}`);
                        console.log(`DEFAULT: ${JSON.stringify(databaseConfig.development)}`)
                        config = databaseConfig.development;
                }
                return config as TypeOrmModuleOptions
            }
      })
    ]
})
export class DatabaseModule {}
