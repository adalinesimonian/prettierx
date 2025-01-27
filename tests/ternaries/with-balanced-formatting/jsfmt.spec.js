// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/..`;

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  // [prettierx] balanced ternary formatting option
  // (with improved consistency with "Standard JS"):
  offsetTernaryExpressions: true,
  // [prettierx] more options needed for consistency with "Standard JS":
  arrowParens: "avoid",
  trailingComma: "none",
});

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  // variation from ../jsfmt.spec.js:
  tabWidth: 4,
  // [prettierx] balanced ternary formatting option
  // (with improved consistency with "Standard JS"):
  offsetTernaryExpressions: true,
  // [prettierx] more options needed for consistency with "Standard JS":
  arrowParens: "avoid",
  trailingComma: "none",
});

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  // variation from ../jsfmt.spec.js:
  useTabs: true,
  // [prettierx] balanced ternary formatting option
  // (with improved consistency with "Standard JS"):
  offsetTernaryExpressions: true,
  // [prettierx] more options needed for consistency with "Standard JS":
  arrowParens: "avoid",
  trailingComma: "none",
});

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  // variation from ../jsfmt.spec.js:
  useTabs: true,
  tabWidth: 4,
  // [prettierx] balanced ternary formatting option
  // (with improved consistency with "Standard JS"):
  offsetTernaryExpressions: true,
  // [prettierx] more options needed for consistency with "Standard JS":
  arrowParens: "avoid",
  trailingComma: "none",
});
