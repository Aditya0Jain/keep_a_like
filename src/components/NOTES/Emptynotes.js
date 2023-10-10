import { LightbulbOutlined as Lightbulb } from "@mui/icons-material";
import { Typography, Box, styled } from "@mui/material";

const Light = styled(Lightbulb)`
  font-size: 120px;
  color: #f5f5f5;
`;

const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px; // Corrected the typo here
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center; // Corrected the typo here
  margin-top: 20vh;
`;

const EmptyNotes = () => {
  return (
    <Container>
      <Light />
      <Text>Your Notes will appear here</Text>
    </Container>
  );
};

export default EmptyNotes;
