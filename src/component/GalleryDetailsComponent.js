import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestApiData } from '../action/action';

class GalleryDetailsComponent extends React.Component {
  componentDidMount() {
    const { requestApiData } = this.props;
    requestApiData();
  }

  render() {
    const { data } = this.props;
    let galleryData = [];
    for (let index = 0; index < 13; index++) {
      galleryData.push(data[index] && <img src={data[index].thumbnailUrl} alt="Image not found" />);
    }
    return (
      <div>
        <br />
        <center>
          <table>
            <tr>
              <td>{galleryData && galleryData[1]}</td>
              <td>{galleryData && galleryData[2]}</td>
              <td>{galleryData && galleryData[3]}</td>
            </tr>
            <tr>
              <td>{galleryData && galleryData[4]}</td>
              <td>{galleryData && galleryData[5]}</td>
              <td>{galleryData && galleryData[6]}</td>
            </tr>
            <tr>
              <td>{galleryData && galleryData[7]}</td>
              <td>{galleryData && galleryData[8]}</td>
              <td>{galleryData && galleryData[9]}</td>
            </tr>
            <tr>
              <td>{galleryData && galleryData[10]}</td>
              <td>{galleryData && galleryData[11]}</td>
              <td>{galleryData && galleryData[12]}</td>
            </tr>
          </table>
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GalleryDetailsComponent);
