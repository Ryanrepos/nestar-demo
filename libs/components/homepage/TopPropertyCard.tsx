import { Box, Divider, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopPropertyCard = () => {
    return (
        <Stack className="top-card-box">
            <Box
                className={"card-img"}
                style={{
                    backgroundImage: `url("/img/banner/types/apartment.webp")`,
                }}
            >
                <div>$200000</div>
            </Box>
            <Box className={"info"}>
                <strong className="title">Songdo, Incheon</strong>
                <p className="desc">Sushi</p>
                <div className={"options"}>
                    <div>
                        <img src="/img/icons/bed.svg" alt="" />
                        <span>5 bed</span>
                    </div>
                    <div>
                        <img src="/img/icons/room.svg" alt="" />
                        <span>7 rooms</span>
                    </div>
                    <div>
                        <img src="/img/icons/expand.svg" alt="" />
                        <span>350 m2</span>
                    </div>
                </div>

                <Divider sx={{ mt: "15px", mb: "17px" }} />
                <div className={"bott"}>
                    <p>Rent/Barter</p>
                    <div className={"view-like-box"}>
                        <IconButton color={"default"}>
                            <RemoveRedEyeIcon />
                        </IconButton>
                        <Typography className="view-cnt">300</Typography>
                        <IconButton color={"default"}>
                            <FavoriteIcon style={{ color: "red" }} />
                        </IconButton>
                        <Typography className="view-cnt">400</Typography>
                    </div>
                </div>
            </Box>
        </Stack>
    );
};

export default TopPropertyCard;