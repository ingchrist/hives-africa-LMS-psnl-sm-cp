export default {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json", // Critical for type-aware rules
    // eslint-disable-next-line no-undef
    tsconfigRootDir: __dirname,
  },
  env: {
    node: true,
    es2021: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Use TypeScript rules
    "prettier", // Integrate Prettier if used
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    // Add custom rules here if needed
    "@typescript-eslint/no-var-requires": "off", // Allows require in TypeScript
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "error",
  },
};
