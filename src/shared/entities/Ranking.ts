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
@Entity('Ranking', { schema: 'profesional' })
export class Ranking {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id_ranking' })
  idRanking: number;

  @Column('int', { name: 'id_usuario', nullable: true })
  idUsuario: number | null;

  @Column('int', { name: 'ranking', nullable: true })
  ranking: number | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.rankings, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'id_usuario', referencedColumnName: 'id' }])
  idUsuario2: Usuario;
}
