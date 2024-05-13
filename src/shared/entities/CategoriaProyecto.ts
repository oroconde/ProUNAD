import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProyectoCategoria } from './ProyectoCategoria';

@Entity('CategoriaProyecto', { schema: 'profesional' })
export class CategoriaProyecto {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_categoria' })
  idCategoria: number;

  @Column('varchar', { name: 'nombre', nullable: true, length: 255 })
  nombre: string | null;

  @OneToMany(
    () => ProyectoCategoria,
    (proyectoCategoria) => proyectoCategoria.idCategoria2,
  )
  proyectoCategorias: ProyectoCategoria[];
}
