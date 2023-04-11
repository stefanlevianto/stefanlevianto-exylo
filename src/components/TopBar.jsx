import { Box, IconButton} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';


const Topbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2} backgroundColor="#141b2d">
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor="#1F2A40"
        borderRadius="3px"
      >
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton>
          <AccountCircleIcon style={{fill:'#ffffff' ,fontSize:'50px'}} alignBox="center" />
        </IconButton>
        <Typography variant="h4" alignSelf={'center'} color="#ffffff" >Hello, User!</Typography>
      </Box>
    </Box>
  );
};

export default Topbar;