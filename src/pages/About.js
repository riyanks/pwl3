import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Selamat datang di Itano!</Typography>
        <p>
          Kami adalah sebuah perusahaan kuliner yang didedikasikan untuk membawa
          cita rasa otentik Italia yang lezat ke meja makan Anda dengan
          nilai-nilai halal yang kuat. Dengan lebih dari sepuluh tahun
          pengalaman dalam menghadirkan kuliner Italia, kami dengan bangga
          mempersembahkan hidangan-hidangan terbaik dari dapur Italia yang
          memadukan tradisi kuliner dengan bahan-bahan pilihan.
        </p>
        <br />
        <p>
          Misi kami adalah untuk memberikan pengalaman kuliner Italia yang tak
          terlupakan dengan rasa yang autentik, tanpa mengorbankan kualitas dan
          integritas. Kami menggunakan bahan-bahan segar dan bermutu tinggi, dan
          semua hidangan kami dipersiapkan dengan cinta dan perhatian yang
          mendalam.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
