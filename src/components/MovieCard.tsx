import { Card, CardActions, Typography, Button, CardContent, Badge, IconButton } from "@mui/material";
import { ThumbUp, ThumbDown } from "@mui/icons-material";

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
        <Typography>{title}</Typography>
        <Typography>{category}</Typography>
      </CardContent>
      <CardActions>
        <Badge badgeContent={likes} color="success">
          <IconButton onClick={onToggleLike} disabled={disliked} color="success">
            <ThumbUp />
          </IconButton>
        </Badge>
        <Badge badgeContent={dislikes} color="warning">
          <IconButton onClick={onToggleDislike} disabled={liked} color="warning">
            <ThumbDown/>
          </IconButton>
        </Badge>
      </CardActions>
      <CardActions>
        <Button onClick={onDeleteMovie}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
