import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Margin } from "@mui/icons-material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, for example, send data to a server
  };

  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact ItaFood !!</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
          beatae ducimus magni nobis culpa praesentium velit expedita quae,
          corrupti, pariatur inventore laboriosam consectetur modi impedit
          error, repudiandae obcaecati doloribus.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      maxWidth: "400px",
                      margin: "0 auto",
                      textAlign: "center",
                    }}
                  >
                    <TextField
                      name="name"
                      label="Name"
                      value={formData.name}
                      onChange={handleFormChange}
                      fullWidth
                      style={{ marginBottom: "20px" }}
                    />
                    <TextField
                      name="email"
                      label="Email"
                      value={formData.email}
                      onChange={handleFormChange}
                      fullWidth
                      style={{ marginBottom: "20px" }}
                    />
                    <TextField
                      name="message"
                      label="Message"
                      value={formData.message}
                      onChange={handleFormChange}
                      fullWidth
                      multiline
                      style={{ marginBottom: "20px" }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      style={{ display: "block", margin: "0 auto",  backgroundColor: "goldenrod"}}
                    >
                      Send
                    </Button>
                  </form>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
