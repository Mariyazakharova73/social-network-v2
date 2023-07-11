import React, { FC } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "./MaterialUISwitchStyles";
import { PaletteMode } from "@mui/material";

interface ICustomizedSwitchesProps {
  changeMode: () => void;
  mode: PaletteMode | undefined;
}

const CustomizedSwitches: FC<ICustomizedSwitchesProps> = ({ changeMode }) => {
  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} onChange={changeMode} />}
      label={undefined}
    />
  );
};

export default CustomizedSwitches;
