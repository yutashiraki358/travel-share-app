import { Post as PostModel } from "../../models/post";
import {
  CardWrap,
  StyledPhoto,
  Title,
  Location,
  Description,
  Actions,
  ActionButton,
  CreateAt,
} from "../../styles/CardStyles";
import { FaCommentAlt, FaThumbsUp, FaRegEye } from "react-icons/fa";
import { formatDate } from "../../utils/formatDate";

interface PostProps {
  post: PostModel;
}

const Card = ({ post }: PostProps) => {
  const { title, location, image, text, createdAt, updatedAt } = post;

  let createdUpdatedText: string;
  if (updatedAt > createdAt) {
    createdUpdatedText = "Updated" + formatDate(updatedAt);
  } else {
    createdUpdatedText = "Created" + formatDate(createdAt);
  }
  return (
    <div style={{ color: "#fff" }}>
      <CardWrap>
        <StyledPhoto src={image} alt="" />
        <CreateAt>{createdUpdatedText}</CreateAt>
        <Title>{title}</Title>
        <Location>{location}</Location>
        <Description>{text}</Description>
        <Actions>
          <ActionButton>
            <FaCommentAlt />0 Comments
          </ActionButton>
          <ActionButton>
            <FaThumbsUp />0 Likes
          </ActionButton>
          <ActionButton>
            <FaRegEye />0 Views
          </ActionButton>
        </Actions>
      </CardWrap>
    </div>
  );
};

export default Card;
