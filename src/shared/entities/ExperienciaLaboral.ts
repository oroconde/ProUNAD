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
@Entity('ExperienciaLaboral', { schema: 'profesional' })
export class ExperienciaLaboral {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_experiencia' })
  idExperiencia: number;

  @Column('int', { name: 'id_usuario', nullable: true })
  idUsuario: number | null;

  @Column('varchar', { name: 'empresa', nullable: true, length: 255 })
  empresa: string | null;

  @Column('varchar', { name: 'puesto', nullable: true, length: 255 })
  puesto: string | null;

  @Column('text', { name: 'descripcion', nullable: true })
  descripcion: string | null;

  @Column('date', { name: 'fecha_inicio', nullable: true })
  fechaInicio: string | null;

  @Column('date', { name: 'fecha_fin', nullable: true })
  fechaFin: string | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.experienciaLaborals, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_usuario', referencedColumnName: 'id' }])
  idUsuario2: Usuario;
}
