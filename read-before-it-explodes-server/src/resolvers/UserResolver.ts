import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { User } from '../entity/User'

@Resolver()
export class UserResolver {

  @Mutation(() => Boolean)
  async createUser(
    @Arg('username') username: string
  ) {
    await User.insert({ username })
    return true
  }

  @Query(() => [User])
  async getUsers() {
    return await User.find()
  }
}