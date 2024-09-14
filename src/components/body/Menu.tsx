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
    <StyledBox id="menu">
      <Title>{t("menu.title")}</Title>
      <StyledTypography variant="h3">{t("menu.sandwichs")}</StyledTypography>
      <ImageCatalog>
        <MenuItem
          src={"resources/menu/shish_taouk.jpg"}
          title={t("menu.shish")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/shish_merguez.jpg"}
          title={t("menu.merguez")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/shish_gyros.jpg"}
          title={t("menu.gyros")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/shish_falafel.jpg"}
          title={t("menu.falafel")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/shish_souvlaki.jpg"}
          title={t("menu.souvlaki")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/shish_mixte.jpg"}
          title={t("menu.mixte")}
          subtitle={"test subtitle"}
        />
      </ImageCatalog>
      <StyledTypography variant="h3">{t("menu.plate")}</StyledTypography>
      <ImageCatalog>
        <MenuItem
          src={"resources/menu/plate_chicken.jpg"}
          title={t("menu.chickenSalad")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/plate_falafel.jpg"}
          title={t("menu.falafelSalad")}
          subtitle={"test subtitle"}
          vegan={true}
        />
        <MenuItem
          src={"resources/menu/plate_merguez.jpg"}
          title={t("menu.merguezSalad")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/plate_vine.jpg"}
          title={t("menu.vineSalad")}
          subtitle={"test subtitle"}
          vegan={true}
        />
        <MenuItem
          src={"resources/menu/plate_souvlaki.jpg"}
          title={t("menu.souvlakiSalad")}
          subtitle={"test subtitle"}
        />
        <MenuItem
          src={"resources/menu/plate_salad.jpg"}
          title={t("menu.fourSalad")}
          subtitle={"test subtitle"}
          vegan={true}
        />
      </ImageCatalog>
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
