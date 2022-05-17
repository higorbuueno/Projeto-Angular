import { Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { Pizza } from './entities/pizza.entity';
import { PizzasRepository } from './pizzas.repository';

@Injectable()
export class PizzasService {

  constructor(private pizzasRepository: PizzasRepository){}

  create(createPizzaDto: CreatePizzaDto) {
    return 'This action adds a new pizza';
  }

  findAll(): Promise<Pizza[]> {
    return this.pizzasRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pizza`;
  }

  update(id: number, updatePizzaDto: UpdatePizzaDto) {
    return updatePizzaDto;
  }

  remove(id: number) {
    return `This action removes a #${id} pizza`;
  }
}
