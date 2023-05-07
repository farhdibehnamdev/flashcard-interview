import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Deck from './entities/deck.entity';
import { Repository, FindOneOptions } from 'typeorm';
import { DeckDto } from './dto/deck.dto';

@Injectable()
export class DeckService {
  constructor(
    @InjectRepository(Deck) private readonly deckRepository: Repository<Deck>,
  ) {}

  async findAll() {
    const [items, count] = await this.deckRepository.findAndCount();
    return { items, count };
  }

  async findOne(id: number) {
    const deck = await this.deckRepository.findOne({ where: { id } });
    return deck;
  }

  async create(deckDto: DeckDto) {
    try {
      return await this.deckRepository.create(deckDto);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
