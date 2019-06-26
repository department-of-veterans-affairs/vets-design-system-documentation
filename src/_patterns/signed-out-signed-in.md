---
layout: default
title: Signed out vs. signed in
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
    <p><strong>Signed out</strong></p>
    <a href="/images/pattern-header-signed-out.png"><img src="/images/pattern-header-signed-out.png" alt="signed out header on desktop"/></a>
  </div>
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 medium-screen:vads-u-padding-x--2">
    <p><strong>Signed in</strong></p>
    <a href="/images/pattern-header-signed-in.png"><img src="/images/pattern-header-signed-in.png" alt="signed in header on desktop"></a>
  </div>
</div>

### Small screens

When users are signed into the site on a smaller device, the Sign In link is replaced with the user's first name.

<div class="vads-l-row medium-screen:vads-u-margin-x--neg2">
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 vads-u-margin-bottom--2 medium-screen:vads-u-padding-x--2">
    <p><strong>Signed out</strong></p>
    <a href="/images/pattern-small-header-signed-out.png"><img src="/images/pattern-small-header-signed-out.png" alt="signed out view of mobile header"/></a>
  </div>
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 medium-screen:vads-u-padding-x--2">
    <p><strong>Signed in</strong></p>
    <a href="/images/pattern-small-header-signed-in.png"><img src="/images/pattern-small-header-signed-in.png" alt="Signed in view of mobile header"></a>
  </div>
</div>

When users are signed in and have opened the menu, **My VA** and **My Health** are shown as options at the bottom of the list.

<div class="vads-l-row medium-screen:vads-u-margin-x--neg2">
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 vads-u-margin-bottom--2 medium-screen:vads-u-padding-x--2">
    <p><strong>Signed out</strong></p>
    <a href="/images/pattern-small-menu-open-signed-out.png"><img src="/images/pattern-small-menu-open-signed-out.png" alt="screenshot of menu open when signed out"/></a>
  </div>
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 medium-screen:vads-u-padding-x--2">
    <p><strong>Signed in</strong></p>
    <a href="/images/pattern-small-menu-open-signed-in.png"><img src="/images/pattern-small-menu-open-signed-in.png" alt="screenshot of menu open when signed in"></a>
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
    <p><strong>Signed out</strong></p>
    <a href="/images/pattern-cta-sign-in-create-account.png"><img src="/images/pattern-cta-sign-in-create-account.png" alt="create account screenshot"/></a>
  </div>
  <div class="vads-l-col--12 medium-screen:vads-l-col--6 medium-screen:vads-u-padding-x--2">
    <p><strong>Signed in</strong></p>
    <a href="/images/pattern-cta-verify-identity.png"><img src="/images/pattern-cta-verify-identity.png" alt="verify identity screen shot"></a>
  </div>
</div>

#### CTA beneficial, not required

Use the blue informational alert box component when the call to action is beneficial, but not required to proceed. Usually, it is a better experience when the user is signed in, so the prompting the user to sign in first is the primary action.

![call to action screenshot](/images/pattern-cta-sign-in.png)

#### Error

Use a red alert box component when the user is blocked from continuing a process. Always offer at least one way for the user to resolve the error.

![verify identity error](/images/pattern-verify-identity-error.png)


