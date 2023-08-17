"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "test",
    synchronize: false,
    entities: ["dist/**/*.entity.js"],
    migrations: ["database/migrations/*{.ts,.js}"],
};
//# sourceMappingURL=typeorm.config.js.map