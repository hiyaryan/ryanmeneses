"use client";

import Container from "@/styles/styled/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNotionData } from "../../hooks/useNotionData";

export default function About() {
  const [about, setAbout] = useState([]);
  const fetchNotionData = useNotionData();

  useEffect(() => {
    const getAbout = async () => {
      const data = await fetchNotionData(process.env.NEXT_PUBLIC_DB_ABOUT).then(
        (data) => data[0].properties
      );

      const about = data["paragraph"].rich_text[0].plain_text.split("\n\n");

      setAbout(about);
    };

    getAbout();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignSelf: "center",
        width: { xs: "100%", sm: "80%" },
      }}
    >
      <Container>
        {about.length !== 0 && (
          <Typography variant="h2" fontWeight="600">
            About Me
          </Typography>
        )}
      </Container>
      <Container>
        <Box height={{ md: "35vh" }} overflow="auto" mb={2}>
          {about.map((line, index) => {
            return (
              <Typography key={index} variant="body1" mb={2}>
                {line}
              </Typography>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
