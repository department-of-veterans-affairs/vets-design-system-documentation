---
layout: default
title: Signed in vs. signed out
anchors:
  - anchor: Site header
  - anchor: Contextual CTAs (calls to action)
---

# Signed in vs. signed out
On VA.gov, there are a few differences between the signed in and signed out states.


## Site header
The site header appears globally at the top of every page. Its appearance is responsive to the user’s browser size.
### Large site header
#### Signed out
![image](https://user-images.githubusercontent.com/2838493/58288795-33cbff00-7d7a-11e9-8cc9-3d956030ac8c.png)
When users are signed out, the site header includes:
* VA logo
* Search
* Contact Us
* Sign In button
* Top navigational items
   * VA Benefits and Health Care
   * About VA
   * Find a Location

#### Signed in
![image](https://user-images.githubusercontent.com/2838493/58288819-4b0aec80-7d7a-11e9-9292-f932a62f545b.png)
When users are signed in, the site header includes:
* VA logo
* Search
* Contact Us
* Sign In button
* Top navigational items
   * VA Benefits and Health Care
   * About VA
   *  Find a Location
   *  My VA
   *  My Health

### Small site header
![image](https://user-images.githubusercontent.com/2838493/58288838-59590880-7d7a-11e9-85d5-e5d24029f505.png)

---
## Contextual CTAs (calls to action)
A contextual CTA is used when an action is required or recommended before a user starts a process (like applying for a VA benefit.) Contextual CTAs are placed within a larger chunk of content on a page. Placement depends on its importance compared to other content on the page. Often it is placed immediately after introduction text on a page.

### When is a contextual CTA appropriate?
Use a contextual CTA when:
* The user is required to do something before starting a process
* The user would benefit from doing something before starting a process
* The CTA includes important supplemental information
* An error has occurred and the user is blocked from proceeding

Use the [alert box component]() for contextual CTAs.

### Possible states of a contextual CTA
A contextual CTA may change based on the authentication status of the user.

#### CTA required to continue
Use the green alert box component when the user is required to do something before they can continue a process.

![image](https://user-images.githubusercontent.com/2838493/58289289-9d004200-7d7b-11e9-86ef-1878543005ea.png)

![image](https://user-images.githubusercontent.com/2838493/58289332-aee1e500-7d7b-11e9-9c2a-592757b2ddf2.png)

#### CTA beneficial, not required

Use the blue informational alert box component when the call to action is beneficial, but not required to proceed.
![image](https://user-images.githubusercontent.com/2838493/58289486-2dd71d80-7d7c-11e9-9e09-ea6ad0a94861.png)

#### Error
Use a red alert box component when the user is blocked from continuing a process. Always offer at least one way for the user to resolve the error.

![image](https://user-images.githubusercontent.com/2838493/58289387-d769df00-7d7b-11e9-96f3-2e1d311b3b84.png)


