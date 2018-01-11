import React from 'react';

class GalleryPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      visible: false
    };
  };

  onVisibilityChange = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render(){
    return (
      <div>
        <h1>Gallery</h1>
        <button onClick={this.onVisibilityChange}>
          {this.state.visible ? 'See Final Products' : 'See Progress Pictures'}
        </button>
        <div>
          {this.state.visible ? 'Me workin on shit' : 'My finished shit'}
        </div>
      </div>
    );
  };
};

export default GalleryPage;