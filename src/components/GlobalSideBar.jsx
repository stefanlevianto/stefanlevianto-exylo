import { useState } from "react";
import { Sidebar, Menu,MenuItem } from "react-pro-sidebar";
import { Box, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PieChartIcon from "@mui/icons-material/PieChartOutlineOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
const GlobalSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box display= "flex" height= "100%" >
      <Sidebar collapsed={isCollapsed} backgroundColor="#1F2A40">
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
     
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography  variant="h4" color="#ffffff">
                  <RocketLaunchIcon style={{ fontSize:'50px', paddingRight:'20px',fill: '#FF8300', paddingTop:'20px' }}/>
                  Inter-act
                </Typography>
              </Box>
           
    
          <Box color={'#ffffff'} fontSize="20px" >
            <MenuItem title="Home" style={{marginTop:'20px'}}
              icon={<HomeIcon style={{fill: '#70d8bd'}} />}>Home</MenuItem>
            
            <MenuItem
              title="Reports" style={{marginTop:'20px'}}
              icon={<PieChartIcon style={{fill: '#70d8bd'}} />}
            >Reports </MenuItem>
            <MenuItem
              title="Notifications" style={{marginTop:'20px'}}
              icon={<NotificationsIcon style={{fill: '#70d8bd'}}/>}

            >Notifications</MenuItem>
            <MenuItem
              title="Settings" style={{marginTop:'20px'}}
              icon={<SettingsIcon style={{fill: '#70d8bd'}}/>}
            > Settings</MenuItem>
            <MenuItem
              title="Log out" style={{marginTop:'20px'}}
              icon={<LogoutIcon style={{fill: '#70d8bd'}}/>}
            >Log out</MenuItem>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default GlobalSidebar;