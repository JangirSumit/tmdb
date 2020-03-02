import React, { Component } from "react";
import "../App.css";

class ItemTile extends Component {
  render() {
    return (
      <div className="item poster card">
        <div className="image_content">
          {this.props.data.poster_path ? (
            <img
              className="poster fade lazyautosizes lazyloaded"
              src={
                this.props.data.poster_path &&
                `https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.data.poster_path}`
              }
            />
          ) : (
            <div className="no-image">No Image</div>
          )}
        </div>
        <div className="info">
          <div className="wrapper">
            <div className="flex">
              <a
                id={`movie_${this.props.data.id}`}
                className="title result"
                href={`/movie/${this.props.data.id}?language=en-US`}
                title={this.props.data.title}
                alt={this.props.data.title}
              >
                {this.props.data.title}
              </a>
              <span>{this.props.data.release_date}</span>
            </div>
          </div>

          <p className="overview">{this.props.data.overview}</p>
        </div>
      </div>
    );
  }
}

export default ItemTile;
