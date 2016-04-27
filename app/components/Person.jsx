import React, { Component } from 'react'

export default class Person extends Component{
	render(){
		const { name, age } = this.props

		return (
			<div>
				<span>姓名:</span>
		        <span>{name}</span>
		        <span> 年龄:</span>
		        <span>{age}</span>
			</div>
		)
	}
}