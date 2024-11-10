export function getTemperatureColors(temp: number): {
  color1: string;
  color2: string;
  color3: string;
} {
  if (temp <= 0) {
    // Very cold - blues and whites
    return {
      color1: "#94ffff",
      color2: "#6b9fff",
      color3: "#ffffff",
    };
  } else if (temp <= 15) {
    // Cool - light blues and greens
    return {
      color1: "#94ffd1",
      color2: "#6bf5ff",
      color3: "#ffffff",
    };
  } else if (temp <= 25) {
    // Warm - yellows and oranges
    return {
      color1: "#ffeb94",
      color2: "#ffb66b",
      color3: "#ffffff",
    };
  } else {
    // Hot - oranges and reds
    return {
      color1: "#ff9494",
      color2: "#ff6b6b",
      color3: "#ffffff",
    };
  }
}
