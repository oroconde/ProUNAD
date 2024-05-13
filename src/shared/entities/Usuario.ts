import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Calificacion } from './Calificacion';
import { Educacion } from './Educacion';
import { ExperienciaLaboral } from './ExperienciaLaboral';
import { Habilidad } from './Habilidad';
import { PerfilProfesional } from './PerfilProfesional';
import { Proyecto } from './Proyecto';
import { Ranking } from './Ranking';
import { Profesion } from './Profesion';
import { Rol } from './Rol';

@Entity('Usuario', { schema: 'profesional' })
export class Usuario {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'nombre', nullable: true, length: 255 })
  nombre: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('varchar', { name: 'contrasena', nullable: true, length: 255 })
  contrasena: string | null;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.idUsuario2)
  calificacions: Calificacion[];

  @OneToMany(() => Educacion, (educacion) => educacion.idUsuario2)
  educacions: Educacion[];

  @OneToMany(
    () => ExperienciaLaboral,
    (experienciaLaboral) => experienciaLaboral.idUsuario2,
  )
  experienciaLaborals: ExperienciaLaboral[];

  @OneToMany(() => Habilidad, (habilidad) => habilidad.idUsuario2)
  habilidads: Habilidad[];

  @OneToMany(
    () => PerfilProfesional,
    (perfilProfesional) => perfilProfesional.idUsuario2,
  )
  perfilProfesionals: PerfilProfesional[];

  @OneToMany(() => Proyecto, (proyecto) => proyecto.idUsuario2)
  proyectos: Proyecto[];

  @OneToMany(() => Ranking, (ranking) => ranking.idUsuario2)
  rankings: Ranking[];

  @ManyToMany(() => Profesion, (profesion) => profesion.usuarios)
  profesions: Profesion[];

  @ManyToMany(() => Rol, (rol) => rol.usuarios)
  rols: Rol[];
}
