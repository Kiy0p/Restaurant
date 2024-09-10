import Box from "@mui/material/Box";
import Image from "../../library/Image.tsx";
import OrderLink from "../../library/OrderLink.tsx";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";
import Title from "../../library/Title.tsx";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledContact id="info">
      <Title>{t("info.title")}</Title>
      <StyledInfo>
        <Box sx={{paddingRight: theme.spacing(4)}}>
          <Typography variant="h3" sx={{ whiteSpace: "pre-line" }}>
            {t("info.addressTitle")}
          </Typography>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {t("info.address")}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap={theme.spacing(1)}>
          <Typography variant="h3">{t("info.contactOrder")}</Typography>
          <Box display="flex">
            <PhoneIcon />
            <Typography>{t("info.contactPhone")}</Typography>
          </Box>
          <OrderLink
            src="resources/logo/door_dash.jpeg"
            url="https://www.doordash.com/store/restaurant-al-balad-qu%C3%A9bec-1253726/?pickup=true&utm_campaign=gpa"
          />
          <OrderLink
            src="resources/logo/skip.png"
            url="https://www.skipthedishes.com/restaurant-al-balade?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=foodorder"
          />
          <OrderLink
            src="resources/logo/uber_eats.png"
            url="https://www.ubereats.com/ca/store/albalade/Ike0fDkWTMe_nUsHEaYszg?diningMode=PICKUP&utm_campaign=place-action-link&utm_medium=organic&utm_source=google"
          />
        </Box>
        <Box sx={{paddingLeft: theme.spacing(4)}}>
          <Typography variant="h3">{t("info.openingHoursTitle")}</Typography>
          <Box display="flex">
            <Typography
              sx={{ whiteSpace: "pre-line", marginRight: theme.spacing(3) }}
            >
              {t("info.openingDays")}
            </Typography>
            <Typography sx={{ whiteSpace: "pre-line" }}>
              {t("info.openingHours")}
            </Typography>
          </Box>
        </Box>
      </StyledInfo>
      <StyledBox>
        <Image
          src={"resources/map.png"}
          width={theme.spacing(50)}
          height={theme.spacing(50)}
          sx={{ padding: "2px" }}
        ></Image>
      </StyledBox>
    </StyledContact>
  );
};

const StyledContact = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const StyledInfo = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap"
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(4),
}));

export default Info;
