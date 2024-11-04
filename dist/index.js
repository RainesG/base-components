function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));

var styles = {"button":"_2B2gl","button_default":"_3KIZ1","button_primary":"_MQlCH","button_secondary":"_20b5_","button_disabled":"_2MhER"};

var baseClass = "button";
var Button = React.forwardRef(function (_ref, ref) {
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
  return React__default.createElement("div", {
    className: className
  }, type == 'link' ? React__default.createElement("a", {
    href: linkDestination,
    className: classNames(styles["" + baseClass], (_classNames = {}, _classNames[styles[baseClass + "_primary"]] = variant == 'contained', _classNames)),
    style: {
      borderRadius: borderRadius || 5,
      boxShadow: disableElevation ? 'unset' : undefined
    },
    ref: ref
  }, label || 'BUTTON') : React__default.createElement("button", {
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

exports.Button = Button;
//# sourceMappingURL=index.js.map
