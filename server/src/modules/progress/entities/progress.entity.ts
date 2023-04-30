import User from 'src/modules/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum TimePeriod {
  Weekly = 'Weekly',
  Monthly = 'Monthly',
}
@Entity()
export default class Progress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: TimePeriod,
    default: TimePeriod.Weekly,
  })
  timePeriod: TimePeriod;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ nullable: true })
  flashCardReviewed: number;

  @Column({ nullable: true })
  correctReviews: number;

  @Column({ nullable: true })
  accuracy: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
