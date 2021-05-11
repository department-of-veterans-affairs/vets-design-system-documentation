---
layout: default
title: For designers
anchors:
  - anchor: How to work with the VA.gov Design System
  - anchor: Design resources
  - anchor: Sketch for teams at VA
slug: designers
---

# Documentation for designers

<div class="va-introtext">
Designers are urged to read through each section of design.va.gov and see all components and patterns in use on VA.gov. The utilities section is also useful to help foster ideas in how a particular design solution can be constructed.
</div>

## How to work with the VA.gov Design System

The VA.gov Design System is VA.gov’s front-end framework. This site documents most of the components in the Sketch library. However, some components will be migrated over the next few release cycles.

Before getting started, we recommend that you get familiar with the VA.gov Design System and how you can use it as part of your design process. Each section includes some helpful information:

- **[Content style guide](../content-style-guide):** Our house style guide for VA.gov. Follow the guidelines to help you create a **consistent, helpful experience for Veterans.**
- **[Design](../design):** This section explains VA.gov's **base styles and visual language**. You should set margins and padding in your design comps using the **[8pt spacing units](../design/spacing-units)**.
- **[Components](../components):** Components are the "UI fragments," such as buttons and accordions. Some of these have strict usage guidelines, so please become familiar with them.
- **[Utilities](../utilities):** This section mostly describes CSS, but that doesn't mean it is only for front-end developers. Formation guides design implementation, so **understanding the utilities may assist in how designers describe their work**. **Many of the utilities are responsive** and can be used to modify or enhance designs for different screen widths at a low development cost.
- **[Patterns](../patterns):**  How components, content strategy, information architecture, accessibility, and visual design work in tandem to solve Veterans' needs. Here, you will find information on how Hub pages are structured, how to build multi-part forms, etc.
- **[Layout](../layout):** The layout section describes the **design grid** and tools you can use to create page or design pattern structure.


## Design resources

The website displays HTML and CSS examples of the various components and patterns in use on VA.gov. You can use your browser’s web inspector to view the specs for each component. However, if you use Sketch, each of these components have been added to a pattern library as well.

<ul class="usa-unstyled-list">
  <li><a href="{{ site.baseurl }}/downloads/VA-gov-Pattern-Library.sketch"><span class="fa fa-download vads-u-display--inline-block vads-u-margin-right--1"></span>Download the Sketch Pattern Library</a></li>
</ul>

## Sketch for Teams at VA

Design teams at VA use Sketch for Teams to view, share, and collaborate on our work. Only designers actively working on products at VA.gov can be added to Sketch for Teams.

### Get added to Sketch for Teams

1. Go to [sketch.com](https://www.sketch.com/signup) and create a Sketch account 
2. In the #design channel in Slack, ping a Sketch for Teams admin (currently Kevin Hoffman or Ryan Thurlwell) requesting to be added
3. Receive the invite via email, accept the invitation
4. Boom, you're in! 

### Using Sketch for Teams

Sketch for Teams works very similar to "normal" Sketch, but contains a few big features that help teams work together:

- Files (including libraries) live in the cloud, rather than locally on your machine
- You can see what everyone else is doing
- You receive Library updates automagiclly
- Developers can inspect any element on a page, anytime

To get started on a new project, there are only a couple steps:

1. Duplicate and rename the [Sketch for Teams Template](https://www.sketch.com/s/2f665c26-160d-474e-b5cc-bb94e73bb91a) into your team's folder
2. In the Sketch app, go to Sketch > Preferences > Libraries and add the VA-gov-Pattern-Library.

### Libraries

Do not modify VA-gov-Pattern-Library. Only OCTO-DE and the Design System Team should edit the library. 

**Load the VA.gov pattern library**

Use the master VA.gov pattern library to access components, page templates, and mark up in order to design things.

In Sketch for Teams, the master library lives in the cloud, which means you no longer have to manually download the library every time it’s updated.

To access and enable the master VA.gov pattern library, follow these steps:

1. In Sketch, open the **preference panel** (or press `command` and `,` )
2. In the preferences panel, select the **Libraries tab**
3. You should see a section called VA.gov Design Cloud Libraries. Select the library named “**VA-gov-Pattern-Library**”

Once you’ve loaded the library, you should be able to access everything in it by going to **Insert** > **Symbols** > **VA-gov-Pattern-Library**

### Naming conventions

We use naming conventions to organize Sketch files in order for other people to easily view, update, or edit your Sketch files.

### Pages

Pages contain all of the artboards for the product. Each page should have a specifc purpose—iterations on a specific user flow, a prototype, etc.

Name pages in such a way other designers, engineers, product folks, and stakeholders can understand and navigate them. Always start version numbering with 3 digits (e.g. v001).

**Name pages like this:**

[Product name - purpose - focus (optional) - version number)]

**Examples**

- VAOSR - Exploration - Calendar widget - v001
- VAOSR - Prototype - Community care - v001
- VAOSR - Direct schedule - v001

### Artboards

Artboard naming conventions should reflect the page they reside just like breadcrumbs on a website. Use numbers or descriptions for clarity as needed. 

**If the page name is**

- VAOSR - Exploration - Calendar widget - v001

**Then artboards would be named**

- VAOSR - Exploration - Calendar widget - 001


### Troubleshooting

- Sometimes preview version of artboards on Sketch for Teams have display errors. Try embedding fonts or asking someone else open and close the file—weirdly this seems to work.


### Leaving Sketch for Teams

People change projects frequently, and we have a limited number of licenses for Sketch for Teams. If you roll off work at VA or no longer use Sketch for Teams, please email Kevin Hoffman.

