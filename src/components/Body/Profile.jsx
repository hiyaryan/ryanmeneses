'use client';

import Container from '@/styles/styled/Container';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import { useNotionData } from '../../hooks/useNotionData';
import { useEffect, useState } from 'react';
import CoffeeOutlinedIcon from '@mui/icons-material/CoffeeOutlined';
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';

export default function Profile() {
    const [profilePicture, setProfilePicture] = useState("");
    const [fullName, setFullName] = useState("");
    const [profession, setProfession] = useState("");
    const [location, setLocation] = useState("");
    const [tagline, setTagline] = useState("");
    const [isFetching, setIsFetching] = useState(true);
    const fetchNotionData = useNotionData();

    const profilePictureStyles = profilePicture !== "" ? {
        alignSelf: { xs: "center" },
        height: { xs: "70%", sm: 400 },
        width: { xs: "100%", sm: 250 },
        borderRadius: "0%",
        boxShadow: { xs: 5, md: 10 },
    } : {};

    useEffect(() => {
        const getAbout = async () => {
            const data = await fetchNotionData(process.env.NEXT_PUBLIC_DB_PROFILE);

            const profilePicture = data["profilePicture"].files[0].file.url;
            const fullName = data["fullName"].rich_text[0].plain_text;
            const profession = data["profession"].rich_text[0].plain_text;
            const location = data["location"].rich_text[0].plain_text;
            const tagline = data["tagline"].rich_text[0].plain_text;

            setProfilePicture(profilePicture);
            setFullName(fullName);
            setProfession(profession);
            setLocation(location);
            setTagline(tagline);
            setIsFetching(false);
        };

        getAbout();
    }, []);

    return (
        <>
            {isFetching ?
                <Box sx={{
                    display: "flex",
                    ml: "auto",
                    mr: "auto",
                    height: '90vh',
                }}>
                    <CoffeeMakerOutlinedIcon sx={{
                        fontSize: 40,
                        alignSelf: "center",
                    }} />
                    <CircularProgress
                        size={80}
                        thickness={2}
                        sx={{
                            alignSelf: "center",
                            ml: -7.4,

                        }} />
                </Box>
                :
                <Fade in={true} timeout={2000}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Container>
                            <Fade in={true} timeout={5000}>
                                <Avatar
                                    alt="Ryan Meneses"
                                    src={profilePicture}
                                    sx={profilePictureStyles}
                                />
                            </Fade>
                        </Container>
                        {profilePicture !== "" && <CoffeeOutlinedIcon
                            sx={{
                                fontSize: { sm: "medium" },
                                alignSelf: { xs: "center", sm: "flex-end" },
                                mb: { sm: 4 },
                            }} />}
                        <Container>
                            <Typography variant="h1" mb={2}>
                                {fullName}
                            </Typography>
                            <Typography variant="h2" mb={2}>
                                {profession}
                            </Typography>
                            <Typography variant="h4" mb={2}>
                                {location}
                            </Typography>
                            <Typography variant="body1" mb={2}>
                                {tagline}
                            </Typography>
                        </Container>
                    </Box>
                </Fade>
            }
        </>
    );
}