/* @ds-bundle: {"format":3,"namespace":"KLERDesignSystem_1a4c33","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Orb","sourcePath":"components/brand/Orb.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"ProgressRing","sourcePath":"components/data-display/ProgressRing.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"ChatBubble","sourcePath":"components/feedback/ChatBubble.jsx"},{"name":"Chip","sourcePath":"components/forms/Chip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"17876cdf7972","components/actions/IconButton.jsx":"6db649534947","components/brand/Logo.jsx":"75120db7b330","components/brand/Orb.jsx":"888a971c3e1c","components/data-display/Avatar.jsx":"d07dcd5b52fc","components/data-display/Badge.jsx":"6f56ed6a7396","components/data-display/Card.jsx":"8d3469ce5768","components/data-display/ProgressRing.jsx":"c08fef3e414b","components/data-display/Tag.jsx":"fbc8cf997913","components/feedback/ChatBubble.jsx":"18c277bf0a6b","components/forms/Chip.jsx":"17f9ad7b0d83","components/forms/Input.jsx":"aa265e4e2e1b","components/navigation/BottomNav.jsx":"44b666a14984","ui_kits/kler-app/App.jsx":"49ab0b087a56","ui_kits/kler-app/CareScreen.jsx":"253b86cb9cde","ui_kits/kler-app/ChatScreen.jsx":"d2cffbdf42ce","ui_kits/kler-app/HomeScreen.jsx":"04313e6e083f","ui_kits/kler-app/helpers.jsx":"016060eeb5aa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KLERDesignSystem_1a4c33 = window.KLERDesignSystem_1a4c33 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLER Button — the primary call to action.
 * Gradient pill (primary), outline pill (secondary), ghost, and danger (SOS).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  as = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '9px 18px',
      gap: 8,
      iconBox: 16
    },
    md: {
      fontSize: 15,
      padding: '13px 24px',
      gap: 10,
      iconBox: 18
    },
    lg: {
      fontSize: 17,
      padding: '17px 30px',
      gap: 12,
      iconBox: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: s.fontSize,
    lineHeight: 1,
    letterSpacing: '0',
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    borderRadius: 'var(--radius-pill)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    WebkitTapHighlightColor: 'transparent'
  };
  const variants = {
    primary: {
      background: 'var(--gradient-brand)',
      color: 'var(--text-onbrand)',
      boxShadow: 'var(--shadow-brand)'
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--text-brand)',
      borderColor: 'var(--border-brand)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-brand)'
    },
    danger: {
      background: 'var(--danger)',
      color: 'var(--white)',
      boxShadow: '0 12px 28px rgba(239,68,68,0.34)'
    }
  };
  const Tag = as;
  const iconStyle = {
    display: 'inline-flex',
    width: s.iconBox,
    height: s.iconBox,
    flex: '0 0 auto'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    disabled: as === 'button' ? disabled : undefined,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: iconStyle
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: iconStyle
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLER IconButton — a circular icon-only control.
 * Used for notification bells, camera, mic, back, and toolbar actions.
 */
function IconButton({
  icon,
  variant = 'soft',
  size = 'md',
  badge = null,
  'aria-label': ariaLabel,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      box: 36,
      icon: 18
    },
    md: {
      box: 44,
      icon: 20
    },
    lg: {
      box: 56,
      icon: 24
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    soft: {
      background: 'var(--white)',
      color: 'var(--text-brand)',
      boxShadow: 'var(--shadow-sm)'
    },
    tint: {
      background: 'var(--purple-150)',
      color: 'var(--text-brand)'
    },
    solid: {
      background: 'var(--gradient-brand)',
      color: 'var(--white)',
      boxShadow: 'var(--shadow-brand)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-out)',
      WebkitTapHighlightColor: 'transparent',
      ...(variants[variant] || variants.soft),
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, icon), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--purple-500)',
      color: 'var(--white)',
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      fontWeight: 'var(--fw-bold)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid var(--white)',
      boxSizing: 'content-box'
    }
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLER Logo — the "K" mark plus the KLER wordmark.
 * Pass `markSrc` (relative path to the logo mark PNG) to show the gradient
 * mark; the wordmark is set in Sora ExtraBold so it renders even without it.
 */
