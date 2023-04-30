import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './modules/review/review.module';
import { FlashcardModule } from './modules/flashcard/flashcard.module';
import { DeckModule } from './modules/collection/deck.module';
import { ProgressModule } from './modules/progress/progress.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from 'db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot(databaseConfig),

    AuthModule,
    ReviewModule,
    FlashcardModule,
    DeckModule,
    ProgressModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
