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
              alt=""
            />
          ) : (
            <div className="no-image">No Image</div>
          )}
        </div>
        <div className="info">
          <div className="wrapper">
          <div className="flex p-tag">{parseInt(this.props.data.vote_average)*10}<small>%</small></div>
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
              <span><small>{this.props.data.release_date}</small></span>
            </div>
          </div>

          <p className="overview">
            {this.props.data.overview.length > 200
              ? this.props.data.overview.substring(0, 200) + "..."
              : this.props.data.overview}
              <br/>
              <span><b>Original Language</b>: <small>{this.props.data.original_language && this.props.langs.find(l=>l.iso_639_1 === this.props.data.original_language).english_name}</small></span>
          </p>
          <div style={{textAlign:"left"}}>
            {this.props.data.genre_ids.length ?  this.props.data.genre_ids.map(gid=><span key={gid} className="g-tag">{this.props.g.genres.find(a=>a.id===gid).name}</span>):""}
          </div>
        </div>
      </div>
    );
  }
}

export default ItemTile;
