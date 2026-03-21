import { useEffect } from "react";
import { productThemes } from "../styles/colors";

export const useProductTheme = (activeProduct) => {
  useEffect(() => {
    const theme = productThemes[activeProduct];
    if (!theme) return;

    const root = document.documentElement;

    root.style.setProperty("--color-bg", theme.bg);
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--color-secondary", theme.secondary);
    root.style.setProperty("--color-accent", theme.accent);
    root.style.setProperty("--color-text", theme.text);
    root.style.setProperty("--color-card-bg", theme.cardBg);
    root.style.setProperty("--color-glow", theme.glow);
  }, [activeProduct]);
};
