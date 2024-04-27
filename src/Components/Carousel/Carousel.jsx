import { useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "../../Hooks/useCart";
import { useNavigate } from "../../Hooks/useNavigate";
import { useTheme } from "@mui/material/styles";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel(props) {
  const { productDetail } = props;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = productDetail?.images?.length || 0;

  const { addToWishlist, isWishlist } = useCart();
  const navigate = useNavigate();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1, margin: "auto" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 5,
          backgroundColor: "background.default",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            backgroundColor: "white",
            borderRadius: "50%",
            height: "3rem",
            width: "3rem",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "-5px",
            right: "-5px",
          }}
        >
          {isWishlist &&
          isWishlist?.find((item) => item.id === productDetail?.id) ? (
            <MdFavorite
              onClick={() => navigate("/wishlist")}
              style={{ cursor: "pointer", color: "#ff5555" }}
            />
          ) : (
            <MdFavoriteBorder
              className="add_fav_icon"
              onClick={() => addToWishlist(productDetail?.id)}
            />
          )}
        </div>
      </Paper>

      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {productDetail?.images?.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step}
                alt={step}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
Carousel.propTypes = {
  productDetail: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};
export default Carousel;
