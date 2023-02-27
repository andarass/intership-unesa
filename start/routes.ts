/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'
import { Response } from '@adonisjs/core/build/standalone'

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})

Route
  .resource('user', 'UserController')
  .only(['index', 'show'])
  .apiOnly()

  Route.get('/users', async ({ response }) => {
    const users = await User.all()
    return response.json(users)
  })

  Route.group(() => {
    Route.post('users', 'UsersController.store')
  })

  
  
