import { NextComponentType, NextPage, Metadata } from "next";
export const metadata: Metadata = {
  title: "About page",
};

const AboutLayout: NextPage<any> = ({ children }) => {
  return (
    <div>
      <h3>AboutLayout</h3>
      <div>{children}</div>
    </div>
  );
};
export default AboutLayout;
