import { menuItemsPlates, menuItemsSandwich } from "../../library/MenuItems.ts";

import Box from "@mui/material/Box";
import ImageCatalog from "../../library/ImageCatalog.tsx";
import MenuItem from "./MenuItem.tsx";
import React from "react";
import Title from "../../library/Title.tsx";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <Box id="menu">
      <Title>{t("menu.title")}</Title>
      <StyledTypography variant="h3">{t("menu.sandwichs")}</StyledTypography>
      <ImageCatalog>
        {menuItemsSandwich.map((sandwichs) => (
          <MenuItem
            key={sandwichs.src}
            src={sandwichs.src}
            title={t(sandwichs.title)}
            subtitle={t(sandwichs.subtitle)}
          />
        ))}
      </ImageCatalog>
      <StyledTypography variant="h3">{t("menu.plate")}</StyledTypography>
      <ImageCatalog>
        {menuItemsPlates.map((plates) => (
          <MenuItem
            key={plates.src}
            src={plates.src}
            title={t(plates.title)}
            subtitle={t(plates.subtitle)}
          />
        ))}
      </ImageCatalog>
    </Box>
  );
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

export default Menu;
