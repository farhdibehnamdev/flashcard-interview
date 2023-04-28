import User from 'src/modules/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';

@Entity()
export default class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'date' })
  reviewDate: Date;

  @BeforeInsert()
  validateDates() {
    if (!this.reviewDate) {
      this.reviewDate = new Date();
    }
  }

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;
}
