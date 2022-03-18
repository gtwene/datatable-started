import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Card>
              {/* <Typography sx={{ p: 2 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. 
              </Typography> */}
              <Box
                className="p-5"
                sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Box>
            </Card>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <Grid className="absolute bottom-0 right-20 m-20 cursor-pointer">
          <Card
            className="p-10 m-10 rounded border-2 shadow-xl shadow-black text-xl font-bold"
            onClick={handleClick("top")}
          >
            Knowledge Database
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
