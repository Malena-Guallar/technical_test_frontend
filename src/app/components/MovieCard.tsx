import { Card, CardActions, Typography, Button, CardContent, Badge, IconButton } from "@mui/material";
import { ThumbUp, ThumbDown, ThumbUpAltOutlined, ThumbDownOffAltOutlined } from "@mui/icons-material";

import clsx from "clsx";

const MovieCard = ({ className, title, category, likes, dislikes, onToggleLike, onToggleDislike, liked, disliked, onDeleteMovie,
} : {
  className?: string;
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
    <Card className={clsx(className, "w-72 flex flex-col items-center bg-white shadow-none text-black")}>
      <CardContent className="flex flex-col items-center">
        <Typography className="font-bold text-2xl">{title}</Typography>
        <Typography className="mt-2 text-sm">➪ {category}</Typography>
      </CardContent>
      <CardActions className="flex w-32 ml-4">
        <Badge badgeContent={likes}>
          {liked ? (
            <IconButton
              onClick={onToggleLike}
              disabled={disliked}
            >
              <ThumbUp />
            </IconButton>
          ) : (
            <IconButton
              onClick={onToggleLike}
              disabled={disliked}
            >
              <ThumbUpAltOutlined />
            </IconButton>
          )}
        </Badge>
        <Badge badgeContent={dislikes}>
          {disliked ? (
            <IconButton
              onClick={onToggleDislike}
              disabled={liked}
            >
              <ThumbDown />
            </IconButton>
          ) : (
            <IconButton
              onClick={onToggleDislike}
              disabled={liked}
            >
              <ThumbDownOffAltOutlined />
            </IconButton>
          )}
        </Badge>
      </CardActions>
      <CardActions className="m-0">
        <Button onClick={onDeleteMovie}>&#91;delete&#93;</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
