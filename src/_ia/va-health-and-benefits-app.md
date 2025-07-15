---
layout: documentation
title: VA Health and Benefits app
permalink: /ia/va-health-and-benefits-app
intro-text: Information Architecture guidance and documentation specific to the VA Health and Benefits mobile app.
anchors:
  - anchor: When to think about IA
  - anchor: IA documentation
  - anchor: Adding new items to the app's Information Architecture
  - anchor: Background
---

## IA documentation

Understanding what's guiding the app's current information architecture and make future decisions that are in line with the existing organization, navigation, labeling, and indexing systems.

### Sitemap/flow diagram

A sitemap is a planning tool that visually shows how information will be grouped and labeled, where content will be located, and how a user will move through the app. This adaptation of a standard sitemap includes the system display logic for screens that have variants, key actions (buttons, links), common processes and points where it makes use of native mobile integrations. **This is the source of truth for the app's IA.**

[VA Mobile App - Detailed sitemap 2.0](https://www.figma.com/design/bTPnmfYSuj1ICA4AqHMiQg/Sitemap-Flow-Diagram-2.0---%F0%9F%9A%A2-Shipped--FJ----VA-Mobile?node-id=0-1&t=R8WNti0EYo6jJeqp-1)

### Taxonomy description

The VA Health and Benefits app's IA contains four top level categories: Home, Benefits, Health and Payments. Each category contains at least two features and/or subcategories. Features within each category should be grouped into subsections if the number of features in a category exceeds six.

#### Top level categories and contents

- **Home:** The app's default screen—displays a combined, personalized view of the information (and tasks) most relevant to the individual Veteran from across the VA, plus persistent access to general VA info (ex: contact and location finder) and lesser used features like Profile and Settings.
    - **Profile (Subcategory):** Infrequently updated items like personal information (such as contact information, military information, DOB) that isn't specific to a single category and app settings.

- **Health:** All health-related features and statuses.
    - Features: Appointments, Prescriptions, VA vaccine records, Messaging (future: Medical records)

- **Benefits:** All benefit-related features and statuses that are not health-related.
    - Features: Disability rating, Claims, VA Letters (future: Education)

- **Payments:** A unified section for managing financial information from across the VA.
    - Features: VA payment history, direct deposit information (future: Medical copays, Bills, Travel reimbursements)

## Adding new items to the app's Information Architecture

1. A feature's placement within the app's navigation and taxonomy should take user mental models, business goals, and the feature type into account.

2. Always try to find a placement in an existing category first before proposing a new top-level category.

3. Within a category, keep the hierarchy as flat as possible in terms of screens.

4. If there are many features within a category, group the features and label the groups at category level.

5. All features in the VA mobile app should have a primary placement within the app's taxonomy.

6. When content outgrows the current category structure, conduct card sort research.

## Background

The VA Health and Benefits app's Information Architecture is based on a multi-stage, collaborative design and research process:

- **Phase I:** Two rounds of card sorting with Veterans
- **Phase II:** Navigation model design exploration, audit and comparative analysis
- **Phase III:** Evaluative testing with Veterans, including a usability study of the proposed navigation model and sitemap
