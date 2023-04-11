import { Typography, Box} from "@mui/material";
const Header = ({ title, subtitle }) => {
  return (
    <Box mb="30px" backgroudColor="#141b2d" >
      <Typography
        variant="h2"
        color="#e0e0e0"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color="#e0e0e0">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;