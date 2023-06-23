import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@mui/material";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  async function sendTweet(e) {
    e.preventDefault();
    const newTweet = {
      displayName: "Elon Musk",
      username: "elonmusk",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "data:image/jpeg;base64,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",
    };
    await addDoc(collection(db, "posts"), newTweet);
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
