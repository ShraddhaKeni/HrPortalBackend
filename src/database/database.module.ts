import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


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
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                console.log(process.env.NODE_ENV)
                const isProduction = process.env.NODE_ENV === 'prod';

                return {
                    ssl: isProduction,
                    extra: {
                        ssl: isProduction ? { rejectUnauthorized: false } : null,
                    },
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: 'postgres',
                    database: 'hrportalDB',
                    autoLoadEntities: true,
                    logging: true,
                    synchronize: true
                };
            },
        })
    ]
})
export class DatabaseModule { }
