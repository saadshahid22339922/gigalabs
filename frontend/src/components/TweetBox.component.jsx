import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Divider from "@mui/material/Divider";
import { COMMON_IMAGE_PATH as image } from "../utils/constants";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

function TweetBox() {
	return (
		<Card style={{ borderRadius: 8 }}>
			<CardHeader
				avatar={
					<React.Fragment>
						<Avatar
							sizes="large"
							sx={{ bgcolor: red[500], width: 58, height: 58 }}
							aria-label="recipe"
							style={{ marginRight: 10 }}
							src={image}
						></Avatar>
						<TextField
							fullWidth
							label="What is on your mind ?"
							id="fullWidth"
							variant="standard"
							InputProps={{
								disableUnderline: true,
							}}
							style={{
								justifyItems: "left",
							}}
						/>
					</React.Fragment>
				}
				style={{ textAlign: "left" }}
			/>

			<Divider />

			<CardActions disableSpacing style={{ backgroundColor: "#ffffff" }}>
				<Button
					size="small"
					variant="contained"
					startIcon={<PermMediaIcon style={{ fontSize: 16 }} />}
					style={{ borderRadius: 15, backgroundColor: "#16181a" }}
				>
					Photo/Video
				</Button>

				<ExpandMore aria-label="show more">
					<Button variant="contained">Post It</Button>
				</ExpandMore>
			</CardActions>
		</Card>
	);
}

export default TweetBox;
