import React from "react";
import Avatar from "@mui/material/Avatar";
import { COMMON_IMAGE_PATH } from "../utils/constants";
import { red } from "@mui/material/colors";

function AvatarCustom({ customStyle, src = null }) {
	return (
		<Avatar
			sx={{ bgcolor: red[500], ...customStyle }}
			aria-label="recipe"
			src={src ? src : COMMON_IMAGE_PATH}
		></Avatar>
	);
}

export default AvatarCustom;
