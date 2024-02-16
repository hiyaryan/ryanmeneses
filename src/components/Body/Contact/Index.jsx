"use client";

import Container from "@/styles/styled/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PeopleIcon from "@mui/icons-material/People";
import Link from "next/link";
import Fade from "@mui/material/Fade";

import { useNotionData } from "../../../hooks/useNotionData";

import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";

export default function Contact() {
  const [contacts, setContacts] = useState([]);
  const fetchNotionData = useNotionData();

  const socials = {
    GitHub: <GitHubIcon />,
    LinkedIn: <LinkedInIcon />,
    Instagram: <InstagramIcon />,
  };

  useEffect(() => {
    const getContact = async () => {
      const data = await fetchNotionData(process.env.NEXT_PUBLIC_DB_CONTACT);

      data.map((contact) => {
        const title = contact.properties["Name"].title[0].plain_text;
        const note = contact.properties["note"].rich_text[0].plain_text;
        const fullName = contact.properties["fullName"].rich_text[0].plain_text;
        const role = contact.properties["role"].rich_text[0].plain_text;
        const email = contact.properties["email"].email;
        const social = contact.properties["social"].rich_text[0].plain_text;
        const url = contact.properties["url"].url;
        const preview = contact.properties["preview"].files[0].file.url;

        setContacts((prevContacts) => [
          ...prevContacts,
          { title, note, fullName, role, email, social, url, preview },
        ]);
      });
    };

    getContact();
  }, []);

  const cardStyle = {
    display: "flex",
    justifyContent: "center",
    borderRadius: 2,
    width: { xs: "100%", sm: "90%" },
    p: { xs: 4, sm: 6 },
    boxShadow: 5,
  };

  const LinkWithPreview = ({ url, preview }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={url}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <Fade in={isHovering} timeout={1000}>
            <Avatar
              alt="preview"
              src={preview}
              sx={{
                position: "absolute",
                width: { xs: 250, sm: 400 },
                height: { xs: 150, sm: 250 },
                zIndex: 1,
                boxShadow: 5,
                borderRadius: 2,
                transform: {
                  xs: "translate(60px, -110%)",
                  md: "translate(110px, -110%)",
                },
              }}
            />
          </Fade>
        )}
        <Typography variant="body2" sx={{ textAlign: "left" }}>
          {url}
        </Typography>
      </Link>
    );
  };

  const ContactCard = ({
    title,
    note,
    fullName,
    role,
    email,
    social,
    url,
    preview,
  }) => {
    return (
      <Card sx={cardStyle}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            m: 2,
            width: { xs: "100%", sm: "70%" },
            textAlign: "center",
            height: { xs: "100%" },
          }}
        >
          <Typography
            variant="h1"
            mb={3}
            sx={{
              whiteSpace: "normal",
              overflowX: "hidden",
              overflowY: "auto",
              wordWrap: "break-word",
            }}
          >
            {title}
          </Typography>
          <Typography variant="body1" textAlign="left">
            {note}
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography
            variant="h2"
            sx={{ fontWeight: 600, mb: 3, letterSpacing: "0.15em" }}
          >
            Contact
          </Typography>
          <Typography variant="h3" sx={{ textAlign: "left", mb: 1 }}>
            {fullName}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "left", mb: 3 }}>
            {role}
          </Typography>
          <EmailIcon />
          <Link href={`mailto:${email}`} passHref>
            <Typography variant="body2" sx={{ textAlign: "left", mb: 3 }}>
              {email}
            </Typography>
          </Link>
          {socials[social] ? socials[social] : <PeopleIcon />}
          <LinkWithPreview url={url} preview={preview} />
        </Box>
      </Card>
    );
  };

  return (
    <Container>
      <Grid container>
        {contacts.map((contact, index) => {
          return (
            <Grid item key={index} xs={12} sm={6}>
              <Box
                sx={{
                  mb: { xs: 2, sm: 4 },
                  mt: { xs: 2, sm: 4 },
                }}
              >
                <ContactCard
                  title={contact.title}
                  note={contact.note}
                  fullName={contact.fullName}
                  role={contact.role}
                  email={contact.email}
                  social={contact.social}
                  url={contact.url}
                  preview={contact.preview}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
