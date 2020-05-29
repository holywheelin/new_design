import React from 'react';
import data from './popup.json';

const Show = ({ title, url, isOpen, onMouseOver }) => (
  <div>
      <p onMouseOver={onMouseOver}>{title}</p>
      {isOpen && <iframe src={url}/>}
  </div>
);

class Popuptube extends React.Component {

  constructor(props){
    super(props);
    this.json = data;
      this.state={
        openIds: []
      }
      this.handleChange = this.handleChange.bind(this);
  };
  handleChange(id){
    let { openIds } = this.state;
    openIds = openIds.includes(id) ? openIds.filter(e => e !== id) : [...openIds, id];
    this.setState({ openIds });
  }
  render(){
    return(
      <div>
        {this.json.map(q => (
          <Show
            key={q.id}
            title={q.title}
            url={q.url}
            isOpen={this.state.openIds.includes(q.id)}
            onMouseOver={() => { this.handleChange(q.id); }}
          />
        ))}
      </div>
    )
  }
};
export default Popuptube;