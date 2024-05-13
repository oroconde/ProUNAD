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
@Entity('Habilidad', { schema: 'profesional' })
export class Habilidad {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_habilidad' })
  idHabilidad: number;

  @Column('int', { name: 'id_usuario', nullable: true })
  idUsuario: number | null;

  @Column('varchar', { name: 'nombre', nullable: true, length: 255 })
  nombre: string | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.habilidads, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_usuario', referencedColumnName: 'id' }])
  idUsuario2: Usuario;
}
