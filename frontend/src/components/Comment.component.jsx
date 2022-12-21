import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { COMMON_IMAGE_PATH as image } from "../utils/constants";

function Comment() {
	const getIcons = ({ name = "", icon = null }) => {
		return (
			<IconButton aria-label="add to favorites">
				{icon === "favourite" ? <FavoriteIcon /> : null}
				{icon === "edit" ? <EditIcon /> : null}
				{icon === "delete" ? <DeleteIcon /> : null}
				{icon ? <icon /> : null}
				<Typography variant="body1" color="text.primary" marginLeft={1}>
					{name}
				</Typography>
			</IconButton>
		);
	};
	return (
		<Grid container style={{ padding: 4, paddingTop: 5 }}>
			<Grid xs={1} sm={1} md={1} style={{ paddingLeft: 3, marginTop: 3 }}>
				<Avatar
					sx={{ bgcolor: red[500], height: 45, width: 45 }}
					aria-label="recipe"
					style={{ marginRight: 10 }}
					src={image}
				></Avatar>
			</Grid>
			<Grid xs={10} sm={10} md={10}>
				<CardContent style={{ backgroundColor: "#dae1ea", borderRadius: 9 }}>
					<Grid container>
						<Grid xs={2} sm={2} md={2}>
							<Typography
								variant="body1"
								color="text.primary"
								textAlign={"left"}
								style={{ fontWeight: "900" }}
							>
								Patrick Shuff
							</Typography>
						</Grid>
						<Grid xs={10} sm={10} md={10}>
							<Typography
								variant="body2"
								color="text.primary"
								textAlign={"right"}
							>
								1 min ago
							</Typography>
						</Grid>

						<Grid xs={12} sm={12} md={12}>
							<Typography
								textAlign={"left"}
								style={{ color: "#3b71ce" }}
								variant="body2"
							>
								Professional-Student
							</Typography>
						</Grid>

						<Grid xs={12} sm={12} md={12}>
							<Typography textAlign={"left"}>
								Testing the new post/comments
							</Typography>
						</Grid>
					</Grid>

					<Grid container>
						<Grid>|{getIcons({ name: "0 Likes", icon: null })}</Grid>
						<Grid md={2}>|{getIcons({ name: "Like", icon: "favourite" })}</Grid>
						<Grid md={2}>|{getIcons({ name: "Edit", icon: "edit" })}</Grid>
						<Grid md={2}>| {getIcons({ name: "Delete", icon: "delete" })}</Grid>
					</Grid>
				</CardContent>
			</Grid>
		</Grid>
	);
}

export default Comment;
