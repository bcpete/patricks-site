import React from 'react';
import PhotoGallery from '../components/PhotoGallery';
import Footer from '../components/Footer';

class GalleryPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      finishedWorkVisible: true,
      inProgressVisible: false,
      finishedPhotos: [
        {
          src: '/images/fin/finplug2.jpg',
          width: 4,
          height: 3,
          caption: 'Wooden plugs'
        },{
          src: '/images/fin/fincut2.jpg',
          width: 4,
          height: 3,
          caption: 'Christmas gift'
        },{
          src: '/images/fin/finpen.jpg',
          width: 4,
          height: 3,
          caption: 'Wooden pen'
        },{
          src: '/images/fin/finboard2.jpg',
          width: 3,
          height: 3,
          caption: 'Cutting boards'
        },{
          src: '/images/fin/finbench.jpg',
          width: 4,
          height: 3,
          caption: 'Work Bench'
        },{
          src: '/images/fin/finburn1.jpg',
          width: 3,
          height: 3,
          caption: 'Wood burning'
        },{
          src: '/images/fin/finburn3.jpg',
          width: 3,
          height: 3,
          caption: 'Wood burning'
        },{
          src: '/images/fin/fincab1.jpg',
          width: 3,
          height: 4,
          caption: 'Cabinet'
        },{
          src: '/images/fin/finflorida.jpg',
          width: 4,
          height: 3,
          caption: 'State keychain'
        },{
          src: '/images/fin/finglass1.jpg',
          width: 4,
          height: 3,
          caption: 'Wood table with glass inlayed'
        },{
          src: '/images/fin/finocarina.jpg',
          width: 3,
          height: 4,
          caption: 'Ocarina'
        },{
          src: '/images/fin/finplug1.jpg',
          width: 4,
          height: 3,
          caption: 'Wooden plugs'
        },{
          src: '/images/fin/fintable1.jpg',
          width: 3,
          height: 4,
          caption: 'End table'
        },{
          src: '/images/fin/fintable2.jpg',
          width: 3,
          height: 4,
          caption: 'End table'
        }
      ],
      inProgressPhotos: [
        {
          src: '/images/wip/proudboi.jpg',
          width: 3,
          height: 4,
          caption: 'Cheesin'
        },{
          src: '/images/wip/wipbadge.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipbench.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipbench2.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipbench3.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipbowl.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipcut.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipguitar.jpg',
          width: 3,
          height: 4,
        },{
          src: '/images/wip/wipguitar2.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipguitar3.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipgun1.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipgun2.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipleg.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipocarina.jpg',
          width: 3,
          height: 4,
        },{
          src: '/images/wip/wipplug.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipshelf.jpg',
          width: 3,
          height: 4,
        },{
          src: '/images/wip/wiptable.jpg',
          width: 3,
          height: 4,
        },{
          src: '/images/wip/wiptable2.jpg',
          width: 3,
          height: 4,
        },{
          src: '/images/wip/wiptable3.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipwatch1.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipwatch2.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipwatch3.jpg',
          width: 4,
          height: 3,
        },{
          src: '/images/wip/wipzelda.jpg',
          width: 4,
          height: 3,
        },
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
        <div className="button-container">
          <button className="big-button" onClick={this.showFinishedWork}>
            Finished Works
          </button>
          <button className="big-button" onClick={this.showInProgress}>
            Works In Progress
          </button>
        </div>
        <div>
          {this.state.finishedWorkVisible ? <PhotoGallery photos={this.state.finishedPhotos}/> : <PhotoGallery photos={this.state.inProgressPhotos} />}
        </div>
        <Footer />
      </div>
    );
  };
};

export default GalleryPage;