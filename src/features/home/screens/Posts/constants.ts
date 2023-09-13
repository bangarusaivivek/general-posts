import { ProfileImage1, ProfileImage2 } from "src/assets";
import { PostDataType } from "./typings";

export const samplePostData: Array<PostDataType> = [
  {
    id: "1",
    profileImgUrl: ProfileImage1,
    profileName: "Theresa Webb",
    timeline: ["5mins ago"],
    postText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    reaction: "wave",
    commentCount: 24,
  },
  {
    id: "2",
    profileImgUrl: ProfileImage2,
    profileName: "Marvin McKinney",
    timeline: ["8mins ago", "Edited"],
    postText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    reaction: "disappointed",
    commentCount: 5,
  },
  {
    id: "3",
    profileImgUrl: ProfileImage1,
    profileName: "Theresa Webb",
    timeline: ["5mins ago"],
    postText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    reaction: "wave",
  },
  {
    id: "4",
    profileImgUrl: ProfileImage2,
    profileName: "Marvin McKinney",
    timeline: ["8mins ago", "Edited"],
    postText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    reaction: "disappointed",
    commentCount: 12,
  },
  {
    id: "5",
    profileImgUrl: ProfileImage1,
    profileName: "Theresa Webb",
    timeline: ["5mins ago"],
    postText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    reaction: "wave",
  },
  {
    id: "6",
    profileImgUrl: ProfileImage2,
    profileName: "Marvin McKinney",
    timeline: ["8mins ago", "Edited"],
    postText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    reaction: "disappointed",
    commentCount: 10,
  },
];
