import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PizzasService } from './pizzas.service';

@Controller('api')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Get('all-noticias')
  findAllNoticias() {
    return this.pizzasService.findAllNoticias();
  }

  @Get('all-cards')
  findAllCards() {
    return this.pizzasService.findAllCards();
  }

  @Get('all-tipos-noticias')
  findAllTipos() {
    return this.pizzasService.findAllTipoNoticias();
  }

  // TEXTOS
  @Get('all-textos')
  findAllTextos() {
    return this.pizzasService.findAllTextos();
  }
  @Post()
  createNoticias(@Body() noticia: any) {
    return this.pizzasService.createNoticia(noticia);
  }

  @Patch()
  updateNoticias(@Body() noticia: any) {
    return this.pizzasService.updateNoticia(noticia);
  }
  /////////////////////////////////////////////////////////////////
  @Delete('/:id')
  deleteNoticia(@Param() param: any) {
    return this.pizzasService.deleteNoticia(param.id);
  }

  // USUARIOS

  @Get('all-usuarios')
  findAll() {
    return this.pizzasService.findAllUsuarios();
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
  //////////////////////////////////////////////////////////////////////////////

  // PLATAFORMAS
  @Get('all-plataformas')
  findAllPlataformas() {
    return this.pizzasService.findAllPlataformas();
  }

  @Post('plataforma')
  createPlataforma(@Body() plataforma: any) {
    return this.pizzasService.createPlataforma(plataforma);
  }

  @Patch('plataforma')
  updatePlataforma(@Body() plataforma: any) {
    return this.pizzasService.updatePlataforma(plataforma);
  }

  @Delete('plataforma/:id')
  deletePlataforma(@Param() param: any) {
    return this.pizzasService.deletePlataforma(param.id);
  }
  /////////////////////////////////////////////////////////////////

    // CARGOS
    @Get('all-cargos')
    findAllCargos() {
      return this.pizzasService.findAllCargos();
    }
  
    @Post('cargo')
    createCargo(@Body() cargo: any) {
      return this.pizzasService.createCargo(cargo);
    }
  
    @Patch('cargo')
    updateCargo(@Body() cargo: any) {
      return this.pizzasService.updateCargo(cargo);
    }
  
    @Delete('cargo/:id')
    deleteCargo(@Param() param: any) {
      return this.pizzasService.deleteCargo(param.id);
    }
    /////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////

    // CARGOS
    @Get('all-marcas')
    findAllMarcas() {
      return this.pizzasService.findAllMarcas();
    }
  
    @Post('marca')
    createMarca(@Body() plataforma: any) {
      return this.pizzasService.createMarca(plataforma);
    }
  
    @Patch('marca')
    updateMarca(@Body() plataforma: any) {
      return this.pizzasService.updateMarca(plataforma);
    }
  
    @Delete('marca/:id')
    deleteMarca(@Param() param: any) {
      return this.pizzasService.deleteMarca(param.id);
    }
    /////////////////////////////////////////////////////////////////
}
