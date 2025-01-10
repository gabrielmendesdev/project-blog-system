import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'posts',
})
export class Post extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  title: string

  @Column
  author: string

  @Column
  description: string

  @Column
  content: string

  @Column
  deletedAt: Date
}
