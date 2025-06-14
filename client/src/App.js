import { useEffect, useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import SocialMediaABI from "./SocialMedia.json";

const contractAddress = "0xb96aC38CA4199255f09325E507F6EFE04B1A9ac7";

function App() {
  const [posts, setPosts] = useState([]);
  const [description, setDescription] = useState("");
  const [imageHash, setImageHash] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const provider = new BrowserProvider(window.ethereum);
    const contract = new Contract(contractAddress, SocialMediaABI.abi, provider);

    const count = await contract.postCount();
    const postList = [];
    for (let i = 1; i <= Number(count); i++) {
      const post = await contract.posts(i);
      postList.push(post);
    }
    setPosts(postList);
  };

  const createPost = async () => {
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(contractAddress, SocialMediaABI.abi, signer);

    const tx = await contract.createPost(imageHash, description);
    await tx.wait();
    alert("Post created!");
    fetchPosts();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>DecentraGram (Local)</h1>

      <input
        type="text"
        placeholder="IPFS Hash"
        onChange={(e) => setImageHash(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={createPost}>Create Post</button>

      <hr />

      {posts.map((post) => (
        <div key={post.id.toString()}>
          <p><strong>{post.description}</strong></p>
          <img
            src={`https://ipfs.io/ipfs/${post.imageHash}`}
            alt="IPFS content"
            width="300"
          />
          <p>Posted by: {post.author}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

