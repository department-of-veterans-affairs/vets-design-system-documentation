---
layout: default
title: Signed out vs. signed in
draft: true
anchors:
  - anchor: Site header
  - anchor: Contextual calls to action
---

# Signed out vs. signed in

<p class="va-introtext">If a user has not signed in to VA.gov, we know very little information about the user. When the user signs in and verifies their identity, we know who the user is. In either case, we display the most relevant content, features, and calls to action.</p>

## Site header

The site header appears at the top of every page. Since VA.gov is responsive, the header’s design adapts to the width of the screen.

### Large screens

When users sign in, the Sign In button is replaced by a link displays the user's first name. **My VA** and **My Health** are also shown as top navigation elements.

<div class="vads-l-row medium-screen:vads-u-margin-x--neg2">
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 vads-u-margin-bottom--2 medium-screen:vads-u-padding-x--2">
    <strong>Signed out</strong>
    <a href="https://user-images.githubusercontent.com/2838493/58288795-33cbff00-7d7a-11e9-8cc9-3d956030ac8c.png"><img src="https://user-images.githubusercontent.com/2838493/58288795-33cbff00-7d7a-11e9-8cc9-3d956030ac8c.png" alt=""/></a>
  </div>
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 medium-screen:vads-u-padding-x--2">
    <strong>Signed in</strong>
    <a href="https://user-images.githubusercontent.com/2838493/58288819-4b0aec80-7d7a-11e9-9292-f932a62f545b.png"><img src="https://user-images.githubusercontent.com/2838493/58288819-4b0aec80-7d7a-11e9-9292-f932a62f545b.png" alt=""></a>
  </div>
</div>

### Small screens

When users are signed into the site on a smaller device, the Sign In link is replaced with the user's first name.

<div class="vads-l-row medium-screen:vads-u-margin-x--neg2">
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 vads-u-margin-bottom--2 medium-screen:vads-u-padding-x--2">
    <strong>Signed out</strong>
    <a href="https://user-images.githubusercontent.com/2838493/58352243-9d0e4980-7e30-11e9-8ba1-96e583d69734.png"><img src="https://user-images.githubusercontent.com/2838493/58352243-9d0e4980-7e30-11e9-8ba1-96e583d69734.png" alt=""/></a>
  </div>
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 medium-screen:vads-u-padding-x--2">
    <strong>Signed in</strong>
    <a href="https://user-images.githubusercontent.com/2838493/58352733-15c1d580-7e32-11e9-996c-8e8163cf287c.png"><img src="https://user-images.githubusercontent.com/2838493/58352733-15c1d580-7e32-11e9-996c-8e8163cf287c.png" alt=""></a>
  </div>
</div>

When users are signed in and have opened the menu, **My VA** and **My Health** are shown as options at the bottom of the list.

<div class="vads-l-row medium-screen:vads-u-margin-x--neg2">
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 vads-u-margin-bottom--2 medium-screen:vads-u-padding-x--2">
    <strong>Signed out</strong>
    <a href="https://user-images.githubusercontent.com/2838493/58352289-c333e980-7e30-11e9-8d33-57a790147f99.png"><img src="https://user-images.githubusercontent.com/2838493/58352289-c333e980-7e30-11e9-8d33-57a790147f99.png" alt=""/></a>
  </div>
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 medium-screen:vads-u-padding-x--2">
    <strong>Signed in</strong>
    <a href="(https://user-images.githubusercontent.com/2838493/58352812-57528080-7e32-11e9-9f12-f4dbece73049.png"><img src="https://user-images.githubusercontent.com/2838493/58352812-57528080-7e32-11e9-9f12-f4dbece73049.png" alt=""></a>
  </div>
</div>


## Contextual calls to action

A contextual CTA is used when an action is required or recommended before a user starts a process (like applying for a VA benefit.) Contextual CTAs are placed within a larger chunk of content on a page. Placement depends on its importance compared to other content on the page. Often it is placed immediately after introduction text on a page.

### When is a contextual CTA appropriate?

Use a contextual CTA when:
* The user is required to do something before starting a process
* The user would benefit from doing something before starting a process
* The CTA includes important supplemental information
* An error has occurred and the user is blocked from proceeding

Use the [alert box component]({{ site.baseurl }}/components/alert-boxes) for contextual CTAs.

### Possible states of a contextual CTA

A contextual CTA may change based on the authentication status of the user.

#### CTA required to continue

Use the green alert box component when the user is required to do something before they can continue a process.

<div class="vads-l-row medium-screen:vads-u-margin-x--neg2">
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 vads-u-margin-bottom--2 medium-screen:vads-u-padding-x--2">
    <strong>Signed out</strong>
    <a href="https://user-images.githubusercontent.com/2838493/58289289-9d004200-7d7b-11e9-86ef-1878543005ea.png"><img src="https://user-images.githubusercontent.com/2838493/58289289-9d004200-7d7b-11e9-86ef-1878543005ea.png" alt=""/></a>
  </div>
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 medium-screen:vads-u-padding-x--2">
    <strong>Signed in</strong>
    <a href="(https://user-images.githubusercontent.com/2838493/58289332-aee1e500-7d7b-11e9-9c2a-592757b2ddf2.png"><img src="https://user-images.githubusercontent.com/2838493/58289332-aee1e500-7d7b-11e9-9c2a-592757b2ddf2.png" alt=""></a>
  </div>
</div>

#### CTA beneficial, not required

Use the blue informational alert box component when the call to action is beneficial, but not required to proceed. Usually, it is a better experience when the user is signed in, so the prompting the user to sign in first is the primary action.

![image](https://user-images.githubusercontent.com/2838493/58289486-2dd71d80-7d7c-11e9-9e09-ea6ad0a94861.png)

#### Error

Use a red alert box component when the user is blocked from continuing a process. Always offer at least one way for the user to resolve the error.

![image](https://user-images.githubusercontent.com/2838493/58289387-d769df00-7d7b-11e9-96f3-2e1d311b3b84.png)


