import React, { Component } from 'react'
import User from '../interfaces/User.interface'

interface SearchState {
  name: string,
  numberOfAbilities: number,
  baseExperience: number,
  imageUrl: string,
  error: boolean
}

export class PokemonSearch extends Component<User, SearchState> {
  pokemonRef: React.RefObject<HTMLInputElement>
  constructor(props: User) {
    super(props)
    this.state = {
      name: '',
      numberOfAbilities: 0,
      baseExperience: 0,
      imageUrl: '',
      error: false
    }
    this.pokemonRef = React.createRef()
  }

  onSearchClick = () => {
    const inputValue = this.pokemonRef.current.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
      .then(res => {
        if(res.status !== 200){
          this.setState({error: true})
          return
        }

        res.json().then(data => {
          this.setState({
            error: false,
            name: data.name,
            numberOfAbilities: data.abilites.length,
            baseExperience: data.base_experience,
            imageUrl: data.sprites.front_default
          })
        })
      })
  }

  render() {
    const {name: userName, numberOfPokemons} = this.props
    const {name, numberOfAbilities, baseExperience, imageUrl, error} = this.state

    let resultMarkup

    if (error) {
      resultMarkup = <p>Pokemon not found, please try again</p>
    }

    return (
      <div>
        <p>User {userName} {numberOfPokemons && <span>has {numberOfPokemons} pokemons</span>}</p>
        <input type="text" ref={this.pokemonRef}/>
        <button onClick={this.onSearchClick} className='btn'>Search</button>
        {resultMarkup}
      </div>
    )
  }
}

export default PokemonSearch
