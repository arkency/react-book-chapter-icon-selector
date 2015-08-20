import Icon from 'react-fa'

class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: 'star-o' };
    this.labelClicked = this.labelClicked.bind(this);
  }

  labelClicked(){
    this.setState({ label: 'star' });
  }

  render () {
    return (
      <a onClick={this.labelClicked} >
        <Icon name={this.state.label} />
      </a>
    )
  }
}

export default Star
