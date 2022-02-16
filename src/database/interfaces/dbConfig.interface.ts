import { EntitySchema } from "typeorm";

export interface IDatabaseConfigAttributes {
    username?: string;
    password?: string;
    database?: string;
    host?: string;
    port?: number | string;
    type?: string;
    urlDatabase?: string;
    ssl?: boolean;
    autoLoadEntities?: boolean;
    synchronize?: boolean;
    entities?: (string | Function | EntitySchema<any>)[]
}

export interface IDatabaseConfig {
    development: IDatabaseConfigAttributes;
    test: IDatabaseConfigAttributes;
    production: IDatabaseConfigAttributes;
}