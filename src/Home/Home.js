import React, { Component } from 'react';
import data from "./recipe";
import {Navbar, Alignment, Button, NumericInput, InputGroup} from "@blueprintjs/core";
import "./Home.css";
import RecipeCard from '../components/RecipeCard/RecipeCard';

class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: data.recipes,
      cals: null,
      name: null,
      prep: null,
      cat: null
    }

    this.searchCalories = this.searchCalories.bind(this)
    this.searchName = this.searchName.bind(this)
    this.searchCategory = this.searchCategory.bind(this)
    this.searchPrep = this.searchPrep.bind(this)
  }

  searchCalories(event){
    this.setState({cals: event})
  }

  searchName(event){
    this.setState({name: event.target.value})
  }

  searchCategory(event){
    this.setState({cat: event.target.value})
  }

  searchPrep(event){
    this.setState({prep: event})
  }

  filterCals(){
    const arr = this.state.data.filter(x => x.calories <= this.state.cals)
    this.setState({data: arr})
  }

  filterName(){
    const arr = this.state.data.filter(x => x.title.toLowerCase().includes(this.state.name.toLowerCase()))
    this.setState({data: arr})
  }

  filterPrep(){
    const arr = this.state.data.filter(x => x.prepTime <= this.state.prep)
    this.setState({data: arr})
  }

  filterCat(){
    const arr = this.state.data.filter(x => x.recipeCategory === this.state.cat)
    this.setState({data: arr})
  }

  clearState(){
    this.setState({
      data: data.recipes,
      cals: '',
      name: '',
      prep: '',
      cat: ''
    })
  }

  async filterParams(){
    if(this.state.cals) await this.filterCals()
    if(this.state.name) await this.filterName()
    if(this.state.prep) await this.filterPrep()
    if(this.state.cat) await this.filterCat()
  }


  render(){
    return(
      <div class = "container">
        <div class = "inner">
          <Navbar>
              <Navbar.Group align={Alignment.LEFT}>

                  <InputGroup
                    value = {this.state.name}
                    leftIcon="search"
                    onChange={this.searchName}
                    placeholder="search by name..."
                    />

                    <Navbar.Divider />


                  <NumericInput
                  value = {this.state.cals}
                  allowNumericCharactersOnly = {true}
                  majorStepSize = {100}
                  min = {0}
                  placeholder="search by max calories..."
                  onValueChange={this.searchCalories}
                  />

                  <Navbar.Divider />

                  <NumericInput
                  value = {this.state.prep}
                  allowNumericCharactersOnly = {true}
                  majorStepSize = {5}
                  min = {0}
                  placeholder="search by max prep time..."
                  onValueChange={this.searchPrep}
                  />

                  <Navbar.Divider />

                  <div class="bp3-select">
                    <select value = {this.state.cat} onChange={this.searchCategory}>
                      <option value = {null} selected>Choose a Category</option>
                      <option value="Appetizer">Appetizer</option>
                      <option value="Entree">Entree</option>
                      <option value="Dessert">Dessert</option>
                    </select>
                  </div>

                  <Navbar.Divider />

                  <Button onClick = {() => this.filterParams()}>Search</Button>

                  <Navbar.Divider />

                  <Button onClick = {() => this.clearState()}>Clear</Button>
              </Navbar.Group>
          </Navbar>

          <div className="heading">
            <h3 class="bp3-heading">Search Results...</h3>
          </div>
          
          {results &&
            results.map(r => (
              <div className="card">
                <RecipeCard
                  data={r}
                />
              </div>
              )
            )
          }
        </div>
      </div>
    )
  }
}

export default Home;
