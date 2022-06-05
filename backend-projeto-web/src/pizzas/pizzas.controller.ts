import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { PizzasService } from './pizzas.service';

@Controller('api')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Get('all-usuarios')
  findAll() {
    return this.pizzasService.findAllUsuarios();
  }

  @Get('all-noticias')
  findAllNoticias() {
    return this.pizzasService.findAllNoticias();
  }

  @Post()
  createNoticias(@Body() noticia: any) {
    return this.pizzasService.createNoticia(noticia);
  }

  @Patch()
  updateNoticias(@Body() noticia: any) {
    return this.pizzasService.updateNoticia(noticia);
  }

  @Delete('/:id')
  deleteNoticia(@Param() param: any) {
    return this.pizzasService.deleteNoticia(param.id);
  }

}
