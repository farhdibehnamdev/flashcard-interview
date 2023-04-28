import FlashCard from 'src/modules/flashcard/entities/flashcard.entity';
import Review from 'src/modules/review/entities/review.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  firstName: string;
  @Column({ nullable: true })
  lastName: string;
  @Column({ nullable: true })
  avatar: string;
  @Column({ unique: true, nullable: false })
  email: string;
  @Column({ nullable: false })
  password: string;
  @Column({ type: 'varchar', default: UserRole.USER, name: 'userRole' })
  role: string;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @OneToMany(() => FlashCard, (FlashCard) => FlashCard.user)
  flashcards: FlashCard[];
}
