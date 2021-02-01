import { Component } from 'react'
import Service from '../../services/service'


class Display extends Component{
  constructor(props) {
    super(props);
    this.client = new Service();
    this.state = {
      data: [],

    }
  }

  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  render() {
    return (
      <div>
        ChNGES
        {JSON.stringify(this.state.data)}
      </div>
    )
  }
}

export default Display