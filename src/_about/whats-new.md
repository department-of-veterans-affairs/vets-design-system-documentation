---
layout: default
title: What’s new?
sidebar: true
anchors:
  - anchor: Guidance Updates
  - anchor: VADS Component Library Releases
  - anchor: Figma Component Library Changelog
---

# What’s new?

<div class="va-introtext">
  The latest news and updates on the VA Design System.
</div>

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