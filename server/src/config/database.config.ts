import { ConfigService } from '@nestjs/config';
import { Inject } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';

export default class DBConfig {
  constructor(@Inject(ConfigService) private configService: ConfigService) {}
  getConfig() {
    const dataSrouce: DataSourceOptions = {
      type: 'postgres',
      host: this.configService.get<string>('DB_HOST'),
      port: +this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrationsTableName: 'migrations',
      migrations: [__dirname + '/../migrations/*.ts'],
    };
    return dataSrouce;
  }
}

// export const databaseConfig : DataSource = {
//     return {
//       type: 'postgres',
//       host: this.configService.get<string>('DB_HOST'),
//       port: +this.configService.get<number>('DB_PORT'),
//       username: this.configService.get<string>('DB_USERNAME'),
//       password: this.configService.get<string>('DB_PASSWORD'),
//       database: this.configService.get<string>('DB_NAME'),
//       entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//       migrationsTableName: 'migrations',
//       migrations: [__dirname + '/../migrations/*.ts'],
//     };
// }

// export const databaseConfig: DataSourceOptions = {
//   type: 'postgres',
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT, 10),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   synchronize: process.env.DB_SYNCHRONIZE === 'false',
//   migrationsTableName: 'migrations',
//   migrations: [__dirname + '/../migrations/*.ts'],
// };

// const dataSource = new DataSource(databaseConfig);
// export default dataSource;
