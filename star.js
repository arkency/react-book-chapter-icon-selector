import Icon from 'react-fa'

class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: 'star-o' };
  }

  render () {
    return (
      <a>
        <Icon name={this.state.label} />
      </a>
    )
  }
}

export default Star