function Logo({
  markSrc = null,
  height = 30,
  wordmark = true,
  color = 'var(--ink)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: height * 0.32,
      ...style
    }
  }, rest), markSrc && /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "KLER",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  }), wordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-extra)',
      fontSize: height * 0.92,
      letterSpacing: '0.12em',
      lineHeight: 1,
      color,
      paddingLeft: markSrc ? 0 : 2
    }
  }, "KLER"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Orb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLER Orb — the "Galaxy Orb" AI-presence visual. A glowing purple→mint sphere
 * with a soft highlight and outer glow. Set `pulse` for a gentle breathing loop.
 */
function Orb({
  size = 72,
  pulse = false,
  style = {},
  ...rest
}) {
  const id = React.useId ? React.useId().replace(/:/g, '') : 'orb';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      animation: pulse ? `klerOrbPulse-${id} 3.2s var(--ease-in-out) infinite` : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `
        @keyframes klerOrbPulse-${id} {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
      `), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '-14%',
      borderRadius: '50%',
      background: 'radial-gradient(circle at 50% 50%, rgba(123,97,255,0.42), rgba(123,97,255,0) 68%)',
      filter: 'blur(4px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      background: 'var(--gradient-orb)',
      boxShadow: 'inset 0 -6px 14px rgba(46,30,107,0.35), var(--shadow-brand)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '16%',
      left: '20%',
      width: '34%',
      height: '30%',
      borderRadius: '50%',
      background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.9), rgba(255,255,255,0) 70%)'
    }
  })));
}
Object.assign(__ds_scope, { Orb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Orb.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLER Avatar — circular image (the Kler mascot, a caregiver photo, etc.).
 * Falls back to a gradient monogram when no `src`. Optional gradient ring and
 * online dot. Pass a relative `src` from the mounting page.
 */
function Avatar({
  src = null,
  name = '',
  size = 48,
  ring = false,
  online = false,
  fit = 'cover',
  bg = null,
  style = {},
  ...rest
}) {
  const initials = name.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
  const dot = Math.max(10, Math.round(size * 0.26));
  const surface = bg || (fit === 'contain' ? 'var(--gradient-aurora)' : 'var(--purple-150)');
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: '0 0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: src ? surface : 'var(--gradient-brand)',
      color: 'var(--white)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size * 0.4,
      boxSizing: 'border-box',
      border: ring ? `${Math.max(2, size * 0.05)}px solid var(--white)` : 'none',
      boxShadow: ring ? '0 0 0 2px var(--purple-400)' : 'none'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      objectPosition: 'center bottom'
    }
  }) : initials || '·'), online && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: dot,
      height: dot,
      borderRadius: '50%',
      background: 'var(--online)',
      border: '2px solid var(--white)',
      boxSizing: 'content-box'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLER Badge — a small status pill. Semantic tones with an optional leading
 * dot (e.g. the green "connected / online" indicator).
 */
function Badge({
  children,
  tone = 'brand',
  dot = false,
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 11,
      padding: '3px 9px',
      dot: 6,
      gap: 5
    },
    md: {
      fontSize: 12.5,
      padding: '5px 12px',
      dot: 7,
      gap: 6
    }
  };
  const s = sizes[size] || sizes.md;
  const tones = {
    brand: {
      background: 'var(--purple-150)',
      color: 'var(--purple-700)',
      dotColor: 'var(--purple-500)'
    },
    success: {
      background: 'var(--success-bg)',
      color: 'var(--success-fg)',
      dotColor: 'var(--online)'
    },
    warning: {
      background: 'var(--warning-bg)',
      color: 'var(--warning-fg)',
      dotColor: 'var(--warning)'
    },
    danger: {
      background: 'var(--danger-bg)',
      color: 'var(--danger-fg)',
      dotColor: 'var(--danger)'
    },
    mint: {
      background: 'var(--mint-100)',
      color: 'var(--mint-700)',
      dotColor: 'var(--mint-500)'
    },
    neutral: {
      background: 'var(--neutral-100)',
      color: 'var(--neutral-600)',
      dotColor: 'var(--neutral-400)'
    }
  };
  const t = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      padding: s.padding,
      borderRadius: 'var(--radius-pill)',
      background: t.background,
      color: t.color,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: s.fontSize,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.dot,
      height: s.dot,
      borderRadius: '50%',
      background: t.dotColor,
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLER Card — the base surface. White, generously rounded, soft purple-tinted
 * shadow. `tone` swaps the background for tinted / gradient / glass surfaces.
 */
