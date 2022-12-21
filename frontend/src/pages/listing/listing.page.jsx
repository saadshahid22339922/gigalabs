import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import TweetBox from "../../components/TweetBox.component";
import Comment from "../../components/Comment.component";
import AvatarCustom from "../../components/Avatar.component";

import { COMMON_IMAGE_PATH as image } from "../../utils/constants";

export default function Listing() {
	const getCard = () => {
		return (
			<Card style={{ borderRadius: 8 }}>
				<CardHeader
					avatar={<AvatarCustom customStyle={{ height: 45, width: 45 }} />}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="Patrick Shuff"
					subheader="1 min ago"
					style={{ textAlign: "left" }}
				/>

				<CardContent>
					<Typography
						variant="body1"
						color="text.primary"
						style={{ textAlign: "left" }}
					>
						This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along with
						the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing style={{ backgroundColor: "#F7F7F7" }}>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
						<Typography variant="body1" color="text.primary" marginLeft={1}>
							Like
						</Typography>
					</IconButton>
					<IconButton aria-label="share">
						<CommentIcon />
						<Typography variant="body1" color="text.primary" marginLeft={1}>
							Comments
						</Typography>
					</IconButton>
				</CardActions>
				<Collapse in={true} timeout="auto" unmountOnExit>
					<Grid container style={{ padding: 4, paddingTop: 15 }}>
						<Grid xs={2} sm={2} md={1} style={{ paddingLeft: 3, marginTop: 3 }}>
							<Avatar
								sx={{ bgcolor: red[500], height: 45, width: 45 }}
								aria-label="recipe"
								style={{ marginRight: 10 }}
								src={image}
							></Avatar>
						</Grid>
						<Grid xs={9} sm={9} md={10}>
							<TextField
								multiline={true}
								fullWidth
								label="Add a comment"
								id="fullWidth"
								size="medium"
								InputProps={{
									disableUnderline: true,
								}}
							/>
						</Grid>
					</Grid>

					<Comment />
					<Comment />
				</Collapse>
			</Card>
		);
	};

	return (
		<Grid container>
			<Grid
				item
				xs={1}
				sm={3}
				md={3}
				container
				style={{ backgroundColor: "#dae0e9" }}
			></Grid>
			<Grid
				item
				xs={10}
				sm={6}
				md={6}
				container
				style={{ backgroundColor: "#dae0e9" }}
			>
				<Grid
					item
					style={{
						height: "100%",
						overflowY: "auto",
						overflowX: "hidden",
						// overflowY: "hidden",
						marginTop: 10,
					}}
				>
					<Stack spacing={3}>
						{/* {getEnterTweet()} */}
						<TweetBox />
						{getCard()}
						{getCard()}
						{getCard()}
					</Stack>
				</Grid>
			</Grid>

			<Grid
				item
				xs={1}
				sm={3}
				md={3}
				container
				style={{ backgroundColor: "#dae0e9" }}
			></Grid>
		</Grid>
	);
}
