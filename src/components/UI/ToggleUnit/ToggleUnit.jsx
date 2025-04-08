import React from "react";

import Card from "../Card";
import Button from "../Button";
import { useUnitToggle } from "../../../hooks/useUnitToggle";

function ToggleUnit({
  celsiusBtnClass,
  fahrenheitBtnClass,
  toggleUnitsWrapperClass,
  children,
}) {
  const { handleUnitToggle } = useUnitToggle();

  // function to determine if the callback function  expects and argument
  const handleTemperatureUnitChange = (unit) => {
    if (unit) {
      handleUnitToggle(unit);
    } else {
      handleUnitToggle();
    }
  };

  return (
    <Card WRAPPER="div" className={toggleUnitsWrapperClass}>
      {children || (
        <>
          <Button
            ariaText="Switch to Celsius"
            className={celsiusBtnClass}
            callback={() => handleTemperatureUnitChange("celsius")}
          >
            °C
          </Button>
          <Button
            ariaText="Switch to Fahrenheit"
            className={fahrenheitBtnClass}
            callback={() => handleTemperatureUnitChange("fahrenheit")}
          >
            °F
          </Button>
        </>
      )}
    </Card>
  );
}

export default ToggleUnit;
