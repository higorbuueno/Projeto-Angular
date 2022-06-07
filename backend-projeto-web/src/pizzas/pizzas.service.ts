import { Injectable } from '@nestjs/common';
import { PizzasRepository } from './pizzas.repository';

@Injectable()
export class PizzasService {
  constructor(private pizzasRepository: PizzasRepository) {}

  async findAllUsuarios(): Promise<any[]> {
    const produtos = await this.pizzasRepository.query(`
    SELECT
      U.id,
      U.nome,
      F.id as funcao
    FROM
        usuarios U
    INNER JOIN
      funcoes F
      ON U.funcao = F.id
    `);
    return produtos;
  }

  async findAllTextos(): Promise<any[]> {
    const noticias = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    noticias
    `);
    return noticias;
  }

  async findAllNoticias(): Promise<any[]> {
    const noticias = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    noticias
    WHERE
    tipo = 3
    `);
    return noticias;
  }

  async findAllCards(): Promise<any[]> {
    const noticias = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    noticias
    WHERE
    tipo = 2
    `);
    return noticias;
  }

  async findAllTipos(): Promise<any[]> {
    const tipos = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    tipo_noticias
    `);
    return tipos;
  }

  async findAllCargos(): Promise<any[]> {
    const tipos = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    funcoes
    `);
    return tipos;
  }

  // NOTICIAS
  
  createNoticia(noticia: any): Promise<any> {
    return this.pizzasRepository.query(`
    INSERT INTO noticias
    (titulo, texto, tipo, imagem)
    VALUES
    ('${noticia.titulo}', '${noticia.texto}', '${noticia.tipo}', '${noticia.imagem}');
    `);
  }

  updateNoticia(noticia: any): Promise<any> {
    return this.pizzasRepository.query(`
    UPDATE 
    noticias
    SET
      titulo = '${noticia.titulo}',
      texto = '${noticia.texto}',
      tipo = '${noticia.tipo}',
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


  // USUARIOS
  createUsuario(usuario: any): Promise<any> {
    return this.pizzasRepository.query(`
    INSERT INTO usuarios
    (nome, funcao)
    VALUES
    ('${usuario.nome}', '${usuario.funcao}');
    `);
  }

  updateUsuario(usuario: any): Promise<any> {
    return this.pizzasRepository.query(`
    UPDATE 
    usuarios
    SET
      nome = '${usuario.nome}',
      funcao = '${usuario.funcao}'
    WHERE
    id = ${usuario.id};
    `);
  }

  deleteUsuario(id: number): Promise<any> {
    return this.pizzasRepository.query(`
    DELETE FROM
    usuarios
    WHERE
    id = ${id};
    `);
  }
}
