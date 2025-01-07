import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: ["react-three"],
    rules: {
      // Các quy tắc tùy chỉnh cho react-three, thêm nếu cần.
      "react-three/no-outside-canvas": "warn", // Cảnh báo nếu sử dụng HTML ngoài Canvas
    },
  },
];

export default eslintConfig;
