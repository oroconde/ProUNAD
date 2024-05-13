import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from './Usuario';

@Entity('Rol', { schema: 'profesional' })
export class Rol {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_rol' })
  idRol: number;

  @Column('varchar', { name: 'nombre', nullable: true, length: 255 })
  nombre: string | null;

  @ManyToMany(() => Usuario, (usuario) => usuario.rols)
  @JoinTable({
    name: 'Usuario_has_Rol',
    joinColumns: [{ name: 'Rol_id_rol', referencedColumnName: 'idRol' }],
    inverseJoinColumns: [
      { name: 'Usuario_id_usuario', referencedColumnName: 'id' },
    ],
    schema: 'profesional',
  })
  usuarios: Usuario[];
}
