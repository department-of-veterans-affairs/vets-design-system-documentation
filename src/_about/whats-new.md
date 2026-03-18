---
layout: documentation
title: What's new?
intro-text: The latest news and updates on the VA Design System.
sidebar: false
on-this-page: false
---

<va-tabs initially-selected="0" label="Updates">
  <va-tab-item button-text="Guidance Site" target-id="panel-1"></va-tab-item>
  <va-tab-panel panel-id="panel-1">
    {% include _github_markdown_parser.html json=site.data.site_releases num_recent_releases=3 %}
    <va-link-action
      href="https://github.com/department-of-veterans-affairs/vets-design-system-documentation/releases"
      text="View all Guidance releases"
    ></va-link-action>
  </va-tab-panel>
  <va-tab-item button-text="VADS Component Library" target-id="panel-2"></va-tab-item>
  <va-tab-panel panel-id="panel-2">
    {% include _github_markdown_parser.html json=site.data.component_library_releases num_recent_releases=3 %}
    <va-link-action
      href="https://github.com/department-of-veterans-affairs/component-library/releases"
      text="View all VADS Component Library releases"
    ></va-link-action>
  </va-tab-panel>
  <va-tab-item button-text="Figma Component Library" target-id="panel-3"></va-tab-item>
  <va-tab-panel panel-id="panel-3">
    <iframe src="{{ site.figma_changelog_embed_url }}" title="Figma Component Library changelog" style="width:100%; height:640px; max-height:80vh"></iframe>
    <va-link-action
      href="{{ site.figma_changelog_direct_url }}"
      text="Open Component Library changelog in Figma"
    ></va-link-action>
  </va-tab-panel>
  <va-tab-item button-text="Content Style Guide" target-id="panel-4"></va-tab-item>
  <va-tab-panel panel-id="panel-4">
    <h3>January 2026</h3>
    {% capture content_style_guide_updates %}
{% include content/whats-new/january-2026.md %}
    {% endcapture %}
    {{ content_style_guide_updates | markdownify }}
    <va-link-action href="{{ site.baseurl }}/content-style-guide/whats-new" text="Read about older updates in the content style guide what's new page"></va-link-action>
  </va-tab-panel>
</va-tabs>
