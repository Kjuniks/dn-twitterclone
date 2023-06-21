import React from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input placeholder="What's happening?" type="text" />
          <input placeholder="Enter image URL" type="text" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
