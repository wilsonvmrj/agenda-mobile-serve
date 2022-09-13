'use strict'

const User = use("App/Models/User")

class UserController {
  async show({ auth }) {



    console.log(auth.user.id)
    const { username, email, curso, modealidade, cidade } = await User.findOrFail(auth.user.id)
    // const user = await User.findOrFail(auth.user.id)

    const user = { username, email, curso, modealidade, cidade }



    return user

  }
  async create({ request }) {
    const data = request.only(["username", "email", "password", "cpf", "cidade", "endereco", "cep", "polo", "modalidade", "area", "curso"])

    const user = await User.create(data)

    return user
  }


}

module.exports = UserController
