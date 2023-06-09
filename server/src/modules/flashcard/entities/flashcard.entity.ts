import Deck from 'src/modules/collection/entities/deck.entity';
import User from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class FlashCard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  question: string;

  @Column()
  answer: string;

  @ManyToOne(() => User, (user) => user.flashcards)
  user: User;

  @ManyToOne(() => Deck, (deck) => deck.flashcards)
  deck: Deck;
}
