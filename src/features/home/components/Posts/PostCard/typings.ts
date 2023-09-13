export interface PostCardProps {
    profileName: string;
    profileImgUrl: string;
    postText: string;
    onPress: () => void;
    commentCount?: number;
    timelineText: string;
    reactionUrl: string;
}