import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { PizzasService } from './pizzas.service';

@Controller('api')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Get('all-usuarios')
  findAll() {
    return this.pizzasService.findAllUsuarios();
  }

  @Get('all-textos')
  findAllTextos() {
    return this.pizzasService.findAllTextos();
  }

  @Get('all-noticias')
  findAllNoticias() {
    return this.pizzasService.findAllNoticias();
  }

  @Get('all-cards')
  findAllCards() {
    return this.pizzasService.findAllCards();
  }

  @Get('all-tipos')
  findAllTipos() {
    return this.pizzasService.findAllTipos();
  }

  @Get('all-cargos')
  findAllCargos() {
    return this.pizzasService.findAllCargos();
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

  @Post('usuario')
  createUsuario(@Body() usuario: any) {
    return this.pizzasService.createUsuario(usuario);
  }

  @Patch('usuario')
  updateUsuario(@Body() usuario: any) {
    return this.pizzasService.updateUsuario(usuario);
  }

  @Delete('usuario/:id')
  deleteUsuario(@Param() param: any) {
    return this.pizzasService.deleteUsuario(param.id);
  }

}
