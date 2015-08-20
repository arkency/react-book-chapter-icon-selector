import Icon from 'react-fa'

class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: 'star-o' };
    this.labelClicked = this.labelClicked.bind(this);
  }

  labelClicked() {
    const currentLabelIndex = this.props.labels.indexOf(this.state.label);
    const nextLabelIndex = (currentLabelIndex+1) % this.props.labels.length;
    const nextLabel = this.props.labels[nextLabelIndex];
    this.setState({ label: nextLabel });
  }

  render () {
    return (
      <a onClick={this.labelClicked}>
        <Icon name={this.state.label} />
      </a>
    )
  }
}

Star.defaultProps = {
  labels: [
    'star-o', 
    'star', 
    'star-half-empty', 
    'exclamation-circle', 
    'check', 
    'question-circle', 
    'exclamation-triangle',
    'plane',
    'soccer-ball-o'
  ]
}

export default Star
