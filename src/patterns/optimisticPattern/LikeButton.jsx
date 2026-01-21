import React, { useOptimistic, useState,startTransition } from "react";

const LikeButton = ({ postId, initailLikes = 0 }) => {
  const [like, setLike] = useState(initailLikes);

  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    like,
    (currentLikes, delta) => currentLikes + delta,
  );

  const handleLike = async () => {
    // Apply optimistic change immediately
    addOptimisticLike(1);

    // start server call
    try {
      await sendLikeToServer(postId);

      setLike((prev) => prev + 1);
    } catch (err) {
      console.log("Like Failed:", err);
      setLike(s=>s)
    }
  };

  async function sendLikeToServer(postId) {
    // simulate a network call

    await new Promise((r) => setTimeout(r, 2000));
    if(Math.random<0.2) throw new Error("Network Failed")
    console.log(`Sent a like for the postId ${postId}`);

    return { scuess: true };
  }
  return (
    <>
      <button
        className="px-8 py-3 rounded-xl border-none  bg-amber-300 "
        onClick={() => startTransition(async () => handleLike())}
      >
        ❤️ {optimisticLikes}
      </button>
    </>
  );
};

export default LikeButton;
