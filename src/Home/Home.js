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
      resData: null,
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
    this.setState({resData: arr})
  }

  filterName(){
    if(this.state.resData){
      const arr = this.state.resData.filter(x => x.title.toLowerCase().includes(this.state.name.toLowerCase()))
      this.setState({resData: arr})
    }
    else{
      const arr = this.state.data.filter(x => x.title.toLowerCase().includes(this.state.name.toLowerCase()))
      this.setState({resData: arr})
    }
  }

  filterPrep(){
    if(this.state.resData){
      const arr = this.state.resData.filter(x => x.prepTime <= this.state.prep)
      this.setState({resData: arr})
    }
    else{
      const arr = this.state.data.filter(x => x.prepTime <= this.state.prep)
      this.setState({resData: arr})
    }
  }

  filterCat(){
    if(this.state.resData){
      const arr = this.state.resData.filter(x => x.recipeCategory === this.state.cat)
      this.setState({resData: arr})
    }
    else{
      const arr = this.state.data.filter(x => x.recipeCategory === this.state.cat)
      this.setState({resData: arr})
    }
  }

  clearState(){
    this.setState({
      data: data.recipes,
      resData: null,
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
        <div class = "inner">

          <div className="heading">
            <h3 class="bp3-heading">{this.state.resData ? 'Search Results...' : 'Welcome to Rowan and Enriques Recipe Site'}</h3>
          </div>

          {!this.state.resData &&
            this.state.data.map(r => (
              <div className="card">
                <RecipeCard
                  data={r}
                />
              </div>
              )
            )
          }

          {this.state.resData &&
            this.state.resData.length > 0 ?
            this.state.resData.map(r => (
              <div className="card">
                <RecipeCard
                  data={r}
                />
              </div>
              )
            )
            :
            this.state.resData? 'No Results, Please Broaden Your Search' : ''
          }
        </div>
      </div>
    )
  }
}

export default Home;
