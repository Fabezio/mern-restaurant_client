import {Component} from 'react'
import axios from "axios"

const userRoute = "http://localhost:4000/meals"

export default class Meals extends Component {
    render () {
        let meals = ['ex #1', "hello"]
        
        return (<div>

        <h1>
            {meals.length ? meals.map((meal, i) => <div key={i}>{meal}</div>) : "data coming soon, please wait..." }
                 


        </h1>
        <NewMeal />  
        </div>
        )
        
}
}

class NewMeal extends Component {
    state = {
        input: "",
        submit: "",
        meals: []
    }
    handleInput(e) {
        return this.setState({input: e.target.value})
    }
    handleKeydown(e) {
        if(e.key === 'Enter') {
            console.log(e.key)
            this.setState({submit: this.state.input})
            axios.post(`${userRoute}/add`)
            .then((req, res)=> {
                console.log(req, res)
            })
            this.getUser()
        }
    }
    componentDidMount() {
        this.getUser()

    }
        

        
    getUser () {
        axios(userRoute).then(res=> {
            // console.log(res)
            console.log(res.data)
            this.setState({meals: res.data})

        })

    }
    render() {
        return (
            <div>
        <input value={this.state.input} onKeyDown={this.handleKeydown.bind(this)} onChange={this.handleInput.bind(this)} placeholder="new meal" />
        <div>{this.state.meals.map(({username},i)=> <div key={i} >{username}</div> )}</div>
        <div>{}</div>

                </div>
        )}
    }
