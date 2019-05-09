import React, {Component} from 'react';

import * as tc from 'tinycolor';

import * as tg from 'tinygradient';

class Main extends Component {

	constructor() {
		super();

		this.state = {
			text: "",
			colors: []
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(name, e) {
		const n = name;
		const val = e.target.value;
		if(n.includes("color")) {
			this.setState((state)=> {
				state.colors[parseInt(n.replace("color",""))] = val;
				return state;
			})
		} else {
			this.setState((state) => {
				state[n] = val;
				return state;
			})
		}
	}

	async handleSubmit(e) {
		e.preventDefault();
		var st = this.state;

		var txt = st.text.split('');
		var grad = tg(...st.colors.filter(x => x!=""));
		grad = grad.rgb(st.text.length);

		st.code = "<p>"+txt.map((l,i) =>{
			return (l == "\n" ? "<br/>" : `<span style="color: #${grad[i].toHex()}">${l}</span>`)
		}).join("")+"</p>";

		this.setState(state => {
			state = st;
			return state;
		});
	}

	render() {
		return (
			<div className="App-container">
	        	<div className="App-section">
					<p>Text:</p>
					<textarea rows="10" cols="50" onChange={(e)=>this.handleChange("text",e)}value={this.state.text}></textarea>
				</div>
				<div className="App-section">
					<p>Colors:</p>
					<form onSubmit={this.handleSubmit}>
						<input type="text" onChange={(e)=>this.handleChange("color0",e)} name="color0" value={this.state.colors[0]}/>
						<br/>
						<input type="text" onChange={(e)=>this.handleChange("color1",e)} name="color1" value={this.state.colors[1]}/>
						<br/>
						<input type="text" onChange={(e)=>this.handleChange("color2",e)} name="color2" value={this.state.colors[2]}/>
						<br/>
						<input type="text" onChange={(e)=>this.handleChange("color3",e)} name="color3" value={this.state.colors[3]}/>
						<br/>
						<input type="text" onChange={(e)=>this.handleChange("color4",e)} name="color4" value={this.state.colors[4]}/>
						<br/>
						<button type="submit">go!</button>
					</form>
				</div>
				<div className="App-section">
				<p>Preview: </p>
				<div className="App-preview" dangerouslySetInnerHTML={{__html: this.state.code}}></div>
				</div>
				<div className="App-section">
					<p>Code: </p>
					<textarea rows="10" cols="50" value={this.state.code}></textarea>
				</div>
	      	</div>
		)
	}

}

export default Main;