---
layout: documentation
title: Domain Structure
permalink: /ia/domain-structure
intro-text: A domain name is the unique name for a website and serves as the site’s primary address and identifier. VA’s domain name is va.gov. All public-facing VA websites and services must reside on the va.gov domain, with rare exceptions.  
---

## Principles for domain structuring

- **Create single sources of truth:** Do not duplicate information or functionality across subdirectories or subdomains. 
- **Keep similar information together:** Information and tools related to the same audience and purpose must live within the same space.
- **Create relationships where important:** Subdirectories create relationships between similar information. Subdomains create separation between different information.
- **Preserve a seamless experience where expected:** Keep information that’s part of a continuous user journey in the same experience to avoid disorienting shifts in branding, navigation, or layout.

## Defining subdirectories and subdomains

VA’s domain name is va.gov. All public-facing VA websites and services must reside on the va.gov domain. We utilize subdomains and subdirectories to further structure information within the va.gov domain. How we structure information within the va.gov domain can impact technical costs, user experience, content management, and search engine optimization (SEO).

**Note:** In rare exceptions, we may create a separate top-level domain (such as [www.veteranscrisisline.net/](www.veteranscrisisline.net/)).

### Subdirectory

A subdirectory organizes the content and tools of a site into different sections or categories. A subdirectory appears to the right of the domain in a URL, such as “[www.va.gov/health-care](www.va.gov/health-care),” and keeps the content and tools within the main website. Most VA content and tools belong within a subdirectory of the main va.gov domain.

We further structure subdirectories into deeper levels of subdirectories and pages to create an appropriate hierarchy for and classification of all information. All subdirectories must follow our [URL standards]({{ site.baseurl }}/ia/url-standards).

Example of a properly structured domain with subdirectories:

<img width="500" alt="Example of a properly structured domain with subdirectories" src="https://github.com/user-attachments/assets/5b85fffb-2030-4509-b4e9-4eb8b6f2568a" />

Examples of proper use of a first-level subdirectory on va.gov: 

- [https://www.va.gov/education/](https://www.va.gov/education/)<br>Veterans use this subdirectory to access all information related to VA education benefits for Veterans
- [https://www.va.gov/my-health/](https://www.va.gov/my-health/)<br>Veterans sign in to use this subdirectory to access all functionality needed to manage their VA health care

**Note:** These examples show that the context of the information along with the intended audience meet the criteria for a subdirectory. The examples aren’t intended to showcase the content of the experience or the site design. 

### Subdomain 

A subdomain is an extension of the va.gov domain name that lives as a separate site. A subdomain appears to the left of the VA domain in a URL, such as “[design.va.gov](https://design.va.gov/).”   

We then use subdirectories within a subdomain to further organize information, such as “[design.va.gov/components](https://design.va.gov/components).” We don't further segment subdomains by adding tertiary level or beyond subdomains, such as “components.design.va.gov”—with the exception of development environments of the subdomain, such as “staging.design.va.gov.”

We use subdomains sparingly and only for only approved cases. All subdomain names and any subdirectories used within the subdomain must follow our [URL standards]({{ site.baseurl }}/ia/url-standards).

Example of a properly structured subdomain with subdirectories:

<img width="500" alt="Example of a properly structured domain with subdirectories" src="https://github.com/user-attachments/assets/5b85fffb-2030-4509-b4e9-4eb8b6f2568a" />

Examples of proper use of a subdomain:

- [https://design.va.gov](https://design.va.gov)<br>VA employees and contractors use this subdomain to access all the information related to VA web and mobile app design standards, including IA, content, and accessibility standards   
- [https://developer.va.gov](https://developer.va.gov)<br>VA employees and contractors use this subdomain to access VA application programming interfaces (APIs) to develop tools to serve Veterans  

**Note:** These examples show that the context of the information along with the intended audience meet the criteria for a subdomain. The examples are not intended to showcase the content of the site or the site design.

## Criteria for subdirectory or subdomain use

We have developed these criteria for use in determining subdirectories and subdomains as we continue to build new experiences and modernize existing experiences. Because modernization is a continuous process, all existing experiences may not currently align with these criteria and can't be used as examples of proper structuring. 

### When a subdirectory of the primary domain is appropriate 

All information and tools supporting our primary audience and mission must live in a subdirectory of the va.gov domain. This includes all information and tools that meet either of these descriptions: 

- Information and tools that Veterans, their family members, and those who support them need to discover, learn about, apply, track, and manage VA benefits, health care, programs, and services, **or**
- Information about the VA facilities and offices that manage and support VA benefits, programs, services, and health care offered to Veterans, their family members, and those who support them. Note that VA program office content can provide information for VA partners, including basic information and links those audiences may need. For partner audiences who need extensive amounts of information or functional tools, we would consider a separate space. 

[Review the guidance for placement of content and functionality within the existing subdirectory structure of www.va.gov.]({{ site.baseurl }}/ia/web-placement-criteria) 

### When a subdomain may be appropriate 

Information and tools that don’t directly relate to our primary mission may be eligible for a subdomain. We may consider a potential subdomain for these types of needs: 

- Experiences that fulfill a distinct need separate from the primary mission of va.gov and are generally for a broad audience. For example, [news.va.gov](https://news.va.gov/), [research.va.gov](https://www.research.va.gov/), and [data.va.gov](https://data.va.gov/). 
- Experiences that offer information or tools current or future VA employees and contractors need to do their jobs and need access to while not on the internal VA network. For example, [design.va.gov](https://design.va.gov/) and [developer.va.gov](https://developer.va.gov/).
- Experiences that require both information and tools for VA partners to support VA benefits, health care, programs, and services (such as providers submitting claims or providing care). For example, representatives.va.gov.

Experiences that have certain technical constraints may also be eligible for a subdomain. We may consider a potential subdomain for these types of needs:

- The experience cannot be hosted on va.gov due to platform or infrastructure limitations
- The experience requires domain-level isolation to meet ATO, FISMA, FedRAMP, or similar requirements
- The experience or service operates with a separate lifecycle, team, or delivery model that cannot be integrated without undue burden

## Requesting a subdirectory or subdomain

Process information for requests coming soon.
