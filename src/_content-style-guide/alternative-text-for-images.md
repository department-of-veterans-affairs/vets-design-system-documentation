---
layout: content-style-guide
title: Alternative text for images
---

## What alternative text is

Alternative text (also called "alt text") is a written substitute for a visual image on a screen. Alt text provides the content and purpose of the image to people who can't perceive the visual image. 

## Why we must provide relevant and meaningful alt text

This helps us make sure that everyone on VA.gov gets the same information—no matter how they interact with our site.  

For example:

- People who are blind or have low vision can listen to the alt text description of an image on their screen reader.
- People who've turned off images on their device because they have low internet bandwidth can read the alt text description instead.

### A note on decorative images

Images that are for decorative purposes only don't require alt text.

Here's when we consider an image decorative:

- The image doesn't provide important context to the page content, **and**
- The image isn't used as a link to direct people to more information

## How to create quality alt text

Follow these 5 tips to create relevant and meaningful alt text:

1. **Provide the same meaningful information the image provides.** Use clear, descriptive text to describe what the person needs to know from the image. Be sure to consider the context of the image within the surrounding page content as well.
2. **Be concise.** Use as few words as possible to tell the person what they need to know. Aim for no more than 150 characters. Concise content allows people to focus on the most important information.
3. **Avoid duplicate page content.** Only include unique information that's not also in page content near the image. Repeating information can cause frustration or confusion.
4. **Skip phrases like "image of," "photo of," or "graphic of."** Screen readers already announce that each image is a graphic. So you don't need to add this context. 
5. **Leave the image file name out of your alt text.** File names don't provide useful information and can cause frustration or confusion.

## Privacy guidance 

**Personally Identifiable Information (PII) or Protected Health Information (PHI) shouldn’t be used in alt text for images if the images are interactive.** 

- This ensures the information isn’t tracked back in analytics or other logs. 
- Interactions with images are logged in some analytics tools so alternative text must be masked to protect PII/PHI.  
[Learn more about masking information in the Datadog RUM dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/setup-real-user-monitoring.md#privacy) 
- For example, a page has images representing a series of x-rays, and each x-ray includes the body part and injury that is the focus of the image (ex. anterior fracture of the left tibia). The body part and injury x-rayed are considered PHI.    

[Learn more about PII/PHI on the VA Platform website](https://depo-platform-documentation.scrollhelp.site/research-design/what-is-pii)  
