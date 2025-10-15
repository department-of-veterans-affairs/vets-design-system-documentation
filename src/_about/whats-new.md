---
layout: documentation
title: What's new?
intro-text: The latest news and updates on the VA Design System.
sidebar: true
---

## Guidance Updates

{% include _github_markdown_parser.html json=site.data.site_releases num_recent_releases=3 %}

<va-link-action
  href="https://github.com/department-of-veterans-affairs/vets-design-system-documentation/releases"
  text="View all Guidance releases"
></va-link-action>

## VADS Component Library Releases

{% include _github_markdown_parser.html json=site.data.component_library_releases num_recent_releases=3 %}

<va-link-action
  href="https://github.com/department-of-veterans-affairs/component-library/releases"
  text="View all VADS Component Library releases"
></va-link-action>

## Figma Component Library Changelog

<iframe src="{{ site.figma_changelog_embed_url }}" style="width:100%; height:640px; max-height:80vh"></iframe>

<va-link-action
  href="{{ site.figma_changelog_direct_url }}"
  text="Open Component Library changelog in Figma"
></va-link-action>

## Content Style Guide Updates

### August 2025

{% include content/whats-new/august-2025.md %}

<va-link-action
  href="{{ site.baseurl }}/content-style-guide/whats-new"
  text="Read about older updates in the content style guide what's new page"
></va-link-action>
