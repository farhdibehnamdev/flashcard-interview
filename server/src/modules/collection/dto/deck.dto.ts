import { Column } from 'typeorm';

export class DeckDto {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;
}
