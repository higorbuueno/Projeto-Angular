import { Funcao } from "src/app/shared/dto/funcao-dto";
import { Setor } from "src/app/shared/dto/setor-dto";

export interface Usuario {
  id: number;
  nome: string;
  funcao: Funcao;
  setor: Setor;
}