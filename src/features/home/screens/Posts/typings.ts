export type PostDataType = {
    id: string;
    profileImgUrl: string;
    profileName: string;
    timeline: Array<string>;
    reaction: string;
    postText: string;
    commentCount?: number;
}