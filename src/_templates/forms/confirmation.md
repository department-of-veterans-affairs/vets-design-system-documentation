---
layout: pattern
permalink: /templates/forms/confirmation
has-parent: /templates/forms/
title: Confirmation
status: use-deployed
intro-text: "The form confirmation page gives users information about what they can expect after they submit an online application. This page also provides users with a summary of the benefit they applied for, a confirmation number, and the date they submitted their claim."
anchors:
  - anchor: Example
  - anchor: Structure
  - anchor: Related
---

Our current confirmation pages vary in format and content. Below are some of the default components used in our current confirmation pages. Teams should tailor the layout and content as needed based on the benefit type and/or stakeholder feedback.

## Example

![form confirmation template]({{site.baseurl}}/images/templates/forms/confirmation/mini-template.png) 

The form confirmation page consists of:

1. H1 (should carry over from H1 from the online form)  
2. Success alert   
3. Print this page pattern  
4. Other content elements (may include process list/subway map)
5. Action link  
6. Helpful content  

### Instances of this template in production

{% include component-example.html alt="An example of a confirmation page." file="/images/templates/forms/confirmation/health-care-confirmation.png" caption="Example of the Apply for health care confirmation page." width="50%" %}


## Structure

### H1

File for [benefit] or Apply for [benefit] and the VA paper form equivalency appears next to or below the H1.

Example:  
File for disability compensation (Form 21-526EZ)

### Success alert 

![success alert]({{ site.baseurl }}/images/templates/forms/confirmation/success-alert.png) 

Use a [success alert]({{ site.baseurl }}/components/alert#success-alert) to let your user know that they’ve successfully submitted their form. Content for the success alert will depend on the form.

Example messages of success alerts on other form confirmation pages:

**You’ve successfully submitted your application.**
Once we’ve reviewed your application, a Caregiver Support Coordinator will contact you to discuss next steps. 

### Print this page pattern 

![print this page pattern]({{site.baseurl}}/images/templates/forms/confirmation/print-this-page.png) 

The print this page pattern consists of the [Featured content component]({{ site.baseurl }}/components/featured-content), content, and a “Print this page” [default blue button]({{ site.baseurl }}/components/button). 

Print this page pattern consists of:
- Benefit they’ve applied for
- Applicant name
- Confirmation number (if applicable)
- The date that claim or application was submitted
- Other important information about their claim, such as disability conditions, they’re claiming. (if applicable)
- “Print this page” default blue button

### Other content elements 
Content to include on the confirmation page will depend on the type of benefit. Some benefit confirmation pages might need more information than others.

Content writers and designers should work together to determine the best format and content for the confirmation page, based on the type of benefit and stakeholder input. The [Process list (subway map) component]({{ site.baseurl }}/components/process-list) can be a good solution for presenting next steps or processes where the user may need to track progress over an extended period of time.

Some examples of other content or questions are:
- What happens after I apply? 
- How long will it take VA to process the application?
- What can the applicant do while they wait?
- Are there any actions the applicant needs to take while they wait?
- What can the applicant do if they have additional questions after they apply?
 
### Action link

![confirmation page action link]({{site.baseurl}}/images/templates/forms/confirmation/action-link.png) 

 The [action link]({{ site.baseurl }}/components/link/action) guides the user back to the VA.gov homepage. 

### Helpful content

![need help content]({{site.baseurl}}/images/templates/forms/confirmation/need-help.png) 

Helpful content will vary depending on the form. Use the H3 highlight for the title and always label it “Need help?”. The content usually points the user to a number they can call if they need help with their form. 

## Related
- [Form Confirmation Page content guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/form-confirmation-page.md) (GitHub)
