---
name: Framer-motion ease typing
description: How to type cubic bezier ease arrays in framer-motion Variants without TS errors
---

## Rule
Always add `as const` to cubic bezier ease arrays in framer-motion variant objects:
```ts
ease: [0.22, 1, 0.36, 1] as const   // ✅ tuple — satisfies Easing type
ease: [0.22, 1, 0.36, 1]            // ❌ number[] — fails strict TS
```

**Why:** framer-motion's `Easing` type accepts `[number, number, number, number]` tuples but not `number[]`. TypeScript infers bare array literals as `number[]`. Adding `as const` widens inference to a readonly tuple, which IS assignable to the 4-tuple form of `Easing`.

**How to apply:** Any time an animation variant has `transition: { ease: [...] }` with a 4-number cubic bezier, append `as const`. Applies inside `Variants`-typed consts AND inline `transition` props.
