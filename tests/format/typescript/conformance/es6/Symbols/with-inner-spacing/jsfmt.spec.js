// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/..`;

run_spec(dirpath, ["typescript"], {
  // [prettierx] test with --paren-spacing
  spaceInParens: true,
  typeAngleBracketSpacing: true,
  typeBracketSpacing: true,
});