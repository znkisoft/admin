// import { MantineTheme } from "@mantine/core";
import { Suspense } from "react";

// const LoaderWrapper = (theme: MantineTheme) => ({
//   position: "fixed",
//   top: 0,
//   left: 0,
//   zIndex: 2001,
//   width: "100%",
//   "& > * + *": {
//     marginTop: theme.spacing.xl * 1,
//   },
// });

const Loader = (Component: any) => (props: any) => {
  <Suspense fallback={<>TODO Loader</>}>
    <Component {...props} />
  </Suspense>;
};

export default Loader;
