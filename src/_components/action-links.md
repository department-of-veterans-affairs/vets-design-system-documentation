---

layout: default
title: Action Link 
draft: true
---

# Action links

**EXPERIMENTAL**

This component is experimental because it needs more research to validate it. Please share any research to the #vsp-design-system slack channel. 

![action links]({{site.baseurl}}/images/action-links.png) 


## Guidance

### When to use the Action Link component
Use an action link when hierarchy requires it. The action link is an  eye-catching link to start a digital service. An action link entices users to take action. Example: Starting a benefit application 

**Note:** Action links will be replacing green primary buttons that link to another page. 


### When to consider something else
- Do not use an action link for clickable actions, such as “download,” “sign up,” “submit” or “log out.”. Use [buttons](https://design.va.gov/components/buttons) instead. 
- Do not use action links to navigate between form pages. Use default and secondary buttons instead. 
- Do not use action links to just link to another page or site. If a link does not need to be prominent on the page use a less prominent [link style.](https://design.va.gov/design/typography)

### Usability guidance: how to use it
- Keep action link content short. Start with a verb. For example: “*Apply for health care benefits*” or “*Register for care*”
- Use a primary (green) action link to serve the purpose of the primary call to action on a page or a digital start to a service. 
- Use a default (blue) action link to serve the purpose for when there are multiple action links on a page or if actions do not have hierarchy over each other. 
- The icon on the left of the link text will be slightly out of the grid to grab the attention of the user. 
 
## Accessibility
- The action link needs to listen for click events, as well as the `ENTER` and `SPACE` keypresses
- Action links should only use an anchor tag <a>. The <a> element, or anchor element, is used to create a hyperlink to another webpage or another location within the same webpage. 
- It is important to use Action Links for calls to actions that link to another page rather than buttons, because screen readers always say “link” before links, and “button” before buttons. 
- Button and link confusion can be very frustrating for assistive technology users. A user with a screen reader may pull up a list of links and may not find a specific link because it turns out that it has actually been designated as a button in the markup. 
- Using links and buttons intentionally results in a more inclusive experience for assistive technology users. Make sure to read both [buttons](https://design.va.gov/components/buttons) and action link guidance to determine what is needed for a page and when each should be used. 
