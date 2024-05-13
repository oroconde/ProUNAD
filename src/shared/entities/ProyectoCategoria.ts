import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Proyecto } from './Proyecto';
import { CategoriaProyecto } from './CategoriaProyecto';

@Index('id_categoria', ['idCategoria'], {})
@Index('id_proyecto', ['idProyecto'], {})
@Entity('ProyectoCategoria', { schema: 'profesional' })
export class ProyectoCategoria {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_proyecto_categoria' })
  idProyectoCategoria: number;

  @Column('int', { name: 'id_proyecto', nullable: true })
  idProyecto: number | null;

  @Column('int', { name: 'id_categoria', nullable: true })
  idCategoria: number | null;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.proyectoCategorias, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_proyecto', referencedColumnName: 'idProyecto' }])
  idProyecto2: Proyecto;

  @ManyToOne(
    () => CategoriaProyecto,
    (categoriaProyecto) => categoriaProyecto.proyectoCategorias,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'id_categoria', referencedColumnName: 'idCategoria' }])
  idCategoria2: CategoriaProyecto;
}
