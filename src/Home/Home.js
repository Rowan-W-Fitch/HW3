import React, { Component } from 'react';
import data from "./recipe";
import {Navbar, Alignment, Button, NumericInput, InputGroup} from "@blueprintjs/core"
import "./Home.css"
class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: data.recipes
    }

    this.searchCalories = this.searchCalories.bind(this)
    this.searchName = this.searchName.bind(this)
    this.searchCategory = this.searchCategory.bind(this)
    this.searchPrep = this.searchPrep.bind(this)
  }

  searchCalories(cals){
    const arr = this.state.data.filter(x => x.calories <= cals)
    this.setState({data: arr})
  }

  searchName(name){
    const arr = this.state.data.filter(x => x.title.includes(name))
    this.setState({data: arr})
  }

  searchCategory(cat){
    const arr = this.state.data.filter(x => x.recipeCategory === cat)
    this.setState({data: arr})
  }

  searchPrep(prep){
    const arr = this.state.data.filter(x => x.prepTime <= prep)
    this.setState({data: arr})
  }


  render(){
    return(
      <div class = "container">
        <div class = "inner">
          <Navbar>
              <Navbar.Group align={Alignment.LEFT}>
                  <Navbar.Heading>Blueprint</Navbar.Heading>
                  <Navbar.Divider />

                  <InputGroup
                    leftIcon="search"
                    onChange={this.handleFilterChange}
                    placeholder="search by name..."
                    />

                  <Navbar.Divider />
                  <b>OR</b>
                  <Navbar.Divider />

                  <NumericInput
                  allowNumericCharactersOnly = {true}
                  majorStepSize = {100}
                  min = {0}
                  placeholder="search by max calories..."
                  onValueChange={this.handleValueChange}
                  />

                  <Navbar.Divider />
                  <b>OR</b>
                  <Navbar.Divider />

                  <NumericInput
                  allowNumericCharactersOnly = {true}
                  majorStepSize = {5}
                  min = {0}
                  placeholder="search by max prep time..."
                  onValueChange={this.handleValueChange}
                  />

                  <Navbar.Divider />
                  <b>OR</b>
                  <Navbar.Divider />

                  <div class="bp3-select">
                    <select>
                      <option selected>Choose a Category</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                    </select>
                  </div>
              </Navbar.Group>
          </Navbar>
          <h1 class="bp3-heading">H1 heading</h1>
        </div>
      </div>
    )
  }
}

export default Home;
