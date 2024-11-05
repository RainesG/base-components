function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));

var styles = {"button":"_38F6g","button_default":"_2j-u-","button_primary":"_XE-fq","button_secondary":"_3t1wu","button_disabled":"_1AWSr"};

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

var styles$1 = {"imageList":"_1EXsP","imageList_imageWrapper":"_3xySV","imageList_marginTop":"_L-Xqv"};

var baseClass$1 = "imageList";
var ImageList = function ImageList(_ref) {
  var _classNames;
  var imageList = _ref.imageList,
    _ref$marginTop = _ref.marginTop,
    marginTop = _ref$marginTop === void 0 ? true : _ref$marginTop,
    _ref$row = _ref.row,
    row = _ref$row === void 0 ? 4 : _ref$row,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? "1rem" : _ref$gap;
  return React__default.createElement("div", {
    className: classNames(styles$1[baseClass$1], (_classNames = {}, _classNames[styles$1[baseClass$1 + "_marginTop"]] = marginTop, _classNames))
  }, imageList.map(function (_ref2, index) {
    var url = _ref2.url;
    return React__default.createElement("div", {
      key: baseClass$1 + "-" + index,
      className: styles$1[baseClass$1 + "_imageWrapper"],
      style: {
        width: "calc((100% - " + gap + " * (" + row + " - 1)) / " + row + ")"
      }
    }, React__default.createElement("img", {
      src: url,
      alt: ""
    }));
  }));
};

exports.Button = Button;
exports.ImageList = ImageList;
//# sourceMappingURL=index.js.map
