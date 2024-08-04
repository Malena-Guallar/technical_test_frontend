import {
  Card,
  CardActions,
  Typography,
  Button,
  CardContent,
  Badge,
  IconButton,
} from "@mui/material";
import {
  ThumbUp,
  ThumbDown,
  ThumbUpAltOutlined,
  ThumbDownOffAltOutlined,
} from "@mui/icons-material";

const MovieCard = ({
  title,
  category,
  likes,
  dislikes,
  onToggleLike,
  onToggleDislike,
  liked,
  disliked,
  onDeleteMovie,
}: {
  title: string;
  category: string;
  likes: number;
  dislikes: number;
  onToggleLike: () => void;
  onToggleDislike: () => void;
  liked: boolean;
  disliked: boolean;
  onDeleteMovie: () => void;
}) => {
  return (
    <Card>
      <CardContent>
        <Typography className="font-red">{title}</Typography>
        <Typography>{category}</Typography>
      </CardContent>
      <CardActions>
        <Badge badgeContent={likes} color="success">
          {liked ? (
          <IconButton
            onClick={onToggleLike}
            disabled={disliked}
            color="success"
          >
            <ThumbUp />
          </IconButton>
        ) : (
          <IconButton
          onClick={onToggleLike}
          disabled={disliked}
          color="success"
        >
          <ThumbUpAltOutlined />
        </IconButton>
        )}
        </Badge>
        <Badge badgeContent={dislikes} color="warning">
          {disliked ? (
            <IconButton
              onClick={onToggleDislike}
              disabled={liked}
              color="warning"
            >
              <ThumbDown />
            </IconButton>
          ) : (
            <IconButton
              onClick={onToggleDislike}
              disabled={liked}
              color="warning"
            >
              <ThumbDownOffAltOutlined />
            </IconButton>
          )}
        </Badge>
      </CardActions>
      <CardActions>
        <Button onClick={onDeleteMovie}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
