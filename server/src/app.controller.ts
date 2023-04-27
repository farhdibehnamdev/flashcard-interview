import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { supermemo, SuperMemoItem, SuperMemoGrade } from 'supermemo';

interface Flashcard extends SuperMemoItem {
  front: string;
  back: string;
  dueDate: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Flashcard {
    return this.appService.getHello();
  }
}
