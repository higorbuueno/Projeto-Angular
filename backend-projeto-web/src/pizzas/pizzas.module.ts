import { Module } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
import { PizzasRepository } from './pizzas.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Pizza, PizzasRepository])],
  controllers: [PizzasController],
  providers: [PizzasService]
})
export class PizzasModule {}
