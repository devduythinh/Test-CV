import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import clsx from "clsx";

const Button = ({
  type = "default",
  iconBefore,
  iconAfter,
  onClick,
  className,
  children,
  afterIconClassName,
  beforeIconClassName,
}) => {
  const buttonClasses = classNames(
    "px-4 py-2 rounded flex items-center justify-center cursor-pointer",
    {
      "border border-activityBorder text-activityText bg-white hover:bg-activityHoverBg":
        type === "activity",
      "bg-exploreBg text-white hover:bg-exploreHoverBg": type === "explore",
    },
    className
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      {iconBefore && (
        <span className={clsx("mr-2", beforeIconClassName)}>{iconBefore}</span>
      )}
      {children}
      {iconAfter && (
        <span className={clsx("ml-2", afterIconClassName)}>{iconAfter}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["activity", "explore", "default"]).isRequired,
  text: PropTypes.string.isRequired,
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  iconBefore: null,
  iconAfter: null,
  onClick: () => {},
};

export default Button;
