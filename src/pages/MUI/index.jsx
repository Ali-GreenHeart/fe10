import { Box, Button, Checkbox, Typography } from "@mui/material"
import { green, indigo } from "@mui/material/colors"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Slider from "./Slider";

const MuiPage = ({ }) => {
    return (
        <div>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{ color: 'green' }} />} />
            <Slider />
            <Button
                variant="contained"
            >Click me</Button>
            <Button
                variant="contained"
            >Click me</Button>
            <Button
                variant="contained"
                style={{
                    backgroundColor: indigo[700]
                }}
            >Click me2</Button>
            <Box
                sx={{
                    border: '1px solid',
                    // "& > a": {
                    //     color: { xs: 'red', md: 'green', sm: 'gold' }
                    // }
                }}
            >
                <Typography color="primary" component="a" href="#">link1</Typography>
                <Typography component="a" href="#">link2</Typography>
                <Typography component="a" href="#">link3</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: { lg: 'space-between', md: 'center', xs: 'start' }
            }}>
                <Typography component="h1">salamh1</Typography>
                <Typography component="h3">salamhh3</Typography>
                <Typography component="h4">salamh4</Typography>
                <Typography component="h3">salamhh3</Typography>
            </Box>
            {/* div - Box */}
            {/* div+flex - Stack */}
            {/* div+grid - Grid */}
            {/* h1-h6, p, span - Typography */}
        </div>
    )
}
export default MuiPage
