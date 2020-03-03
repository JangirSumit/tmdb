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
            <div className="no-image"></div>
          )}
        </div>
        <div className="info">
          <div className="wrapper">
          <div className="p-tag">{parseInt(this.props.data.vote_average)*10}<small>%</small></div>
            <div style={{display:"inline-block", textAlign:"left"}}>
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
            <span className="desc">{this.props.data.overview.length > 400
              ? this.props.data.overview.substring(0, 400) + "..."
              : this.props.data.overview}</span>
              
              <span className="lang-tile"><b>Original Language</b>: <small>{this.props.data.original_language && this.props.langs.find(l=>l.iso_639_1 === this.props.data.original_language).english_name}</small></span>
              <span className="lang-tile"><b>Popularity</b>: <small>{this.props.data.popularity}</small></span>
          </p>
          <div className="tag-wrapper" style={{textAlign:"left",position:"absolute",bottom:"15px"}}>
            {this.props.data.genre_ids.length ?  this.props.data.genre_ids.map(gid=><span key={gid} className="g-tag">{this.props.g.genres.find(a=>a.id===gid).name}</span>):""}
          </div>
        </div>
      </div>
    );
  }
}

export default ItemTile;
