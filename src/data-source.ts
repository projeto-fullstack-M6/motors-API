import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import "dotenv/config";
import "reflect-metadata";

const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

  if (process.env.NODE_ENV === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [entitiesPath],
      migrations: [migrationsPath],
    };
  }

  if (process.env.NODE_ENV === "test")
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };

  return {
    type: "postgres",
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT!),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    logging: true,
    synchronize: false,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const appDataSource = setDataSourceConfig();
export default new DataSource(appDataSource);
