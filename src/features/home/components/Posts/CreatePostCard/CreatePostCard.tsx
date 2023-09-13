// modules
import { useState } from "react";
// components
import { MessageIcon } from "src/components/Icon";
import { Button } from "src/components/Button";
// styles
import styles from "./CreatePostCard.module.scss";
// typings
import { CreatePostCardProps } from "./typings";

const CreatePostCard = (props: CreatePostCardProps) => {
  const { title, onPress, placeholder = "How are you feeling today?" } = props;

  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.cardContainer} onClick={onPress}>
      <div className={styles.hTitle}>{title}</div>
      <div className={styles.textContainer}>
        <div className={styles.iconWrapper}>
          <div className={styles.iconContainer}>
            <MessageIcon className={styles.messageIcon} />
          </div>
        </div>

        <div
          className={styles.textField}
          contentEditable="true"
          placeholder={placeholder}
          onInput={(e) => setInputValue(e.currentTarget.innerText)}
        />
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.btn}>
          <Button title="Post" />
        </div>
      </div>
    </div>
  );
};

export default CreatePostCard;
