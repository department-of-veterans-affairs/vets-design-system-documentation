---
layout: default
sub_section: naming
title: Naming Convention
---

# Naming Convention

<div class="va-introtext">
Naming conventions are an important aspect of any design system. A successful naming convention should help:
</div>

* Provide clarity and scope
* Keep CSS specificity low
* Allow for backwards compatibility with legacy code

A typical example would be:

<div class="va-introtext" markdown="1">
`vads-c-component`
</div>

## Parts of naming convention

Naming convention consists of three required parts.

* **Global namespace**
* **Class prefix**
* **BEM Syntax**

When put together, the structure is `[global namespace]-[class prefix]-[BEM syntax]`

There are other option parts of the naming convention as well.

* Breakpoint prefix
* JavaScript hook

### Global namespace

The global namespace is `vads`, which is short for **VA Design System**. The global namespace helps identify a class that belongs to Formation from any other classes that might be created specifically for an application.

### Class prefix

Class prefixes help indicate the function of a class. There are three main functions for classes in Formation:

* `c` for Component
* `u` for Utility
* `l` for Layout

### BEM Syntax

BEM Syntax stands for **Block**, **Element**, **Modifier**.

While the BEM syntax typically results in longer class names, it is excellent for providing information about how classes are scoped.

[More on BEM Syntax](http://getbem.com)

## A note about some components in this design system

You will notice that not everything in Formation follows the naming the convention described above. There are two reasons for this:

1. Components are directly from the [U.S. Web Design System](https://design.digital.gov)
2. Components developed before Formation was fully established

Any new components added to Formation **must** use the naming convention.

### What will happen to older components?

Some legacy components may refactored to fit better with the old system. When those components are refactored, the legacy versions will remain in the codebase for XXXX weeks/cycles. Follow along for updates to Formation to find out what has changed.

