import React, { Component } from 'react'
import Person from './Person'

export default class FormBox extends Component{
	
	constructor(props){
		super(props)
		this.state = {
			name:'',
			age:'',
			persons:[]
		}
	}

	_handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	 _handleClick(){
	 	const { age, name } = this.state

	 	this.setState({
	 		name:'',
	 		age: '',
	 		persons: this.state.persons.concat([{age: age, name: name}]) 
	 	})
	 }

	render(){
		const { name, age, persons } = this.state

		return (
			<div>
				<span>姓名:</span><input value={name} name="name" onChange={this._handleChange.bind(this)}></input>
	            <span>年龄:</span><input value={age} name="age" onChange={this._handleChange.bind(this)}></input>
	            <input type="button" onClick={this._handleClick.bind(this)} value="确认"></input>
	            {persons.map((person,index)=>(
	              <Person key={index} name={person.name} age={person.age}></Person>
	            ))}
			</div>
		)
	}
}