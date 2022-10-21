import { Box, Button, Grid, Heading, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import CommentsABI from "../artifacts/contracts/Comments.sol/Comments.json";

const Comments = ({ signer }) => {
  const [comments, setComments] = useState(null);
  const [topic, setTopic] = useState("");
  const contract = new ethers.Contract(
    "0xF05965ec71624b8Fb06E971c0D9509756b70E524",
    CommentsABI.abi,
    signer
  );

  const handleGetComments = async (topic) => {
    let commentsArray = await contract?.getComments(topic);
    setComments(commentsArray);
  };

  return (
    <>
      <Heading textAlign={"center"}>Search Comments</Heading>
      <Box textAlign={"center"} w="100%" p={4} color="white">
        <Grid>
          <Input
            placeholder="Topic"
            onChange={(e) => setTopic(e.target.value)}
          />
        </Grid>
        <Button onClick={() => handleGetComments(topic)} marginTop="4">
          Get Comments
        </Button>

        {comments && comments != "" && (
          <Box margin={4}>
            {comments?.map((comment) => (
              <Box
                key={comment}
                marginTop={6}
                bgColor="#2C2A2A"
                borderRadius="16"
                textAlign={"left"}
                p={4}
                fontSize="xs"
              >
                <Heading fontSize="xl" marginBottom={1}>
                  {comment[3]}
                </Heading>
                <Grid color="#ACA9A2">
                  <p>{comment[2]}</p>
                </Grid>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Comments;
