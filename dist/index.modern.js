import React, { forwardRef } from 'react';
import classNames from 'classnames';

var styles = {"button":"_38F6g","button_default":"_2j-u-","button_primary":"_XE-fq","button_secondary":"_3t1wu","button_disabled":"_1AWSr"};

var baseClass = "button";
var Button = forwardRef(function (_ref, ref) {
  var _classNames;
  var label = _ref.label,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'contained' : _ref$variant,
    borderRadius = _ref.borderRadius,
    className = _ref.className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'default' : _ref$type,
    linkDestination = _ref.linkDestination,
    _ref$disableElevation = _ref.disableElevation,
    disableElevation = _ref$disableElevation === void 0 ? false : _ref$disableElevation,
    onClick = _ref.onClick;
  return React.createElement("div", {
    className: className
  }, type == 'link' ? React.createElement("a", {
    href: linkDestination,
    className: classNames(styles["" + baseClass], (_classNames = {}, _classNames[styles[baseClass + "_primary"]] = variant == 'contained', _classNames)),
    style: {
      borderRadius: borderRadius || 5,
      boxShadow: disableElevation ? 'unset' : undefined
    },
    ref: ref
  }, label || 'BUTTON') : React.createElement("button", {
    style: {
      borderRadius: borderRadius || 5,
      boxShadow: disableElevation ? 'unset' : undefined
    },
    disabled: type == 'disabled',
    className: classNames(styles["" + baseClass], styles[baseClass + "_" + type]),
    onClick: onClick,
    ref: ref
  }, label || 'BUTTON'));
});

export { Button };
//# sourceMappingURL=index.modern.js.map
