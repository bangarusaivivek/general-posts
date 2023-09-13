// modules
import { useEffect, useMemo, useState } from "react";
// components
import { CreatePostCard } from "../../components/Posts/CreatePostCard";
import { PostCard } from "../../components/Posts/PostCard";
import { Backdrop } from "src/components/Backdrop";
import { Signup } from "../../components/Signup";
import { Login } from "../../components/Login";
// constants
import { EmojisUrl } from "src/util/constants";
import { samplePostData } from "./constants";
//styles
import styles from "./Posts.module.scss";
// typings
import { PostDataType } from "./typings";

const Posts = () => {
  const [showModal, setShowModal] = useState("");
  const [postsData, setPostsData] = useState<Array<PostDataType>>([]);

  useEffect(() => {
    setPostsData(samplePostData);
  }, []);

  const handleClick = () => {
    setShowModal("signup");
  };

  const getPostsJSX = useMemo(() => {
    return postsData.map((item) => {
      let timelineText = item.timeline[0];
      if (item.timeline.length > 1) {
        for (let i = 1; i < item.timeline.length; i++) {
          timelineText += ` • ${item.timeline[i]}`;
        }
      }
      const postCardProps = {
        ...item,
        timelineText,
        onPress: handleClick,
        reactionUrl: EmojisUrl[item.reaction],
      };

      return (
        <div key={item.id} className={styles.postCardWrapper}>
          <PostCard {...postCardProps} />
        </div>
      );
    });
  }, [postsData]);

  return (
    <>
      {showModal ? (
        <Backdrop>
          {showModal === "signup" ? (
            <Signup
              onClickContinue={setShowModal}
              onClose={() => setShowModal("")}
            />
          ) : (
            <Login
              onClickContinue={setShowModal}
              onClose={() => setShowModal("")}
            />
          )}
        </Backdrop>
      ) : null}
      <div
        className={`${styles.container} ${
          showModal ? styles.scrollHidden : ""
        }`}
      >
        <div className={styles.mainContainer}>
          <div className={styles.title}>Hello Jane</div>
          <div className={styles.subTitle}>
            How are you doing today? Would you like to share something with the
            community 🤗
          </div>
          <div className={styles.postCardWrapper}>
            <CreatePostCard title="Create Post" onPress={handleClick} />
          </div>
          {getPostsJSX}
        </div>
      </div>
    </>
  );
};

export default Posts;
