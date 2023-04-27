import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { supermemo, SuperMemoItem, SuperMemoGrade } from 'supermemo';

interface Flashcard extends SuperMemoItem {
  front: string;
  back: string;
  dueDate: string;
}
function practice(flashcard: Flashcard, grade: SuperMemoGrade): Flashcard {
  const { interval, repetition, efactor } = supermemo(flashcard, grade);

  const dueDate = dayjs(Date.now()).add(interval, 'day').toISOString();

  return { ...flashcard, interval, repetition, efactor, dueDate };
}
@Injectable()
export class AppService {
  getHello(): Flashcard {
    let flashcard: Flashcard = {
      front: 'programer',
      back: 'an organism that turns caffeine in software',
      interval: 0,
      repetition: 0,
      efactor: 2.5,
      dueDate: dayjs(Date.now()).toISOString(),
    };

    console.log(flashcard);

    flashcard = practice(flashcard, 5);
    console.log(flashcard);

    flashcard = practice(flashcard, 3);
    return flashcard;
  }
}
