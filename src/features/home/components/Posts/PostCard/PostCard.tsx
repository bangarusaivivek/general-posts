// components
import {
  CommentIcon,
  DotsIcon,
} from "src/components/Icon";
// styles
import styles from "./PostCard.module.scss";
// typings
import { PostCardProps } from "./typings";


const PostCard = (props: PostCardProps) => {
  const {
    profileName,
    profileImgUrl,
    reactionUrl,
    onPress,
    commentCount,
    timelineText,
    postText,
  } = props;

  return (
    <div className={styles.cardContainer} onClick={onPress}>
      <div className={styles.topContainer}>
        <img src={profileImgUrl} className={styles.profileImg} alt="" />
        <div className={styles.postInfoContainer}>
          <div className={styles.profileName}>{profileName}</div>
          <div className={styles.timeline}>{timelineText}</div>
        </div>
        <DotsIcon className={styles.dotsIcon} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.iconWrapper}>
          <div className={styles.iconContainer}>
            <img src={reactionUrl} className={styles.icon} alt="" />
          </div>
        </div>
        <div className={styles.textField}>{postText}</div>
      </div>
      {commentCount ? (
        <div className={styles.commentContainer}>
          <CommentIcon className={styles.commentIcon} />
          <div className={styles.comment}>{`${commentCount} comment${
            commentCount > 1 ? "s" : ""
          }`}</div>
        </div>
      ) : null}
    </div>
  );
};

export default PostCard;
