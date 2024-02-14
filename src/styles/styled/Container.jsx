// Styled Box component
import Box from '@mui/material/Box';

export default function Container({ children }) {
    return (
        <Box sx={{
            m: 2,
            p: 2,
        }}>
            {children}
        </Box>
    );
}