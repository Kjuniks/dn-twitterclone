import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Denis Nikšić{" "}
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" /> @kjuniks
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              veniam qui, molestias soluta earum omnis quae neque suscipit.
              Officiis, ullam! Eveniet, debitis maiores? Reprehenderit odio
              accusamus, atque ullam dolor non.
            </p>
          </div>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Croatian_Flags_during_the_Statehood_Day_%282007%29.jpg"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
