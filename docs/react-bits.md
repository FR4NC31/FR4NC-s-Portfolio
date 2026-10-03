# React Bits attribution

The local `src/app/components/reactbits/SpotlightCard.tsx` component is adapted
from [React Bits SpotlightCard](https://github.com/DavidHDev/react-bits/blob/main/src/ts-default/Components/SpotlightCard/SpotlightCard.tsx)
by David Haz (DavidHDev). The corresponding CSS is adapted into `globals.css`.

Changes for this portfolio:

- Retain the existing project panel’s background, padding, radius, and border.
- Reduce the glow to a subtle white highlight.
- Run pointer updates only for a fine pointer with hover and no reduced-motion preference.
- Keep coordinates in CSS properties, avoiding React renders on pointer movement.
- Disable the visual effect for touch devices and reduced motion.

The upstream license is **MIT + Commons Clause License Condition v1.0**, allowing
use as part of an application or website. Its full notice is preserved in
[react-bits-license.md](react-bits-license.md).

GSAP separately orchestrates entrances and section reveals. The spotlight affects
only the project-image pseudo-element, avoiding multiple animation systems acting
on the same element.
