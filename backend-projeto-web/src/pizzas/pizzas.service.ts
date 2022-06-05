import { Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { Pizza } from './entities/pizza.entity';
import { PizzasRepository } from './pizzas.repository';

@Injectable()
export class PizzasService {
  constructor(private pizzasRepository: PizzasRepository) {}

  async findAllUsuarios(): Promise<any[]> {
    const produtos = await this.pizzasRepository.query(`
    SELECT
      U.id,
      U.nome,
      F.nome as funcao
    FROM
        usuarios U
    INNER JOIN
      funcoes F
      ON U.funcao = F.id
    `);
    return produtos;
  }

  async findAllNoticias(): Promise<any[]> {
    const noticias = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    noticias
    `);
    return noticias;
  }

  createNoticia(noticia: any): Promise<any> {
    return this.pizzasRepository.query(`
    INSERT INTO noticias
    (titulo, texto, imagem)
    VALUES
    ('${noticia.titulo}', '${noticia.texto}', '${noticia.imagem}');
    `);
  }

  updateNoticia(noticia: any): Promise<any> {
    return this.pizzasRepository.query(`
    UPDATE 
    noticias
    SET
      titulo = '${noticia.titulo}',
      texto = '${noticia.texto}',
      imagem = '${noticia.imagem}'
    WHERE
    id = ${noticia.id};
    `);
  }

  deleteNoticia(id: number): Promise<any> {
    return this.pizzasRepository.query(`
    DELETE FROM
    noticias
    WHERE
    id = ${id};
    `);
  }
}
