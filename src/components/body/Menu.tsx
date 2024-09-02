import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import MenuItem from "./MenuItem.tsx";
import React from "react";
import Title from "../../library/Title.tsx";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

enum options {
  VEGAN,
}

const Menu = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledBox id="menu">
      <Title>{t("menu.title")}</Title>
      <StyledTypography variant="h3">{t("menu.sandwichs")}</StyledTypography>
      <ImageList
        cols={3}
        variant="masonry"
        sx={{ margin: theme.spacing(5) }}
        gap={4}
      >
        <MenuItem
          src={"resources/menu/kebab.png"}
          title={t("menu.shish")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/kebab.png"}
          title={t("menu.merguez")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/kebab.png"}
          title={t("menu.gyros")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/kebab.png"}
          title={t("menu.falafel")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/kebab.png"}
          title={t("menu.souvlaki")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/kebab.png"}
          title={t("menu.mixte")}
          subtitle={"test subtitle"}
        />
      </ImageList>
      <StyledTypography variant="h3">{t("menu.plate")}</StyledTypography>
      <ImageList
        cols={3}
        variant="masonry"
        sx={{ margin: theme.spacing(5) }}
        gap={4}
      >
        <MenuItem
          src={"resources/menu/kebab.png"}
          title={t("menu.chickenSalad")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/kebab.png"}
          title={t("menu.falafelSalad")}
          subtitle={"test subtitle"}
          vegan={true}
        />
        <MenuItem
          src={"resources/menu/kebab.png"}
          title={t("menu.merguezSalad")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/kebab.png"}
          title={t("menu.vineSalad")}
          subtitle={"test subtitle"}
          vegan={true}
        />
        <MenuItem
          src={"resources/menu/kebab.png"}
          title={t("menu.souvlakiSalad")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/kebab.png"}
          title={t("menu.fourSalad")}
          subtitle={"test subtitle"}
          vegan={true}
        />
      </ImageList>
    </StyledBox>
  );
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.main,
}));

export default Menu;
