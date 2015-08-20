import Icon from 'react-fa'

class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: 'star-o', lastClickedTimeoutId: null };
    this.labelClicked = this.labelClicked.bind(this);
    this.labelClicked2SecondsAgo = this.labelClicked2SecondsAgo.bind(this);
  }

  labelClicked() {
    const currentLabel  = this.state.label;
    const currentLabelIndex = this.props.labels.indexOf(this.state.label);
    let nextLabelIndex;
    if (currentLabelIndex != 0 && !this.state.lastClickedTimeoutId) {
      nextLabelIndex = 0;
    } else {
      nextLabelIndex = (currentLabelIndex+1) % this.props.labels.length;
    }
    const nextLabel = this.props.labels[nextLabelIndex];
    
    clearTimeout(this.state.lastClickedTimeoutId);
    const timeoutId = setTimeout(this.labelClicked2SecondsAgo, 2000);

    this.setState({ label: nextLabel, lastClickedTimeoutId: timeoutId });
  }

  labelClicked2SecondsAgo() {
    this.setState({lastClickedTimeoutId: null});
    if (this.props.onChange) {
      this.props.onChange(this.state.label);
    }
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