function Card({
  children,
  tone = 'default',
  pad = 'lg',
  radius = 'xl',
  interactive = false,
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-3)',
    md: 'var(--space-4)',
    lg: 'var(--space-5)',
    xl: 'var(--space-6)'
  };
  const radii = {
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)'
  };
  const tones = {
    default: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-subtle)'
    },
    flat: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)'
    },
    tint: {
      background: 'var(--purple-150)',
      border: '1px solid transparent'
    },
    brand: {
      background: 'var(--gradient-brand)',
      color: 'var(--text-onbrand)',
      boxShadow: 'var(--shadow-brand)',
      border: 'none'
    },
    aurora: {
      background: 'var(--gradient-aurora)',
      border: '1px solid var(--border-subtle)'
    },
    glass: {
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--glass-shadow)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radii[radius] || radii.xl,
      padding: pads[pad] ?? pads.lg,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...(tones[tone] || tones.default),
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = (tones[tone] || tones.default).boxShadow || 'none';
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLER ProgressRing — circular gauge used for medication timers and battery.
 * Renders a rounded-cap arc over a track, with a centered icon or value.
 */
function ProgressRing({
  value = 60,
  size = 88,
  stroke = 9,
  color = 'var(--purple-500)',
  track = 'var(--purple-150)',
  children = null,
  style = {},
  ...rest
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const offset = circ * (1 - pct / 100);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: track,
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: circ,
    strokeDashoffset: offset,
    style: {
      transition: 'stroke-dashoffset var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-brand)'
    }
  }, children));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLER Tag — outline "capsule" chip used for brand traits and filters
 * (FRIENDLY · EMPATHETIC · ADAPTABLE · EMPOWERING). Optional selected state.
 */
function Tag({
  children,
  color = 'purple',
  selected = false,
  style = {},
  ...rest
}) {
  const colors = {
    purple: {
      line: 'var(--purple-400)',
      text: 'var(--purple-600)',
      fill: 'var(--purple-500)'
    },
    mint: {
      line: 'var(--mint-400)',
      text: 'var(--mint-700)',
      fill: 'var(--mint-500)'
    },
    neutral: {
      line: 'var(--neutral-300)',
      text: 'var(--neutral-600)',
      fill: 'var(--neutral-700)'
    }
  };
  const c = colors[color] || colors.purple;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '7px 16px',
      borderRadius: 'var(--radius-pill)',
      border: `1.5px solid ${selected ? 'transparent' : c.line}`,
      background: selected ? c.fill : 'transparent',
      color: selected ? 'var(--white)' : c.text,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 13,
      letterSpacing: '0.02em',
      lineHeight: 1,
      cursor: 'default',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ChatBubble.jsx
try { (() => {
/**
 * KLER ChatBubble — a message in the assistant conversation.
 * `from="assistant"` = white bubble (optional speak button + timestamp);
 * `from="user"` = gradient bubble, right-aligned, with read ticks.
 */
function ChatBubble({
  children,
  from = 'assistant',
  time = null,
  read = false,
  speakable = false,
  onSpeak = () => {},
  style = {}
}) {
  const isUser = from === 'user';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: isUser ? 'flex-end' : 'flex-start',
      gap: 5,
      maxWidth: '78%',
      alignSelf: isUser ? 'flex-end' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '13px 17px',
      borderRadius: isUser ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
      background: isUser ? 'var(--gradient-brand)' : 'var(--white)',
      color: isUser ? 'var(--white)' : 'var(--text-strong)',
      boxShadow: isUser ? 'var(--shadow-brand)' : 'var(--shadow-sm)',
      border: isUser ? 'none' : '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 'var(--lh-normal)'
    }
  }, children, speakable && !isUser && /*#__PURE__*/React.createElement("button", {
    onClick: onSpeak,
    "aria-label": "\u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E2D\u0E01\u0E40\u0E2A\u0E35\u0E22\u0E07",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      height: 34,
      marginTop: 9,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--purple-150)',
      color: 'var(--purple-600)',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 5 6 9H2v6h4l5 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.54 8.46a5 5 0 0 1 0 7.07"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.07 4.93a10 10 0 0 1 0 14.14"
  })))), (time || read) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      color: 'var(--text-muted)',
      padding: '0 4px'
    }
  }, time, isUser && read && /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--purple-500)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m2 13 4 4L14 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m11 15 1.5 1.5L22 7"
  }))));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/forms/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLER Chip — a tappable suggestion / quick-action pill with an optional icon.
 * Used for chat prompt suggestions ("ยานี้กินยังไง") and quick filters.
 */
