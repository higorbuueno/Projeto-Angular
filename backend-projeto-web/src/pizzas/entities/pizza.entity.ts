import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pizzas')
export class Pizza {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 30})
  sabor: string;

  @Column()
  valor: number;
}
