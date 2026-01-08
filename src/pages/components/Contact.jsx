import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Contact = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 8 },
        background: "linear-gradient(135deg, #f7f6f3, #efece6)",
      }}
    >
      <Grid container maxWidth="lg" mx="auto" spacing={8} alignItems="flex-start">
        {/* LEFT SIDE */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="overline"
            sx={{ color: "#9c7a4c", letterSpacing: 2 }}
          >
            CONTACT US
          </Typography>

          <Typography variant="h3" fontWeight={700} sx={{ mt: 1, mb: 2 }}>
            Let’s Create Something <br /> Meaningful Together
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 460, mb: 4, lineHeight: 1.7 }}
          >
            Whether you’re a buyer, artisan, or collaborator — we’re always
            happy to connect. Reach out and let’s start a conversation.
          </Typography>

          <Stack spacing={3}>
            <Stack direction="row" spacing={2} alignItems="center">
              <EmailOutlinedIcon sx={{ color: "#9c7a4c" }} />
              <Typography>support@artisanalley.com</Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <PhoneOutlinedIcon sx={{ color: "#9c7a4c" }} />
              <Typography>+91 98765 43210</Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <LocationOnOutlinedIcon sx={{ color: "#9c7a4c" }} />
              <Typography>India</Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* RIGHT SIDE FORM */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }} >
          <Paper
            sx={{
              width: "100%",
              maxWidth: 500,
              p: { xs: 4, md: 5 },
              borderRadius: 5,
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
              textAlign: "left"
            }}
          >
            <Typography variant="h5" fontWeight={600} mb={1}>
              Send us a message
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
              We’ll get back to you as soon as possible.
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Stack spacing={3}>
              <TextField label="Full Name" fullWidth />

              <TextField label="Email Address" type="email" fullWidth />

              <TextField label="Message" multiline rows={4} fullWidth />

              <Button
                variant="contained"
                size="large"
                endIcon={<SendRoundedIcon />}
                sx={{
                  mt: 1,
                  py: 1.5,
                  borderRadius: 3,
                  fontSize: "1rem",
                  background: "linear-gradient(135deg, #9c7a4c, #b08d57)",
                  boxShadow: "0 10px 25px rgba(156,122,76,0.35)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #8a6a3f, #9c7a4c)",
                  }
                }}
              > 
                Send Message
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