function Chip({
  children,
  icon = null,
  tone = 'outline',
  style = {},
  ...rest
}) {
  const tones = {
    outline: {
      background: 'var(--white)',
      color: 'var(--text-brand)',
      border: '1.5px solid var(--border-brand)',
      boxShadow: 'var(--shadow-xs)'
    },
    soft: {
      background: 'var(--purple-150)',
      color: 'var(--purple-700)',
      border: '1.5px solid transparent'
    },
    solid: {
      background: 'var(--gradient-brand)',
      color: 'var(--white)',
      border: '1.5px solid transparent',
      boxShadow: 'var(--shadow-brand)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 16px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 14,
      lineHeight: 1,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'transform var(--dur-fast) var(--ease-out)',
      WebkitTapHighlightColor: 'transparent',
      ...(tones[tone] || tones.outline),
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.96)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 17,
      height: 17,
      flex: '0 0 auto'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KLER Input — rounded text field. Optional leading/trailing icons and label.
 * `pill` gives the fully-rounded composer style used in chat & search.
 */
function Input({
  label = null,
  iconLeft = null,
  iconRight = null,
  shape = 'rounded',
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 7,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: shape === 'pill' ? '13px 20px' : '12px 16px',
      background: 'var(--white)',
      border: `1.5px solid ${focus ? 'var(--purple-400)' : 'var(--border-subtle)'}`,
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)',
      boxShadow: focus ? 'var(--ring-brand)' : 'var(--shadow-xs)',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      flex: '0 0 auto'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-strong)',
      ...style
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      flex: '0 0 auto'
    }
  }, iconRight)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
/**
 * KLER BottomNav — the app's 5-tab bar. The centre item (usually the KLER
 * assistant) renders as an elevated gradient FAB that breaks the top edge.
 * Pass `items` as { key, label, icon, center? }.
 */
function BottomNav({
  items = [],
  activeKey,
  onSelect = () => {},
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-around',
      gap: 4,
      padding: '10px 14px 12px',
      background: 'var(--white)',
      borderTop: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0',
      boxShadow: '0 -8px 30px rgba(74,58,158,0.08)',
      ...style
    }
  }, items.map(it => {
    const active = it.key === activeKey;
    if (it.center) {
      return /*#__PURE__*/React.createElement("button", {
        key: it.key,
        onClick: () => onSelect(it.key),
        "aria-label": it.label,
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          flex: 1,
          transform: 'translateY(-16px)',
          WebkitTapHighlightColor: 'transparent'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 58,
          height: 58,
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--gradient-brand)',
          color: 'var(--white)',
          boxShadow: 'var(--shadow-brand)',
          border: '4px solid var(--white)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          width: 26,
          height: 26
        }
      }, it.icon)), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-display)',
          fontSize: 11.5,
          fontWeight: 'var(--fw-semibold)',
          color: 'var(--text-brand)'
        }
      }, it.label));
    }
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onSelect(it.key),
      "aria-label": it.label,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        flex: 1,
        padding: '4px 0',
        WebkitTapHighlightColor: 'transparent',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 24,
        height: 24,
        color: active ? 'var(--purple-500)' : 'var(--neutral-400)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 11.5,
        fontWeight: active ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: active ? 'var(--purple-600)' : 'var(--neutral-500)'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kler-app/App.jsx
