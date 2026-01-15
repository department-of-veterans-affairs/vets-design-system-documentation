---
title: Domain Structure
description: Guidelines for using subdomains and subdirectories on VA.gov
---

# Domain Structure

A domain name serves as a website's unique identifier and primary address. VA's domain is **va.gov**, and all public-facing VA websites must reside on this domain with rare exceptions.

## Principles for Domain Structuring

- **Create single sources of truth:** Avoid duplicating information or functionality across subdirectories or subdomains
- **Keep similar information together:** Related content for the same audience must occupy the same space
- **Create relationships where important:** Subdirectories establish connections between similar information; subdomains create separation
- **Preserve seamless experience:** Maintain continuity for user journeys to prevent disorienting shifts in branding, navigation, or layout

## Subdirectories vs. Subdomains

### Subdirectory

Subdirectories organize content into sections within the main website. They appear after the domain in URLs (e.g., `www.va.gov/health-care/`).

**Characteristics:**
- Keeps content within the main website
- Accommodates most VA content and tools
- Must follow URL standards
- Can be nested into multiple levels

**Examples:**
- `https://www.va.gov/education/` - Veterans access education benefits information
- `https://www.va.gov/my-health/` - Veterans manage VA health care functionality

### Subdomain

Subdomains operate as separate sites extending the va.gov domain name, appearing to the left (e.g., `design.va.gov`).

**Characteristics:**
- Functions as a distinct, separate site
- Used sparingly and only for approved cases
- Can include subdirectories for organization (e.g., `design.va.gov/components`)
- Development environments may include staging subdomains
- Must follow URL standards

**Examples:**
- `https://design.va.gov` - Design standards for VA employees and contractors
- `https://developer.va.gov` - API access for developers building VA tools

## Criteria for Subdirectory Use

**Subdirectories are appropriate for:**

- Information and tools Veterans, family members, and supporters need to discover, learn about, apply, track, and manage VA benefits, healthcare, programs, and services
- Information about VA facilities and offices managing benefits and services

## Criteria for Subdomain Use

**Subdomains may be appropriate for:**

### Mission-Related Experiences

- Distinct needs separate from va.gov's primary mission serving broad audiences (e.g., `news.va.gov`, `research.va.gov`, `data.va.gov`)
- Information and tools for VA employees and contractors working remotely (e.g., `design.va.gov`, `developer.va.gov`)
- Partner-focused experiences for claims submission or care provision (e.g., `representatives.va.gov`)

### Technical Constraints

- Experiences with platform or infrastructure limitations preventing va.gov hosting
- Requirements for domain-level isolation meeting ATO, FISMA, or FedRAMP standards
- Separate lifecycle, team, or delivery models creating integration burdens

## Exception

In rare cases, separate top-level domains may be created (e.g., `www.veteranscrisisline.net`).

## Requesting Changes

Contact the IA team via #content-ia-centralized-team on Slack for subdirectory or subdomain requests.
