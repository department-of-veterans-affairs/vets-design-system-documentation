---
layout: pattern
title: Recover from errors
permalink: /patterns/help-users-to/recover-from-errors
redirect_from:
  - /patterns/messaging-error-messages
aka: Error messages
sub-section: help-users-to
intro-text: "Details the structure for error messages."
status: use-deployed
anchors:
  - anchor: How to structure an error message
  - anchor: Contact options for VA error messages
---

**Note:** These guidelines don’t apply to inline error messages in form fields (for example, “Enter a valid Social Security number”).

## How to structure an error message

### Step 1. Explain what went wrong
- In a standard alert style, explain the problem in the header. (In a slim alert style without a header, this will be in the main text). [Go to alert styles](https://design.va.gov/components/alert)
- If we caused the error, say “We’re sorry.” For example, “We’re sorry. There’s a problem with our system. We can’t access your records right now.”
- If a user action caused the error, don’t say “we’re sorry." But don’t blame the user. Use a neutral tone to describe the problem. For example, “We can’t upload this file type. Try uploading a .pdf or .doc file instead.”

### Step 2. Explain how to fix it (recovery step)
- After you explain the error, tell the user how to fix it. Include as many recovery steps as you need to make sure the user won’t get stuck in a dead end.
- If the error is likely to resolve on its own, use “Try again” or “Check back later” as the first step.
- If the first recovery step is something the user needs to do, provide a contact option as the second recovery step. For example, “If it still doesn’t work, call us at [number].”
- Make sure the recovery steps are clear, specific, and actionable. 
  - **Like this:** “We can’t upload this file type. Upload a .pdf or .doc file instead.”
  - **Not this:** “Invalid file type.”
- You can include a link or button in the error message, if needed to complete the recovery step.

## Contact options for VA error messages
These are some of the most common contact options we provide in error messages. Some errors may need a more specific contact option. 

You can add conditional statements before these recovery steps as needed. For example:
- If you need more help, …
- If it still doesn’t work, …
- If you have questions about your VA benefits, …

**Note:** When you create a new error message with a contact option, you’ll need coordinate with the Veteran Support team. Tell that team what triggers the error, the recovery steps, and how contact center staff can help people troubleshoot or resolve the problem. If you're launching a new product, you can include this information in the product guide. Otherwise, you can contact them via slack vsp-contact-center-support.

**Problem:** User needs technical help navigating VA.gov or using an online tool or form
- **Recovery step:** Call MyVA411
- **Text to use:** Call us at 800-698-2411 (TTY: 711). We’re here 24/7.

**Problem:** User needs help filling out a benefit application or has questions about VA benefits
- **Recovery step:** Call benefits hotline
- **Text to use:** Call us at 800-827-1000 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 9:00 p.m. ET. 

**Problem:** User needs help filling out an education benefits application or has questions about VA education benefits
- **Recovery step:** Call the GI Bill hotline
- **Text to use:** Call us at 888-442-4551 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 7:00 p.m. ET.

**Problem:** User needs help filling out a health benefits application or has questions about VA health care benefits
- **Recovery step:** Call health benefits hotline
- **Text to use:** Call us at 877-222-8387 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.

**Problem:** User needs to contact their health care provider or talk to someone at a VA medical center
- **Recovery step:** Call VA health facility
- **Text to use:** Contact your VA health facility. 
  [Find your VA health facility](https://www.va.gov/find-locations/?page=1&facilityType=health)

**Problem:** User needs help using My HealtheVet health tools
- **Recovery step:** Call the My HealtheVet help desk
- **Text to use:** Call us at 877-327-0022 (TTY: 711). We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.
