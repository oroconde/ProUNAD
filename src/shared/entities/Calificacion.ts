import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from './Usuario';
import { Proyecto } from './Proyecto';

@Index('id_proyecto', ['idProyecto'], {})
@Index('id_usuario', ['idUsuario'], {})
@Entity('Calificacion', { schema: 'profesional' })
export class Calificacion {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_calificacion' })
  idCalificacion: number;

  @Column('int', { name: 'id_usuario', nullable: true })
  idUsuario: number | null;

  @Column('int', { name: 'id_proyecto', nullable: true })
  idProyecto: number | null;

  @Column('int', { name: 'calificacion', nullable: true })
  calificacion: number | null;

  @Column('text', { name: 'comentario', nullable: true })
  comentario: string | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.calificacions, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_usuario', referencedColumnName: 'id' }])
  idUsuario2: Usuario;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.calificacions, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_proyecto', referencedColumnName: 'idProyecto' }])
  idProyecto2: Proyecto;
}
