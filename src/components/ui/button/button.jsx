import React, { forwardRef } from "react";
import { StyledButton } from "./styles";

const Button = forwardRef(
  ({ children, link, minWidth, className, onClick }, ref) => {
    return (
      <StyledButton
        ref={ref}
        $minWidth={minWidth}
        {...(link ? { href: link } : { as: "button", type: "button", onClick })}
        className={className}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
