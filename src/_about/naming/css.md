---
layout: documentation
permalink: /about/naming-conventions/css
has-parent: /about/naming-conventions/
title: CSS
intro-text: CSS naming conventions are an important aspect of any design system.
---

Naming conventions help:

* Provide clarity and scope
* Keep CSS specificity low
* Allow for backwards compatibility with legacy code

It consists of three required parts.

* **Global namespace**
* **Class prefix**
* **BEM Syntax**

When put together, the structure is `[global namespace]-[class prefix]-[BEM syntax]`, or:

```css
.vads-c-component-name
```

There are other variants on the naming convention as well.

* Breakpoint prefix (ex. `mobile-lg:vads-c-component-name`)
* JavaScript hook (ex. `js:vads-c-component-name`)

Below is some more information on the different parts of the name.

## Global namespace

The global namespace is `vads`, which is short for **Veterans Affairs Design System**. The global namespace helps identify a class name that belongs to the Design System from any other classes that might be created specifically for an application.

### Class prefix

Class prefixes help indicate the function of a class. There are three main functions for classes:

* `c` for Component
* `u` for Utility
* `l` for Layout

### BEM Syntax

BEM Syntax stands for **Block**, **Element**, **Modifier**.

While the BEM syntax typically results in longer class names, it is excellent for providing information about how classes are scoped. In addition to the context, this allows the developer to avoid using combinators in class names and use semantic headings.

For example, an alert can be considered a **block** (for brevity, we will not use the full naming convention here).

```css
.alert {}
```

The alert might have several child **elements** unique to that block, perhaps a header or a body. Element names are the block + the element name, separated by two underscores (`__`).

```css
.alert__header {}
.alert__body {}
```

There can be different types of alerts, such as success or error. These are _types_ are known as **modifiers**. Modifier names are the block + modifier name, separated by two hyphens (`--`). Modifier selectors are secondary class names that contain only the modified properties.

```css
.alert--success {}
.alert--error {}
```

When put together, we can have something like:
```html
<div class="alert alert--success">
  <h2 class="alert__header">This is the alert heading</h2>
  <div class="alert__body">
    <p>This is some alert text</p>
  </div>
</div>
```

[More on BEM Syntax](http://getbem.com)

## About items that do not use the naming convention

You will notice that not everything in follows the naming convention described above. There are two reasons for this:

1. Components are directly from the [U.S. Web Design System](https://designsystem.digital.gov)
2. Components developed before the Design System was fully established

**Any new components added to the Design System must use the naming convention.**

### What will happen to older components?

Some legacy components may be refactored to fit better with the old system. When those components are refactored, the legacy versions will remain in the codebase for XXXX weeks/cycles. Follow along for updates to the Design System to find out what has changed.