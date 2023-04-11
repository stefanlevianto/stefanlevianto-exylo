import { Box, Typography} from "@mui/material";
import Header from "../components/Header";
import Topbar from "../components/TopBar";
import StatBox from "../components/StatBox";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MyResponsiveRadialBar from "../components/CircularBar";
import { Data } from "../data/data";
const Dashboard = () => {
  return (
    <Box backgroundColor="#1F2A40">
        <Topbar></Topbar>
      {/* HEADER */}
      <Box paddingLeft="15px"display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Marketing Dashboard" subtitle="Home / Dashboard"  />
      </Box>

      {/* GRID & CHARTS */}
    <Box paddingLeft="15px" display="grid" gridTemplateColumns="repeat(12,1fr)" gridAutoRows="140px" gap="20px" >
    {/* row 1  */}
    <Box gridColumn="span 2"  display="flex" alignItems="center" justifyContent="center" backgroundColor="#141b2d" sx={{ borderRadius: '16px' }}>
      <StatBox title="Total Cost" subtitle="$31.868" icon={<DonutLargeIcon sx={{color:'#3da58a',fontSize:'50px'}}/>}/>
    
    </Box>
    
    <Box gridColumn="span 2"  display="flex" alignItems="center" justifyContent="center" backgroundColor="#141b2d" sx={{ borderRadius: '16px' }}>
      <StatBox title="Total Sales" subtitle="$66.053" icon={<EmojiEventsIcon sx={{color:'#3da58a',fontSize:'50px'}}/>}/>
    
    </Box>
    <Box gridColumn="span 2"  display="flex" alignItems="center" justifyContent="center" backgroundColor="#141b2d" sx={{ borderRadius: '16px' }}>
      <StatBox title="This Week" subtitle="$35.000,00" icon={<CalendarMonthIcon sx={{color:'#3da58a',fontSize:'50px'}}/>}/>
    
    </Box>

    <Box gridColumn="span 2"  display="flex" alignItems="center" justifyContent="center" backgroundColor="#141b2d" sx={{ borderRadius: '16px' }}>
      <StatBox title="Revenue" subtitle="$63.000K" icon={<MonetizationOnIcon sx={{color:'#3da58a',fontSize:'50px'}}/>}/>
    
    </Box>

    <Box gridColumn="span 2"  display="flex" alignItems="center" justifyContent="center" backgroundColor="#141b2d" sx={{ borderRadius: '16px' }}>
      <StatBox title="$1250" subtitle="Last Payment" icon={<AccountBalanceWalletIcon sx={{color:'#3da58a',fontSize:'50px'}}/>}/>
    
    </Box>
    {/* ROW 2 */}
    <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor="#141b2d" 
          sx={{ borderRadius: '16px' }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color="#e0e0e0"
              >
                Earnings
              </Typography>
              <MyResponsiveRadialBar data={Data}/>
            </Box>
    </Box>
    </Box>
    <Box
          gridColumn="span 2"
          gridRow="span 2"
          backgroundColor="#141b2d" 
          sx={{ borderRadius: '16px' }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color="#e0e0e0"
              >
                Orders
              </Typography>
  
            </Box>
    </Box>
    </Box>
    <Box
          gridColumn="span 2"
          gridRow="span 2"
          backgroundColor="#141b2d" 
          sx={{ borderRadius: '16px' }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color="#e0e0e0"
              >
                Profit
              </Typography>
            </Box>
    </Box>
    </Box>
    <Box
          gridColumn="span 3"
          gridRow="span 6"
          backgroundColor="#141b2d" 
          sx={{ borderRadius: '16px' }}
          marginBottom="20px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color="#e0e0e0"
              >
                Activity Overview
              </Typography>
            
            </Box>
    </Box>
    </Box>
    {/* ROW 3 */}
    <Box
          gridColumn="span 7"
          gridRow="span 3"
          backgroundColor="#141b2d" 
          sx={{ borderRadius: '16px' }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color="#e0e0e0"
              >
                Total Profit
              </Typography>
              
            </Box>
    </Box>
    </Box>
    </Box>
    </Box>
  );
};

export default Dashboard;