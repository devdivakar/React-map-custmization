import React from 'react';
import '../../css/mapstyle.css';

class ShareMapPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { downloadType: "PNG"};
    }

    downloadMap = () => {
        this.props.onDownloadMap(this.state.downloadType);
    }

    setDownloadType = (e, downloadType) => {
        this.setState({downloadType: downloadType});
    }


    render() {
       
      return(   
           <div className = 'map-rightside map-sgare'>
                    <div className="map-sgare">
                    <span className="map-popup-close-btn">CLOSE</span>
                    <h1 className="sharemap">Share Map Popup</h1>
                    <div className="tab-content">
                        <ul className="tab-link">                            
                            <li><a href="#"><img  src={require('../../images/socialPDF.svg')}/></a></li>
                            <li><a href="#"><img  src={require('../../images/socialEmbed.svg')}/></a></li>
                            <li><a href="#"><img  src={require('../../images/socialFB.svg')}/></a></li>
                            <li><a href="#"><img  src={require('../../images/socialTwitter.svg')}/></a></li>
                            <li><a href="#"><img  src={require('../../images/socialLink.svg')}/></a></li>
                        </ul>
                        <div className="tab-inner">
                            <h3>MAP NOTES(opt)</h3>
                            <textarea placeholder="Filled-in MAP notes here"></textarea>
                            <div className="radio">
                                <input id="radio-1" name="radio" type="radio" />
                                <label htmlFor="radio-1" className="radio-label" onClick={event => this.setDownloadType(event, 'PNG')}>PNG</label>
                            </div>

                            <div className="radio">
                                <input id="radio-2" name="radio" type="radio"  />
                                <label htmlFor="radio-2" className="radio-label" onClick={event => this.setDownloadType(event, 'PDF')}>PDF Document</label>
                            </div>
                           
                        </div>
                    </div>
                    </div>
                    <div className="ftr-share-area">
                    <div className="ftr-buttons share-btn"><span className="cancel" onClick={this.props.closeShareMapPopup}>CANCEL</span><span className="Save-btn" onClick={this.downloadMap}>DOWNLOAD</span></div>
                    </div>
                </div>
      )
    }
  }

 export default ShareMapPopup;