import React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

import MdPhone from "@mui/icons-material/Phone";

import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function BasicSpeedDial() {
  return (
    <Box sx={{ height: 50, transform: "translateZ(50px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", top: 100, right: -166 }}
        direction="down"
        icon={
          <SpeedDialIcon icon={<MdPhone />} openIcon={<PhoneEnabledIcon />} />
        }
      >
        <SpeedDialAction
          icon={<LinkedInIcon />}
          tooltipTitle="LinkedIn"
          tooltipOpen
        />
        <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" tooltipOpen />
        <SpeedDialAction
          icon={<PrintIcon />}
          tooltipTitle="Print"
          tooltipOpen
        />
        <SpeedDialAction
          icon={<ShareIcon />}
          tooltipTitle="Share"
          tooltipOpen
        />
      </SpeedDial>
    </Box>
  );
}

export default BasicSpeedDial;
