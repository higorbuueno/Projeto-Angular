import { Injectable } from '@nestjs/common';
import { PizzasRepository } from './pizzas.repository';

@Injectable()
export class PizzasService {
  constructor(private pizzasRepository: PizzasRepository) {}

  async login(body: any){
    const usuario = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    usuarios
    WHERE
    nome = '${body.usuario}'
    AND 
    senha = '${body.senha}'
    `);
    return usuario;
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
    const cards = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    noticias
    WHERE
    tipo = 2
    `);
    return cards;
  }

  async findAllArtigos(): Promise<any[]> {
    const artigos = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    noticias
    WHERE
    tipo = 1
    `);
    return artigos;
  }

  async findAllReviews(): Promise<any[]> {
    const reviews = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    noticias
    WHERE
    tipo = 4
    `);
    return reviews;
  }

  async findAllTipoNoticias(): Promise<any[]> {
    const tipos = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    tipo_noticias
    `);
    return tipos;
  }

  // NOTICIAS

  createNoticia(noticia: any): Promise<any> {
    return this.pizzasRepository.query(`
    INSERT INTO noticias
    (titulo, texto, tipo, plataforma)
    VALUES
    ('${noticia.titulo}', '${noticia.texto}', '${noticia.tipo}', '${noticia.plataforma}');
    `);
  }

  updateNoticia(noticia: any): Promise<any> {
    var modificacao = new Date();

    return this.pizzasRepository.query(`
    UPDATE 
    noticias
    SET
      titulo = '${noticia.titulo}',
      texto = '${noticia.texto}',
      tipo = '${noticia.tipo}',
      plataforma = '${noticia.plataforma}',
      modificacao = '${modificacao.getFullYear()}-${modificacao.getMonth()+1}-${modificacao.getDate()} ${modificacao.getHours()}:${modificacao.getMinutes()}:${modificacao.getSeconds()}'
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
  async findAllUsuarios(): Promise<any[]> {
    const produtos = await this.pizzasRepository.query(`
    SELECT
      U.id,
      U.nome,
      U.senha,
      F.id as funcao
    FROM
        usuarios U
    INNER JOIN
      funcoes F
    ON
      U.funcao = F.id
    `);
    return produtos;
  }

  createUsuario(usuario: any): Promise<any> {
    return this.pizzasRepository.query(`
    INSERT INTO usuarios
    (nome, funcao, senha)
    VALUES
    ('${usuario.nome}', '${usuario.funcao}', '${usuario.senha}');
    `);
  }

  updateUsuario(usuario: any): Promise<any> {
    return this.pizzasRepository.query(`
    UPDATE 
    usuarios
    SET
      nome = '${usuario.nome}',
      funcao = '${usuario.funcao}',
      senha = '${usuario.senha}'
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

  // Plataformas

  async findAllTipoPlataformas(){
    const tipos = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    tipo_plataformas
    `);
    return tipos;
  }

  findAllPlataformas() {
    return this.pizzasRepository.query(`
    SELECT
      P.id,
      P.nome,
      P.tipo,
      M.id as marca
    FROM
      plataformas P
    INNER JOIN
      marcas M
    ON
      P.id = M.id;
    `);
  }

  createPlataforma(plataforma: any): Promise<any> {
    return this.pizzasRepository.query(`
    INSERT INTO plataformas
    (nome, marca)
    VALUES
    ('${plataforma.nome}');
    `);
  }

  updatePlataforma(plataforma: any): Promise<any> {
    return this.pizzasRepository.query(`
    UPDATE 
    plataformas
    SET
      nome = '${plataforma.nome}'
    WHERE
    id = ${plataforma.id};
    `);
  }

  deletePlataforma(id: number): Promise<any> {
    return this.pizzasRepository.query(`
    DELETE FROM
    plataformas
    WHERE
    id = ${id};
    `);
  }

  // CARGOS
  async findAllCargos(): Promise<any[]> {
    const tipos = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    funcoes
    `);
    return tipos;
  }

  createCargo(cargo: any): Promise<any> {
    return this.pizzasRepository.query(`
    INSERT INTO funcoes
    (nome)
    VALUES
    ('${cargo.nome}');
    `);
  }

  updateCargo(cargo: any): Promise<any> {
    return this.pizzasRepository.query(`
    UPDATE 
    funcoes
    SET
      nome = '${cargo.nome}'
    WHERE
    id = ${cargo.id};
    `);
  }

  deleteCargo(id: number): Promise<any> {
    return this.pizzasRepository.query(`
    DELETE FROM
    funcoes
    WHERE
    id = ${id};
    `);
  }

  // MARCAS
  async findAllMarcas(): Promise<any[]> {
    const tipos = await this.pizzasRepository.query(`
    SELECT
    *
    FROM
    marcas
    `);
    return tipos;
  }

  createMarca(marca: any): Promise<any> {
    return this.pizzasRepository.query(`
    INSERT INTO marcas
    (nome)
    VALUES
    ('${marca.nome}');
    `);
  }

  updateMarca(marca: any): Promise<any> {
    return this.pizzasRepository.query(`
    UPDATE 
    marcas
    SET
      nome = '${marca.nome}'
    WHERE
    id = ${marca.id};
    `);
  }

  deleteMarca(id: number): Promise<any> {
    return this.pizzasRepository.query(`
    DELETE FROM
    marcas
    WHERE
    id = ${id};
    `);
  }
}
