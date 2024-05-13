import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from './Usuario';

@Entity('Profesion', { schema: 'profesional' })
export class Profesion {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_profesion' })
  idProfesion: number;

  @Column('varchar', { name: 'nombre', length: 255 })
  nombre: string;

  @ManyToMany(() => Usuario, (usuario) => usuario.profesions)
  @JoinTable({
    name: 'Usuario_has_Profesion',
    joinColumns: [
      { name: 'Profesion_id_profesion', referencedColumnName: 'idProfesion' },
    ],
    inverseJoinColumns: [
      { name: 'Usuario_id_usuario', referencedColumnName: 'id' },
    ],
    schema: 'profesional',
  })
  usuarios: Usuario[];
}
