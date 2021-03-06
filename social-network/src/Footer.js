import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthorImage from './AuthorImage';
import PostedDate from './PostedDate';
import Minutes from './Minutes';
import Bookmark from './Bookmark';
import "./Footer.css";

class Footer extends Component {

  static propTypes = {
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isMediumMember: PropTypes.bool.isRequired
    }),
    postedDate: PropTypes.string.isRequired,    // "2018-03-27T07:00:00.000Z"
    minutesToRead: PropTypes.number.isRequired
  }

  indicateMediumMember (flag) {
    if (flag) {
      return <p>_____</p>
    } else {
      return null
    }
  }

  render() {
    const footerStyle = {
      // backgroundColor: "green",
      verticalAlign: "bottom"
      // fontSize: "18pt"
    }

    const authorNameStyle = {
      fontWeight: "bold"
    }

    return (
      <div style={footerStyle}>
        <div className="row">
          <div className="footerColumn">
            {this.indicateMediumMember(this.props.author.isMediumMember)}
            <AuthorImage author={this.props.author}/>
          </div>
          <div className="footerColumn2">
            <div>
              <p style={authorNameStyle}>{this.props.author.name}</p>
            </div>
            {/* <p>{this.props.postedDate}  {this.props.minutesToRead} min read</p> */}
            <p><PostedDate postedDate={this.props.postedDate}/> &#183; <Minutes minutesToRead={this.props.minutesToRead}/></p>
          </div>
          <div className="footerColumn3">
            <Bookmark/>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
