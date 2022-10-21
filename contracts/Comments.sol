//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Comments {
  // Exposed data structure
  struct Comment {
    uint32 id;
    string topic;
    address creator_address;
    string message;
    uint256 created_at;
  }

  mapping(string => Comment[]) public commentsByTopic;
  uint32 private counter;
       
  // Notify users that a comment was added 
  event CommentAdded(Comment comment);


  // Fetch a list of comments for a topic 
  function getComments(string calldata _topic) public view returns(Comment[] memory) {
    Comment[] memory comments = commentsByTopic[_topic];
    return comments;
  }

  // Persist a new comment
  function addComment(string calldata _topic, string calldata _message) public {
    Comment memory comment = Comment({
        id : counter++,
        topic: _topic,
        creator_address: msg.sender,
        message: _message,
        created_at: block.timestamp
    });

    commentsByTopic[_topic].push(comment);
    emit CommentAdded(comment);
  }

}