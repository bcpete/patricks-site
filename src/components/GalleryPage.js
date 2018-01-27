import React from 'react';
import PhotoGallery from '../components/PhotoGallery';

class GalleryPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      finishedWorkVisible: true,
      inProgressVisible: false,
      finishedPhotos: [
        {
          src: '/images/bullets.jpg',
          width: 4,
          height: 3,
        }
      ],
      inProgressPhotos: [
        {
          src: '/images/bullets.jpg',
          width: 4,
          height: 3,
        }
      ]
    };
    this.showFinishedWork = this.showFinishedWork.bind(this);
    this.showInProgress = this.showInProgress.bind(this);
  };

  showFinishedWork = () => {
    this.setState((prevState) => ({ 
      finishedWorkVisible: true,
      inProgressVisible: false
    }));
  };

  showInProgress = () => {
    this.setState((prevState) => ({
      finishedWorkVisible: false,
      inProgressVisible: true
    }));
  };

  render(){
    return (
      <div>
        <button onClick={this.showFinishedWork}>
          Finished Works
        </button>
        <button onClick={this.showInProgress}>
          Works In Progress
        </button>
        <div>
          {this.state.finishedWorkVisible ? <PhotoGallery photos={this.state.finishedPhotos}/> : <PhotoGallery photos={this.state.inProgressPhotos} />}
        </div>
      </div>
    );
  };
};

export default GalleryPage;