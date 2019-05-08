---
layout: default
title: Forms
anchors:
  - anchor: Pre-filled data
  - anchor: List and loop
  - anchor: Chapter sequences
  - anchor: Double entry
  - anchor: Upload documentation
  - anchor: Progressive disclosure
  - anchor: Tooltips
  - anchor: Writing questions
  - anchor: Simple templates
---

# Forms

Patterns used in form design

## Pre-filled data

- when to use pre-filled input
- when to use text string
- review style?
-

## List and loop

The fractal form. Long list about a lot of things where follow-up questions are repeated based on certain conditions. For example:  DOB, Name, Address, of each family member.

- When would you use this pattern?

Listing them first allows us to do things like label them specifically. "Tell us about Jane's level of education and income. Okay, now tell us about Timmy" This helps maintain context with cognitive impairments, or just fatigue.  Also, on small screens.


## Chapter sequences

- Info about the veteran first
- Don't skip chapters even if entire chapter can be pre-filled
  - we don't trust VA data
- Why do we put contact info at the end?
- What constitutes a chapter


Chapters and Sequencing of Applications

What constitutes a chapter??
- A group of related questions on 1+ pages (service history, contact information, financial information, family information, etc.). If you are looking at a paper form, consider how questions are grouped. That grouping could constitute a chapter. You may choose to reorganize questions in a form based on how a user understands the questions from research.
- A chapter may consist of one or more pages.
- To decide how many questions to put on a page, consider how the page will look on mobile first. A user should not need to scroll extensively; default to a few more pages per chapter.
- If questions are conditional (e.g. an answer to one questions may prompt additional questions), try to keep the grouped questions together on the same page.
- The chapter progress meter at the top of the screen only tracks chapters, not individual pages. We also add the "Chapter 1 of 6" header at the top. For chapters with one page, the chapter title is sufficient; for chapters with multiple pages, a page title is needed.
(why we do it this way) Veterans care about the main headers. Logic + contextual questions may add pages to a form.

Why do we put contact information at the end?
- We try to put the most important information relevant to that application upfront. That is typically name, social, service history, followed by application-specific questions. Contact information, while important, is standard on most applications, can be prefilled for users who are logged in, and thus don't need to take up mental space.

## Upload documentation  

Use cases
- I'm claiming a benefit, and there is a related application that i need to upload in order to get this benefit
- File size (25 mb)
- I'm claiming a benefit, and i need to upload my DD214 or other evidence as part of the application
- File format: (JPG, PDF, PNG, Gif, BMP, No zip, .doc. .xls, .ppt, ra xray image)
  - Disallow forbidden formats at the OS level

- Recently uploaded documents
  - What does that look like?
  - What do we show? File name?
- Rename during upload
- Show file name
- function to allow users to clarify what a file means or change the file name
- Specific files files uploaded
- How to remove/edit documents

Multiple file selector (no functionality at this time. future state).

## Progressive disclosure

- Pops up immediately after question
- Creates an entire additional page
- When do we not show a question

- Proximate to action you're taking: You ask one question, such that a specific answer(s) immediately surfaces a new question in sequence. User needs to know that their answer to the first question prompted the subsequent question(s).

- Not proximate to the action: You answer a question in a certain way, which may prompt a different/additional set of questions later in the form. User does not need to know that their answer to the first question forced them to answer the subsequent questions.

## Double entry

We don't typically ask for information twice


## Tooltips

- When do we use tooltips.
- Tooltips cannot be used to bury information

## Writing questions

Can I edit the wording of a question?

- Sometimes. Certain benefit applications have specific terms that MUST appear in the question. Most questions can be rephrased in plain language. Review a form field by field with your stakeholder to understand how fields are used and understand how specific language is used.

## Simple templates

### Address form

<div class="site-c-showcase">
{% include_relative html/address-form.html %}
</div>

{% include snippet.html content='html/address-form.html' %}

### Name form

<div class="site-c-showcase">
{% include_relative html/name-form.html %}
</div>

{% include snippet.html content='html/name-form.html' %}
