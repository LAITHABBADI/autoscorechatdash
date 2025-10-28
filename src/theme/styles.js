import { mode } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    brand: {
      100: "#FEE2E2", // lightest red tint
      200: "#FECACA", // light red
      300: "#FCA5A5", // soft red
      400: "#F87171", // medium red
      500: "#DC2626", // primary red (logo red)
      600: "#B91C1C", // darker red for hover
      700: "#991B1B", // deep red
      800: "#7F1D1D", // very dark red
      900: "#450A0A", // darkest red
    },
    brandScheme: {
      100: "#FEE2E2",
      200: "#FECACA",
      300: "#FCA5A5",
      400: "#F87171",
      500: "#DC2626",
      600: "#B91C1C",
      700: "#991B1B",
      800: "#7F1D1D",
      900: "#450A0A",
    },
    brandTabs: {
      100: "#FEE2E2",
      200: "#FECACA",
      300: "#FCA5A5",
      400: "#F87171",
      500: "#DC2626",
      600: "#B91C1C",
      700: "#991B1B",
      800: "#7F1D1D",
      900: "#450A0A",
    },
    secondaryGray: {
      100: "#F9FAFB", // lightest background
      200: "#F3F4F6", // subtle gray
      300: "#E5E7EB", // light gray (main background - not white!)
      400: "#D1D5DB", // borders
      500: "#9CA3AF", // muted text
      600: "#6B7280", // secondary text
      700: "#4B5563", // dark gray text
      800: "#374151", // darker gray
      900: "#111827", // primary text (almost black)
    },
    red: {
      50: "#FEF2F2",
      100: "#FEE2E2",
      500: "#DC2626",
      600: "#B91C1C",
    },
    blue: {
      50: "#EFF6FF",
      500: "#3B82F6",
    },
    orange: {
      100: "#FFF7ED",
      500: "#F59E0B",
    },
    green: {
      100: "#ECFDF5",
      500: "#10B981",
    },
    navy: {
      50: "#1E293B", // lightest navy for dark mode
      100: "#1A2332", // lighter navy
      200: "#151D2B", // medium navy
      300: "#0F1724", // dark navy
      400: "#0D1420", // darker navy
      500: "#0A101B", // deep navy
      600: "#080C15", // very dark navy
      700: "#06090F", // darker navy
      800: "#0F172A", // background (slate)
      900: "#020617", // darkest navy/slate
    },
    gray: {
      100: "#F9FAFB",
      200: "#F3F4F6",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("#E5E7EB", "#0F172A")(props), // Light: soft gray (not white), Dark: deep slate
        fontFamily: "DM Sans",
        letterSpacing: "-0.5px",
      },
      input: {
        color: mode("#374151", "#F1F5F9")(props),
      },
      html: {
        fontFamily: "DM Sans",
      },
    }),
  },
};
