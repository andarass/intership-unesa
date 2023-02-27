import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User';

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
       {
         name: 'Allen Walker',
         phone:'087771312756',
         status: true,
         role: 'Admin'
          },
        {
          name: 'Alison Middleford',
          phone:'084441312756',
          status: true,
          role: 'Admin'
          },
        {
          name: 'Alicia Murrton',
          phone:'087771311234',
          status: false,
          role: 'PPL'
        },
        {
          name: 'Chen Xiaoshi',
          phone:'087771312345',
          status: true,
          role: 'PPL'
          },
      ])
    }}
