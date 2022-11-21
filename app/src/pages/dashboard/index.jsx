import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/global/Header";

const Dashboard = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      ></Box>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard"></Header>
    </Box>
  );
};

export default Dashboard;
