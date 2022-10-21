const { Textarea, Button, Input, Heading, Grid } = require("@chakra-ui/react");
import { ethers } from "ethers";
import CommentsABI from "../artifacts/contracts/Comments.sol/Comments.json";
import { useState } from "react";

const AddComments = ({ signer }) => {
  const [topic, setTopic] = useState("");
  const [comment, setComment] = useState("");

  const contract = new ethers.Contract(
    "0xF05965ec71624b8Fb06E971c0D9509756b70E524",
    CommentsABI.abi,
    signer
  );

  const handleComment = async () => {
    console.log(topic, comment);
    await contract.addComment(topic, comment);
    setTopic("");
    setComment("");
  };

  return (
    <>
      <Heading textAlign={"center"} marginTop="10">
        Add Comment
      </Heading>
      <Input
        placeholder="Topic"
        onChange={(e) => setTopic(e.target.value)}
        marginTop="4"
      />
      <Textarea
        placeholder="Add a comment"
        onChange={(e) => setComment(e.target.value)}
        marginTop="2"
      />
      <Grid display={"flex"} justifyContent={"flex-end"} marginTop="2">
        <Button onClick={handleComment}>Add Comment</Button>
      </Grid>
    </>
  );
};

export default AddComments;
