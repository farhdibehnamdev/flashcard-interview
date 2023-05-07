import { Body, Controller, Get, Param, Post, Version } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckDto } from './dto/deck.dto';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Version('1')
  @Get()
  async findAll() {
    return await this.deckService.findAll();
  }

  @Version('1')
  @Get()
  async findOne(@Param('id') id: number) {
    return await this.deckService.findOne(id);
  }

  @Version('1')
  @Post()
  async create(@Body() deckDto: DeckDto) {
    return await this.deckService.create(deckDto);
  }
}
