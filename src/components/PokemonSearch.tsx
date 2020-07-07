import React, { Component } from 'react'
import User from '../interfaces/User.interface'

interface SearchState {
  name: string,
  numberOfAbilities: number,
  baseExperience: number,
  imageUrl: string
}

export class PokemonSearch extends Component<User> {
  pokemonRef: React.RefObject<HTMLInputElement>
  constructor(props: User) {
    super(props)
    this.state = {
      name: '',
      numberOfAbilities: null,
      baseExperience: null,
      imageUrl: ''
    }
    this.pokemonRef = React.createRef()
  }

  render() {
    const {name, numberOfPokemons} = this.props
    return (
      <div>
        <p>User {name} {numberOfPokemons && <span>has {numberOfPokemons} pokemons</span>}</p>
        <input type="text" ref={this.pokemonRef}/>
        <button onClick={this.onSearchClick} className='btn'>Search</button>
      </div>
    )
  }
}

export default PokemonSearch
