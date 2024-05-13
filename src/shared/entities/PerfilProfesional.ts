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
@Entity('PerfilProfesional', { schema: 'profesional' })
export class PerfilProfesional {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_perfil' })
  idPerfil: number;

  @Column('int', { name: 'id_usuario', nullable: true })
  idUsuario: number | null;

  @Column('varchar', { name: 'titulo', nullable: true, length: 255 })
  titulo: string | null;

  @Column('text', { name: 'descripcion', nullable: true })
  descripcion: string | null;

  @Column('text', { name: 'experiencia', nullable: true })
  experiencia: string | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.perfilProfesionals, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_usuario', referencedColumnName: 'id' }])
  idUsuario2: Usuario;
}
