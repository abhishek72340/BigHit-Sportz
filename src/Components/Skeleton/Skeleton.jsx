import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Media() {
  return (
    <Grid container>
      <Grid item container xs={12}>
        {Array.from(new Array(8)).map((_, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Box sx={{ width: "100%", padding: 1 }}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: 200 }}
              />
              <Box sx={{ pt: 1 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default function Loading() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Media />
    </Box>
  );
}
