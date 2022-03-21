import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";
import Divider from "@mui/material/Divider";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SourceIcon from "@mui/icons-material/Source";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import "../App.css";

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
          <Fade {...TransitionProps} timeout={2000}>
            {/* <Card>
             
              <Box
                className="p-5"
                sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Box>
            </Card> */}
            <Paper sx={{ width: 250, maxWidth: "100%" }}>
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <QuestionMarkIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>General Enquiry</ListItemText>
                  {/* <Typography variant="body2" color="text.secondary">
                    ⌘X
                  </Typography> */}
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <GroupAddIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Creating Account</ListItemText>
                  {/* <Typography variant="body2" color="text.secondary">
                    ⌘C
                  </Typography> */}
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Help Desk</ListItemText>
                  {/* <Typography variant="body2" color="text.secondary">
                    ⌘V
                  </Typography> */}
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>X-100 Enterprise</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <LocalPoliceIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>About Arm Officer</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <SupportAgentIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Customer Care</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <SourceIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Source Branch</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <ProductionQuantityLimitsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Product Description</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <MoreHorizIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Status</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Account Number</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <Grid
          className="absolute bottom-0 right-0 cursor-pointer"
          sx={{ width: 250, maxWidth: "100%" }}
        >
          <Card
            style={{ backgroundColor: "#323f54", color: "white" }}
            className="p-2 border-2 shadow-xl shadow-black font-bold"
            onClick={handleClick("top")}
          >
            &nbsp; Knowledge Database &nbsp; <MenuBookIcon fontSize="large" style={{backgroundColor: "blue", borderRadius: "100px", padding: "2px"}} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
