import React from "react";
import Tag from "./tag";
import "../App.css";

function ItemTile(props) {
  return (
    <div className="item poster card">
      <div className="image_content">
        {props.data.poster_path ? (
          <>
            <img
              className="show-on-wide"
              src={
                props.data.poster_path &&
                `https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.data.poster_path}`
              }
              alt=""
              style={{ width: "183px", height: "278px" }}
            />

            <img
              className="show-on-mobile"
              src={
                props.data.poster_path &&
                `https://image.tmdb.org/t/p/w500_and_h282_face${props.data.backdrop_path}`
              }
              alt=""
              style={{ width: "100%", height: "278px" }}
            />
          </>
        ) : (
          <div className="no-image"></div>
        )}
      </div>
      <div className="info">
        <div className="wrapper">
          <div className="p-tag">
            {parseInt(props.data.vote_average) * 10}
            <small>%</small>
          </div>
          <div
            style={{
              display: "inline-block",
              textAlign: "left",
              width: "calc(100% - 65px)"
            }}
          >
            <a
              id={`movie_${props.data.id}`}
              className="title result"
              href={`/movie/${props.data.id}?language=en-US`}
              title={props.data.title}
              alt={props.data.title}
            >
              {props.data.title}
            </a>
            <span>
              <small>{props.data.release_date}</small>
            </span>
          </div>
        </div>

        <p className="overview">
          <span className="desc" title={props.data.overview}>
            {props.data.overview.length > 300
              ? props.data.overview.substring(0, 300) + "..."
              : props.data.overview}
          </span>

          <span className="lang-tile">
            <b>Original Language</b>:{" "}
            <small>
              {props.data.original_language &&
                props.langs.find(
                  l => l.iso_639_1 === props.data.original_language
                ).english_name}
            </small>
          </span>
          <span className="lang-tile">
            <b>Popularity</b>: <small>{props.data.popularity}</small>
          </span>
        </p>
        <div
          className="tag-wrapper"
          style={{ textAlign: "left", position: "absolute", bottom: "15px" }}
        >
          {props.data.genre_ids.length
            ? props.data.genre_ids.map(gid => (
                <Tag genres={props.g.genres} key={gid} gid={gid} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default ItemTile;