try { (() => {
/* KLER app — root: phone frame, tab state, bottom nav. */
function Placeholder({
  icon,
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.MASCOT,
    alt: "Kler",
    style: {
      height: 150,
      opacity: .95
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--purple-400)'
    }
  }, window.Ic(icon, 30)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontSize: 14,
      color: 'var(--text-muted)',
      maxWidth: 260
    }
  }, sub));
}
function App() {
  const {
    BottomNav
  } = window.K;
  const [tab, setTab] = React.useState('home');
  const [overlay, setOverlay] = React.useState(null); // 'chat'
  const go = dest => {
    if (dest === 'chat') setOverlay('chat');else {
      setOverlay(null);
      setTab(dest);
    }
  };
  const onChat = overlay === 'chat';
  const darkStatus = false;
  let screen;
  if (onChat) screen = /*#__PURE__*/React.createElement(window.ChatScreen, {
    go: go
  });else if (tab === 'home') screen = /*#__PURE__*/React.createElement(window.HomeScreen, {
    go: go
  });else if (tab === 'assistant') screen = /*#__PURE__*/React.createElement(window.CareScreen, {
    go: go
  });else if (tab === 'gallery') screen = /*#__PURE__*/React.createElement(Placeholder, {
    icon: "Image",
    title: "\u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
    sub: "\u0E20\u0E32\u0E1E\u0E16\u0E48\u0E32\u0E22\u0E22\u0E32\u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E17\u0E35\u0E48 Kler \u0E0A\u0E48\u0E27\u0E22\u0E08\u0E14\u0E08\u0E33 \u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48"
  });else if (tab === 'notes') screen = /*#__PURE__*/React.createElement(Placeholder, {
    icon: "ClipboardList",
    title: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E",
    sub: "\u0E22\u0E32 \u0E19\u0E31\u0E14\u0E2B\u0E21\u0E32\u0E22 \u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E27\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E22\u0E48\u0E32"
  });else screen = /*#__PURE__*/React.createElement(Placeholder, {
    icon: "User",
    title: "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
    sub: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E23\u0E31\u0E27 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E01\u0E32\u0E23\u0E14\u0E39\u0E41\u0E25"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "frame"
  }, /*#__PURE__*/React.createElement(window.StatusBar, {
    dark: darkStatus
  }), /*#__PURE__*/React.createElement("div", {
    className: "screen",
    style: {
      background: onChat ? 'transparent' : 'var(--surface-page)'
    }
  }, screen), !onChat && /*#__PURE__*/React.createElement("div", {
    className: "nav"
  }, /*#__PURE__*/React.createElement(BottomNav, {
    activeKey: tab,
    onSelect: go,
    items: [{
      key: 'home',
      label: 'หน้าแรก',
      icon: window.Ic('House', 24)
    }, {
      key: 'gallery',
      label: 'Gallery',
      icon: window.Ic('Image', 24)
    }, {
      key: 'assistant',
      label: 'ผู้ช่วย',
      icon: window.Ic('MessageCircle', 26),
      center: true
    }, {
      key: 'notes',
      label: 'บันทึก',
      icon: window.Ic('ClipboardList', 24)
    }, {
      key: 'me',
      label: 'ฉัน',
      icon: window.Ic('User', 24)
    }]
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kler-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kler-app/CareScreen.jsx
try { (() => {
/* KLER app — Care / assistant hub screen (the "ผู้ช่วย KLER AI" landing). */
function CareScreen({
  go
}) {
  const {
    Card,
    ProgressRing,
    Badge,
    Orb
  } = window.K;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 18px 120px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    pad: "md",
    radius: "xl",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'rgba(255,255,255,.25)',
      flex: '0 0 auto',
      border: '2px solid rgba(255,255,255,.6)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.FACE,
    alt: "Kler",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontWeight: 700,
      fontSize: 18
    }
  }, "\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22 KLER AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontSize: 13,
      opacity: .9,
      marginTop: 2
    }
  }, "\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E14\u0E39\u0E41\u0E25\u0E04\u0E38\u0E13\u0E22\u0E48\u0E32\u0E40\u0E2A\u0E21\u0E2D")), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('chat'),
    "aria-label": "chat",
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.22)',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, window.Ic('MessageCircle', 22))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(window.SectionLabel, null, "\u0E16\u0E31\u0E14\u0E44\u0E1B"), /*#__PURE__*/React.createElement(Card, {
    tone: "default",
    pad: "md",
    radius: "lg",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 15
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 44,
    size: 70,
    stroke: 7
  }, window.Ic('Pill', 24, {
    color: 'var(--purple-600)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-strong)'
    }
  }, "\u0E22\u0E32\u0E04\u0E27\u0E32\u0E21\u0E14\u0E31\u0E19"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, "12:00 \u0E19. \xB7 \u0E2B\u0E25\u0E31\u0E07\u0E2D\u0E32\u0E2B\u0E32\u0E23"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    size: "sm"
  }, window.Ic('Clock', 13), "\xA0\u0E2D\u0E35\u0E01 2 \u0E0A\u0E21. 30 \u0E19\u0E32\u0E17\u0E35"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(window.SectionLabel, null, "\u0E17\u0E32\u0E07\u0E25\u0E31\u0E14"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Shortcut, {
    icon: "Camera",
    label: "\u0E16\u0E48\u0E32\u0E22\u0E20\u0E32\u0E1E\u0E22\u0E32",
    bg: "var(--white)",
    fg: "var(--purple-600)",
    onClick: () => go('chat')
  }), /*#__PURE__*/React.createElement(Shortcut, {
    icon: "Sparkles",
    label: "\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22 AI",
    bg: "var(--white)",
    fg: "var(--purple-600)",
    onClick: () => go('chat')
  }), /*#__PURE__*/React.createElement(Shortcut, {
    icon: "Image",
    label: "\u0E23\u0E39\u0E1B\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
    bg: "var(--mint-100)",
    fg: "var(--mint-700)"
  }), /*#__PURE__*/React.createElement(Shortcut, {
    icon: "Bell",
    label: "\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19",
    bg: "var(--warning-bg)",
    fg: "var(--warning-fg)"
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "flat",
    pad: "md",
    radius: "lg",
    style: {
      marginTop: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--purple-600)'
    }
  }, window.Ic('Glasses', 24)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, "\u0E41\u0E27\u0E48\u0E19 KLER"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true,
    size: "sm"
  }, "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E41\u0E25\u0E49\u0E27"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--purple-600)'
    }
  }, "82%")));
}
function Shortcut({
  icon,
  label,
  bg,
  fg,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      background: bg,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: fg
    }
  }, window.Ic(icon, 26)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(window, {
  CareScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kler-app/CareScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kler-app/ChatScreen.jsx
try { (() => {
/* KLER app — Assistant chat screen (interactive). */
function ChatScreen({
  go
}) {
  const {
    ChatBubble,
    Chip,
    Avatar
  } = window.K;
  const [msgs, setMsgs] = React.useState([{
    from: 'assistant',
    text: 'สวัสดีค่ะ คุณย่า\nถามได้เลยนะคะ',
    speakable: true
  }, {
    from: 'user',
    text: 'มียาอะไรต้องกินตอนเที่ยงบ้าง',
    time: '09:24',
    read: true
  }, {
    from: 'assistant',
    text: 'เที่ยงนี้มี 1 รายการค่ะ 💊\nยาความดัน 1 เม็ด หลังอาหาร',
    time: '09:24',
    speakable: true
  }]);
  const [text, setText] = React.useState('');
  const endRef = React.useRef(null);
  React.useEffect(() => {
    if (endRef.current) endRef.current.parentNode.scrollTop = endRef.current.offsetTop;
  }, [msgs]);
  const send = t => {
    const val = (t || text).trim();
    if (!val) return;
    const time = new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    });
    setMsgs(m => [...m, {
      from: 'user',
      text: val,
      time,
      read: true
    }]);
    setText('');
    setTimeout(() => {
      setMsgs(m => [...m, {
        from: 'assistant',
        text: 'รับทราบค่ะ เดี๋ยว Kler จัดการให้นะคะ ✨',
        time,
        speakable: true
      }]);
    }, 650);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--gradient-aurora)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '6px 16px 12px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('care'),
    "aria-label": "\u0E01\u0E25\u0E31\u0E1A",
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--white)',
      border: 'none',
      boxShadow: 'var(--shadow-sm)',
      color: 'var(--purple-600)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, window.Ic('ChevronLeft', 22)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--gradient-brand)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      flex: '0 0 auto'
    }
  }, window.Ic('Bot', 24)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-strong)'
    }
  }, "\u0E1C\u0E39\u0E49\u0E0A\u0E48\u0E27\u0E22 KLER"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-thai)',
      fontSize: 12.5,
      color: 'var(--success-fg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--online)'
    }
  }), "\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C")), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '8px 13px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      border: 'none',
      boxShadow: 'var(--shadow-sm)',
      color: 'var(--purple-600)',
      fontFamily: 'var(--font-thai)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34 ", window.Ic('Clock', 15))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, msgs.map((m, i) => m.from === 'assistant' ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.FACE,
    alt: "Kler",
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      objectFit: 'cover',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement(ChatBubble, {
    from: "assistant",
    time: m.time,
    speakable: m.speakable
  }, m.text.split('\n').map((l, j) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: j
  }, l, j < m.text.split('\n').length - 1 && /*#__PURE__*/React.createElement("br", null))))) : /*#__PURE__*/React.createElement(ChatBubble, {
    key: i,
    from: "user",
    time: m.time,
    read: m.read
  }, m.text)), /*#__PURE__*/React.createElement("div", {
    ref: endRef
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      padding: '6px 16px',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    icon: window.Ic('Pill', 16),
    onClick: () => send('ยานี้กินยังไง')
  }, "\u0E22\u0E32\u0E19\u0E35\u0E49\u0E01\u0E34\u0E19\u0E22\u0E31\u0E07\u0E44\u0E07"), /*#__PURE__*/React.createElement(Chip, {
    icon: window.Ic('Clock', 16),
    onClick: () => send('ตอนนี้กินยาได้ยัง')
  }, "\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E01\u0E34\u0E19\u0E22\u0E32\u0E44\u0E14\u0E49\u0E22\u0E31\u0E07"), /*#__PURE__*/React.createElement(Chip, {
    icon: window.Ic('Stethoscope', 16),
    onClick: () => send('นัดหมอ')
  }, "\u0E19\u0E31\u0E14\u0E2B\u0E21\u0E2D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "\u0E16\u0E48\u0E32\u0E22\u0E20\u0E32\u0E1E",
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--purple-600)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, window.Ic('Camera', 22)), /*#__PURE__*/React.createElement("input", {
    value: text,
    onChange: e => setText(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') send();
    },
    placeholder: "\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u2026",
    style: {
      flex: 1,
      minWidth: 0,
      padding: '13px 18px',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid var(--border-subtle)',
      background: 'var(--white)',
      fontFamily: 'var(--font-thai)',
      fontSize: 15,
      outline: 'none',
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => send(),
    "aria-label": "\u0E2A\u0E48\u0E07",
    style: {
      width: 50,
      height: 50,
      borderRadius: '50%',
      background: 'var(--gradient-brand)',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-brand)',
      flex: '0 0 auto'
    }
  }, window.Ic(text.trim() ? 'Send' : 'Mic', 22))));
}
Object.assign(window, {
  ChatScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kler-app/ChatScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kler-app/HomeScreen.jsx
try { (() => {
/* KLER app — Home dashboard screen. */
function HomeScreen({
  go
}) {
  const {
    Card,
    Badge,
    Logo,
    Avatar
  } = window.K;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 18px 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    markSrc: window.LOGO,
    height: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--text-strong)',
      marginTop: 14
    }
  }, "\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35\u0E04\u0E48\u0E30 \u0E04\u0E38\u0E13\u0E22\u0E48\u0E32"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "\u0E27\u0E31\u0E19\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23\u0E17\u0E35\u0E48 10 \u0E21\u0E34.\u0E22. 2568 \xB7 09:24")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19",
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--white)',
      border: 'none',
      boxShadow: 'var(--shadow-sm)',
      color: 'var(--purple-500)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, window.Ic('Bell', 21), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -3,
      right: -3,
      minWidth: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--purple-500)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid var(--white)'
    }
  }, "3")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '6px 0 2px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.MASCOT,
    alt: "Kler",
    style: {
      height: 132
    }
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "default",
    pad: "md",
    radius: "lg",
    interactive: true,
    style: {
      marginTop: 6,
      display: 'flex',
      alignItems: 'center',
      gap: 13
    },
    onClick: () => go('care')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 14,
      background: 'var(--purple-150)',
      color: 'var(--purple-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, window.Ic('Glasses', 24)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, "\u0E41\u0E27\u0E48\u0E19 KLER \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true,
    size: "sm"
  }, "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E41\u0E25\u0E49\u0E27"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "\u0E41\u0E1A\u0E15\u0E40\u0E15\u0E2D\u0E23\u0E35\u0E48 82%"))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--neutral-400)'
    }
  }, window.Ic('ChevronRight', 22))), /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    pad: "md",
    radius: "lg",
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontSize: 12,
      color: 'var(--purple-600)',
      fontWeight: 600
    }
  }, "\u0E40\u0E04\u0E25\u0E47\u0E14\u0E25\u0E31\u0E1A\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--purple-800)',
      marginTop: 3
    }
  }, "\u0E14\u0E37\u0E48\u0E21\u0E19\u0E49\u0E33\u0E43\u0E2B\u0E49\u0E1E\u0E2D\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontSize: 12.5,
      color: 'var(--purple-600)',
      marginTop: 3
    }
  }, "\u0E15\u0E31\u0E49\u0E07\u0E40\u0E1B\u0E49\u0E32 6\u20138 \u0E41\u0E01\u0E49\u0E27 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48\u0E14\u0E35")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 62,
      height: 62,
      borderRadius: '50%',
      background: 'var(--gradient-orb)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      flex: '0 0 auto',
      boxShadow: 'var(--shadow-brand)'
    }
  }, window.Ic('Droplets', 30))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(window.SectionLabel, {
    icon: window.Ic('CalendarDays', 19)
  }, "\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(ReminderRow, {
    icon: "Pill",
    title: "\u0E22\u0E32\u0E04\u0E27\u0E32\u0E21\u0E14\u0E31\u0E19",
    time: "12:00 \u0E19.",
    badge: {
      tone: 'warning',
      text: 'อีก 2 ชม.'
    }
  }), /*#__PURE__*/React.createElement(ReminderRow, {
    icon: "Stethoscope",
    title: "\u0E19\u0E31\u0E14\u0E2B\u0E21\u0E2D (\u0E23\u0E1E. \u0E01.)",
    time: "\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49 10:00 \u0E19."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(QuickAction, {
    icon: "Camera",
    label: "\u0E16\u0E48\u0E32\u0E22\u0E20\u0E32\u0E1E\u0E22\u0E32",
    onClick: () => go('chat')
  }), /*#__PURE__*/React.createElement(QuickAction, {
    icon: "Image",
    label: "\u0E23\u0E39\u0E1B\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
    tone: "mint"
  })));
}
function ReminderRow({
  icon,
  title,
  time,
  badge
}) {
  const {
    Card,
    Badge
  } = window.K;
  return /*#__PURE__*/React.createElement(Card, {
    tone: "flat",
    pad: "md",
    radius: "lg",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 13,
      background: 'var(--purple-150)',
      color: 'var(--purple-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, window.Ic(icon, 22)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, time)), badge && /*#__PURE__*/React.createElement(Badge, {
    tone: badge.tone,
    size: "sm"
  }, badge.text));
}
function QuickAction({
  icon,
  label,
  tone,
  onClick
}) {
  const bg = tone === 'mint' ? 'var(--mint-100)' : 'var(--white)';
  const fg = tone === 'mint' ? 'var(--mint-700)' : 'var(--purple-600)';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      background: bg,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 14px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 9,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: fg
    }
  }, window.Ic(icon, 26)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-thai)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kler-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kler-app/helpers.jsx
