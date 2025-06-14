// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SocialMedia {
    uint public postCount = 0;

    struct Post {
        uint id;
        string imageHash;
        string description;
        address author;
    }

    mapping(uint => Post) public posts;

    event PostCreated(uint id, string imageHash, string description, address author);

    function createPost(string memory _imageHash, string memory _description) public {
        postCount++;
        posts[postCount] = Post(postCount, _imageHash, _description, msg.sender);
        emit PostCreated(postCount, _imageHash, _description, msg.sender);
    }

    function getPost(uint _id) public view returns (Post memory) {
        return posts[_id];
    }
}

