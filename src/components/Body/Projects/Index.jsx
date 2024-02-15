"use client";

import Container from "@/styles/styled/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import { useEffect, useState } from "react";
import { useNotionData } from "../../../hooks/useNotionData";

import Link from "next/link";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const fetchNotionData = useNotionData();

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchNotionData(process.env.NEXT_PUBLIC_DB_PROJECTS);

      data.map((project) => {
        const title = project.properties["title"].rich_text[0].plain_text;
        const thumbnail = project.properties["thumbnail"].files[0].file.url;
        const details = project.properties["details"].rich_text[0].plain_text;
        const github = project.properties["github"].url
          ? project.properties["github"].url
          : null;
        const url = project.properties["website"].url
          ? project.properties["website"].url
          : null;

        setProjects((prevProjects) => [
          ...prevProjects,
          { title, thumbnail, details, github, url },
        ]);
      });
    };

    getProjects();
  }, []);

  return (
    <Box>
      {projects.map((project, index) => {
        return (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              boxShadow: 2,
              m: "0.5em",
              p: { xs: 0, sm: "1em" },
            }}
          >
            <Container>
              <Avatar
                alt="project thumbnail"
                src={project.thumbnail}
                sx={{
                  alignSelf: { xs: "center" },
                  height: { xs: "100%", sm: 150 },
                  width: { xs: "100%", sm: 250 },
                  borderRadius: "2%",
                  boxShadow: 5,
                  ":hover": {
                    sm: {
                      transform: "scale(1) translate(10px, -5%)",
                      height: "100%",
                      width: "100%",
                      transition: "transform 1s, width 0.25s, height 0.5s",
                      zIndex: 1,
                    },
                  },
                }}
              />
            </Container>
            <Container>
              <Box sx={{ flexDirection: "column" }}>
                <Typography sx={{ mb: 2, fontWeight: 600 }} variant="h3">
                  {project.title}
                </Typography>
                <Divider
                  sx={{
                    my: 2,
                    maxWidth: { xs: "100%", sm: "50%" },
                  }}
                />
                <Typography variant="body1">{project.details}</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
                  <Box sx={{ mr: 2 }}>
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Link>
                    )}
                  </Box>
                  <Box>
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </Link>
                    )}
                  </Box>
                </Box>
              </Box>
            </Container>
          </Card>
        );
      })}
    </Box>
  );
}
