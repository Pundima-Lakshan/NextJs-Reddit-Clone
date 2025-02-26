import { IconType } from "react-icons";

export const PureflowLogoIcon: IconType = ({ size, fontSize }) => {
  const computedSize = fontSize ?? size ?? "2em";
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 96" height={computedSize} width={computedSize} className="chakra-icon">
      <defs>
        <image
          width="100%"
          height="100%"
          id="img1"
          href="data:image/png;base64,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"
        />
      </defs>
      <style></style>
      <use href="#img1" />
    </svg>
  );
};
