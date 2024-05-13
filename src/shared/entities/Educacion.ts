import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from './Usuario';

@Index('id_usuario', ['idUsuario'], {})
@Entity('Educacion', { schema: 'profesional' })
export class Educacion {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_educacion' })
  idEducacion: number;

  @Column('int', { name: 'id_usuario', nullable: true })
  idUsuario: number | null;

  @Column('varchar', { name: 'institucion', nullable: true, length: 255 })
  institucion: string | null;

  @Column('varchar', { name: 'titulo', nullable: true, length: 255 })
  titulo: string | null;

  @Column('text', { name: 'descripcion', nullable: true })
  descripcion: string | null;

  @Column('date', { name: 'fecha_inicio', nullable: true })
  fechaInicio: string | null;

  @Column('date', { name: 'fecha_fin', nullable: true })
  fechaFin: string | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.educacions, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_usuario', referencedColumnName: 'id' }])
  idUsuario2: Usuario;
}
