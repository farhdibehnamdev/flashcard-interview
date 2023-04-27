import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './modules/review/review.module';
import { FlashcardModule } from './modules/flashcard/flashcard.module';
import { CollectionModule } from './modules/collection/collection.module';

@Module({
  imports: [AuthModule, ReviewModule, FlashcardModule, CollectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