try { (() => {
/* Shared helpers for the KLER app UI kit — icon factory, status bar, phone chrome. */
const K = window.KLERDesignSystem_1a4c33;

// Lucide icon → React node
function Ic(name, size = 22, opts = {}) {
  const n = lucide.createElement(lucide[name]);
  n.setAttribute('width', size);
  n.setAttribute('height', size);
  n.setAttribute('stroke-width', opts.stroke || 2);
  if (opts.color) n.setAttribute('stroke', opts.color);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    },
    dangerouslySetInnerHTML: {
      __html: n.outerHTML
    }
  });
}
const MASCOT = '../../assets/mascot/kler-hero.png';
const FACE = '../../assets/mascot/kler-face.png';
const LOGO = '../../assets/logo/kler-appicon.png';
function StatusBar({
  dark = false
}) {
  const c = dark ? '#fff' : 'var(--neutral-900)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 24px 4px',
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: c
    }
  }, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      color: c
    }
  }, Ic('SignalHigh', 17), Ic('Wifi', 17), Ic('BatteryFull', 20)));
}

// Soft section label
function SectionLabel({
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      margin: '4px 0 12px'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--purple-500)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-strong)'
    }
  }, children));
}
Object.assign(window, {
  Ic,
  StatusBar,
  SectionLabel,
  MASCOT,
  FACE,
  LOGO,
  K
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kler-app/helpers.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Orb = __ds_scope.Orb;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.BottomNav = __ds_scope.BottomNav;

})();
