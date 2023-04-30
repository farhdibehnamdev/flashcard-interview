import FlashCard from 'src/modules/flashcard/entities/flashcard.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export default class Deck {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => FlashCard, (flashCard) => flashCard.deck)
  flashcards: FlashCard[];
}
