import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Calificacion } from './Calificacion';
import { Usuario } from './Usuario';
import { ProyectoCategoria } from './ProyectoCategoria';

@Index('id_usuario', ['idUsuario'], {})
@Entity('Proyecto', { schema: 'profesional' })
export class Proyecto {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_proyecto' })
  idProyecto: number;

  @Column('int', { name: 'id_usuario', nullable: true })
  idUsuario: number | null;

  @Column('varchar', { name: 'nombre', nullable: true, length: 255 })
  nombre: string | null;

  @Column('text', { name: 'descripcion', nullable: true })
  descripcion: string | null;

  @Column('date', { name: 'fecha_inicio', nullable: true })
  fechaInicio: string | null;

  @Column('date', { name: 'fecha_fin', nullable: true })
  fechaFin: string | null;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.idProyecto2)
  calificacions: Calificacion[];

  @ManyToOne(() => Usuario, (usuario) => usuario.proyectos, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_usuario', referencedColumnName: 'id' }])
  idUsuario2: Usuario;

  @OneToMany(
    () => ProyectoCategoria,
    (proyectoCategoria) => proyectoCategoria.idProyecto2,
  )
  proyectoCategorias: ProyectoCategoria[];
}
