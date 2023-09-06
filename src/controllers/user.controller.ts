import { type Request, type Response } from 'express'

export class UserController {
  static async signup (_: Request, res: Response) {
    res.status(201).send({ message: 'signup' })
  }

  static async signin (_: Request, res: Response) {
    res.status(200).send({ message: 'signin' })
  }
}
