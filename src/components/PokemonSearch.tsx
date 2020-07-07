import React, { Component } from 'react'
import User from '../interfaces/User.interface'

export class PokemonSearch extends Component<User> {
  render() {
    const {name, numberOfPokemons} = this.props
    return (
      <div>
        <p>User {name} has {numberOfPokemons} pokemons</p>
      </div>
    )
  }
}

export default PokemonSearch
