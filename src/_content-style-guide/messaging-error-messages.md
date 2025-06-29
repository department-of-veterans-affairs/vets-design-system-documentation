---
layout: content-style-guide
title: Messaging - Error messages
draft: true
---

*Note: The guidelines below don't apply to inline error messages in form fields (for example, "Please enter a valid Social Security number."). Inline form field error messages will be handled in a separate error guide.* 

## Structure

Every error message will have **up to** 3 parts:

![Error message diagram](/images/error-message-diagram.png) 

1. Message title: Bold title giving the user a quick idea of what’s wrong (or, for informational alerts, the key message the user needs to know)

2. Message content (description): 
  - Apology (if the error is coming from a problem on our end)
  - Succinct description of the issue, cause, and any relevant details
  - Call to action telling the user what to do next (if applicable)
  - Next-step call to action telling the user what to do if the first call to action fails to resolve the issue (if applicable)

3. Button(s): Actionable next-step for user (if applicable)

## Content within the message description

### General description guidance

To create an effective error message, ask yourself these 4 questions:

1. What’s the error/issue?

   The answer will inform the details of the issue and cause.

2. What’s the source of the error/issue?

   The answer will determine how the error/issue needs to be framed, and whether an apology is needed. **Consider if the issue is caused by:**

   - The user's action
   
   - An authorization issue. **Consider whether the issue is due to:**
   
   - VA.gov's inability to find user's records in our system, **or** 
   - The user's records showing user can't use benefit/service (ie, user isn't a VA patient, user isn't enrolled in benefit/service, user isn't eligible for benefit/service)
   - Something else

   - A system or network access issue. **Consider whether the issue:**
      - Affects the entire site or just one page/application/component/user task
      - Is scheduled/expected or unexpected
      - Is the result of an issue of VA.gov, a separate site/app (such as DS Logon), or Internet network connection 

3. What does the user need to know to resolve the error/issue?

   The answer will inform the call to action telling the user what to do next, as well as any relevant details. 

   - For an error caused by user action, offer the user clear guidance on how to resolve the error (ie, "Please make sure your file is a .pdf format").
   - For an error caused by an authorization issue, if the issue is due to VA.gov inability to find user's records in our system, direct the user to try again or call the VA.gov help desk if they think their records should be available.
   - If the issue is due to the user's records showing the user can't use benefit/service, offer a path forward:
      - User not eligible for benefit: Direct to relevant eligibility information
      - User not enrolled in benefit: Direct to relevant eligibility information and application page.
      - User not a VA patient: Direct to facility locator to find contact information to call their VA facility.
   - For an error caused by a system or network access issue, the error message should include timing for when the user should try again. This can be specific timing (eg, in an hour, tomorrow, etc.) if an estimate is available or more general timing (eg, soon, later) if an estimate isn't available.

4. If the resolution fails, what’s the next step?

   The answer will inform whether or not to include a “next-step call to action” to help guide the user further should the first call to action fail to resolve the issue. This may be language directing the user to call the VA.gov help desk or other VA resources, and will be determined on an issue-by-issue basis. See [Next-step calls to action](#next-step) below for more information and guidance.

### For task completion success alerts

Create a brief title documenting the task that was successfully completed, followed by a brief description of the success. 

Example:

**Saved**

We saved the information you've entered so far.
   
![Saved](/images/ErrorMessageStyleGuide-Saved-001.png)

### For task completion failure alerts 

Include exactly what failed in the title, followed by a brief apology, reiteration of the failure reframed in the VA.gov perspective, and prompt to try again. 

Example:

**Your form didn't save**

We're sorry. We couldn't save your form. Please try again.

![Your form didn't save](/images/ErrorMessageStyleGuide-Error-002.png)

Consider whether there is additional information, including a time estimate for resolution and/or a call to action button, that should be included. 

Example:

**Please save this application and try again**

We're sorry. Your application didn't go through. We're working to fix the problem, but it may take us a while. Please save your application, and try again tomorrow.

(button) Save your application

![Please save this application and try again](/images/ErrorMessageStyleGuide-Save-003.png)

### For informational messages and warnings

To create an effective informational message or warning, ask yourself these 2 questions:

**1. What's the key information the user needs to know?**

This information should be presented as succinctly as possible in the title and then reiterated in the description with any additional relevant details.

- Informational example:
   
**VA.gov will be down for maintenance soon**

We’ll be doing some work on VA.gov on [DATE] between [TIME] and [TIME]. If you have trouble using the site during that time, please check back soon.

![VA.gov will be down for maintenance soon](/images/ErrorMessageStyleGuide-Down-004.png)

- Warning example: 
   
**We're working on the site**
   
We’re doing some work on VA.gov right now. You should still be able to use the site applications and tools. If you have any trouble, please check back soon.

![We're working on the site](/images/ErrorMessageStyleGuide-Warning-005.png)

**2. Does the user need to take action, or do we want the user to take action?**

- When action is required, frame required information as a need. 
   
Example:
   
**We need your help to finish reviewing your claim**
   
We need you to provide more evidence (supporting documents) so we can finish reviewing your claim.

(button) See details
   
![We need your help to finish reviewing your claim](/images/ErrorMessageStyleGuide-Continue-006.png)

- When we want to prompt the user to take action, frame the prompt as a question to engage the user. 
   
Example:
   
**Want to make your VA.gov account more secure?**
   
You can add an optional extra layer of security (called 2-factor authentication) to your account. This helps to make sure that no one but you can access your account—even if they get your password.
   
(button) Secure your account 
   
![Want to make your VA.gov account more secure?](/images/ErrorMessageStyleGuide-Secure-007.png)
  
## Style and tone

### Clear and direct

Tell the user what’s happened/happening, how it will impact them, and how they can resolve it.

### Humble, helpful, and non-alarming

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Use language that...</h3>
<div class="do-dont__content" markdown="1">

- Accepts ownership (or shared ownership) of the error *(ie, “We’re sorry. We can’t find your records in our system.”)*
- Instills confidence in the user *(ie, “We’re working to fix the problem.”)*
- Offers steady, helpful guidance toward resolution *(ie, “Please make sure the file you’re uploading is a .pdf or .doc file and try again.”)*

</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Avoid language that...</h3>
<div class="do-dont__content" markdown="1">

- Blames the user for the error (even if error is user-generated) *(ie, “You're not in our system.”)*
- Instills alarm *(ie, “Warning!”)*
- Feels overly casual or dismissive *(ie, “Oops! Incorrect file type”)*

</div>
</div>
</div>

### Framed to highlight VA.gov ownership/shared ownership of the error

Did the user’s action cause the error?

**If yes:** Avoid language that feels alarming or blame-oriented and re-frame error as being a shared one, while guiding user to correct the error.

<va-table table-type="bordered">
  <va-table-row>
    <span>Situation</span>
    <span>Sample error message</span>
  </va-table-row>
  <va-table-row>
    <span>File upload fails because user tried to upload an unacceptable file type.</span>
    <span><strong>We couldn't upload your file</strong> <br />We weren't able to upload your file. Please make sure the file you're uploading is a .pdf or .doc file and try again. [button] Upload file again</span>
  </va-table-row>
</va-table>

**If no:** Accept responsibility for the error and offer user brief, but clear, details and guidance to resolution.

<va-table table-type="bordered">
   <va-table-row>
    <span>Situation</span>
    <span>Sample error message</span>
   </va-table-row>
   <va-table-row>
    <span>Application fails to go through due to server issues.</span>
    <span><strong>Please save this application and try again</strong> <br />We're sorry. Your application didn't go through. We're working to fix the problem, but it may take us a while. Please save your application, and try again tomorrow. [button] Save your application</span>
   </va-table-row>
</va-table>

### Conversational and plain language

First person/second person with a personal/helpful tone. Example:

<div class="do-dont">
<div class="do-dont__dont">
<h3 class="do-dont__heading">This...</h3>
<div class="do-dont__content" markdown="1">

- These records are unavailable. The help desk may be able to help locate them...

</div>
</div>
<div class="do-dont__do">
<h3 class="do-dont__heading">Becomes something like this</h3>
<div class="do-dont__content" markdown="1">

- We can’t find your records. You can call the VA.gov help desk...We're here Monday through Friday...

</div>
</div>
</div>

Plain, simple words (ie, avoid jargon and multisyllabic words wherever possible). Examples:

<div class="do-dont">
<div class="do-dont__dont">
<h3 class="do-dont__heading">This...</h3>
<div class="do-dont__content" markdown="1">

- If you need immediate assistance...
- The system is currently unavailable...

</div>
</div>
<div class="do-dont__do">
<h3 class="do-dont__heading">Becomes something like this</h3>
<div class="do-dont__content" markdown="1">

- If you need help right now...
- VA.gov isn't working right now...or VA.gov is down at the moment

</div>
</div>
</div>

When the instructions are conditional, lead with the conditional phrase to make it clear who the instructions are for. Examples:

<div class="do-dont">
<div class="do-dont__dont">
<h3 class="do-dont__heading">This...</h3>
<div class="do-dont__content" markdown="1">

- Please call us if it still doesn’t work.
- You can’t use this tool if you’re not a VA patient.

</div>
</div>
<div class="do-dont__do">
<h3 class="do-dont__heading">Becomes something like this</h3>
<div class="do-dont__content" markdown="1">

- If it still doesn’t work, please call us.
- If you’re not a VA patient, you can’t use this tool.

</div>
</div>
</div>

## Additional guidance

### Error state and message intent
Focusing in on the intent of the error message can help to further flesh out the nuances of tone and description content.

<va-table table-type="bordered">
   <va-table-row>
      <span>Error state</span>
      <span>When to use</span>
      <span>Tone</span>
      <span>Goals</span>
      <span>Example</span>
   </va-table-row>
   <va-table-row>
      <span><strong>Informational</strong></span>
      <span>To surface system-related feedback not initiated by the user (e.g. status updates). or, To provide information that helps set the user's expectations for their experience (e.g. SiP available).</span>
      <span>Clear and direct, Humble, Empathetic, Helpful</span>
      <span>Succinctly convey information  Explain how (and for how long) user may be impacted Offer guidance toward resolution (if needed)</span>
      <span><strong>VA.gov will be down for maintenance soon</strong> <br>We’ll be doing some work on VA.gov on [Date] between [time] and [time]. If you have trouble using the site during that time, please check back soon.</span>
   </va-table-row>
   <va-table-row>
      <span><strong>Success</strong></span>
      <span>As a confirmation that a user-initiated action was completed successfully.</span>
      <span>Positive, direct, and definitive</span>
      <span>Quickly and clearly convey user's success</span>
      <span><strong>File uploaded</strong> <br> We've uploaded your file. Thank you.</span>
   </va-table-row>
   <va-table-row>
      <span><strong>Warning</strong></span>
      <span>An action was unsuccessful, but the user can still proceed, or, some parts of the user’s experience may be limited that normally wouldn’t be (e.g. system is down and records are accessible but outdated).</span>
      <span>Clear that there may be a problem, while being un-alarming and focused on reason and resolution</span>
      <span>Help user understand the issue and resolve it as needed</span>
      <span><strong>Some information may not be current</strong> <br> We're sorry. We're having issues with our server. We're working to fix it, but it may take us a while. You can still use [APPLICATION/PAGE NAME], but you may not see all of your updated information. If you're having trouble, please try again later.</span>
   </va-table-row>
   <va-table-row>
      <span><strong>Error</strong></span>
      <span>A user action was not completed and must be resolved to proceed.</span>
      <span>Clear that's something's wrong that will block the user from moving forward, while being un-alarming and focused on reason and resolution</span>
      <span>Help user understand the issue and resolve it</span>
      <span><strong>We've run into a problem</strong> <br> We're sorry. It looks like your latest action didn't go through on the site because there's a problem with the Internet connection. We can't take you to the next step until this is complete. Please check to make sure you're connected to the Internet and try again.</span>
   </va-table-row>
   <va-table-row>
      <span><strong>Actions (single button)</strong></span>
      <span>The user must take an action to proceed with the task indicated by the message</span>
      <span>Enticing to help prompt user to take action, while being clear about the action needed</span>
      <span>Get user to take a specific action</span>
      <span><strong>Still want to apply for VA health care benefits?</strong> <br> You started an application for health care benefits on [DATE], but you didn't submit it. You can open the application and finish applying at any time. [button] Open your application</span>
   </va-table-row>
   <va-table-row>
      <span><strong>Actions (binary button)</strong></span>
      <span>The user must choose between two actions to proceed with a task, or to confirm an important action.</span>
      <span>Clear and direct about how each of the choices will impact the user</span>
      <span>Help user make an informed choice of action to take</span>
      <span><strong>Are you sure you want to start this application over?</strong><br> If you start over, you'll lose all the information you've filled in so far. [button 1] Start over [button 2] Continue your application</span>
   </va-table-row>
</va-table>

### Messaging categories

The [Messaging Dictionary](/content-style-guide/messaging-dictionary) can help offer specific messages to use and/or examples to inform new message creation. We’ll continue expanding the dictionary, so check back often for new messages.

<va-table table-type="bordered">
   <va-table-row>
      <span>Error state</span>
      <span>When to use</span>
      <span>Link to dictionary of messages</span>
   </va-table-row>
   <va-table-row>
      <span><strong>System messaging</strong></span>
      <span>Alerts the user of important system-related issues or status. It’s initiated by the system and it’s not a result of the user’s actions.</span>
      <span><va-link href="/content-style-guide/messaging-dictionary#system-messaging" text="See system message examples"></va-link></span>
   </va-table-row>
   <va-table-row>
      <span><strong>Engagement messaging</strong></span>
      <span>Alerts the user of important system-related issues or status. It’s initiated by the system and it’s not a result of the user’s actions.</span>
      <span><va-link href="/content-style-guide/messaging-dictionary#engagement-messaging" text="See engagement message examples"></va-link></span>
   </va-table-row>
   <va-table-row>
      <span><strong>Access messaging</strong></span>
      <span>Appears when the user tries to access an item that’s not available to them. It may be because the record has been deleted, the user doesn’t have access, etc. etc.</span>
      <span><va-link href="/content-style-guide/messaging-dictionary#access-messaging" text="See access message examples"></va-link></span>
   </va-table-row>
   <va-table-row>
      <span><strong>Feedback messaging</strong></span>
      <span>The application’s response when the user is interacting with it. The majority of create, read, update, delete (CRUD) actions will result in feedback messaging.</span>
      <span><va-link href="/content-style-guide/messaging-dictionary#feedback-messaging" text="See feedback message examples"></va-link></span>
   </va-table-row>
</va-table>

### Next-step calls to action

Some errors may not be resolved based on initial instructions to user (ie, "Try again later"). In these cases, a next-step call to action (ie, "Call the VA.gov help desk") may be necessary. This will be decided on a case-by-case basis, but below are some initial guidelines for determining the appropriate next-step call to action.

<va-table table-type="bordered">
   <va-table-row>
      <span>Next-step call to action</span>
      <span>When to use</span>
      <span>Standard language to use</span>
      <span>Potential condition variations</span>
   </va-table-row>
   <va-table-row>
      <span><strong>Call the VA.gov help desk</strong></span>
      <span>User can’t resolve an error that is directly related to the website (specifics TBD)</span>
      <span>Please call the VA.gov help desk at 855-574-7286 (TTY: 711). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. ET.</span>
      <span>If you need more help, please call... If it still doesn't work, please call...</span>
   </va-table-row>
   <va-table-row>
      <span><strong>Get more information about/help with your VA benefits</strong></span>
      <span>User may not be able to resolve error, but next step would involve talking to someone at VA about benefits</span>
      <span>If you need more help, call us at 800-827-1000. Or, contact a VA regional benefit office near you. (button) <va-link href="https://www.vets.gov/facilities/" text="Find a VA regional benefit office"></va-link></span>
      <span>If you have questions about your benefits...</span>
   </va-table-row>
   <va-table-row>
      <span><strong>Get help filing a disability claim</strong></span>
      <span>User needs more help filing a disability claim</span>
      <span>If you need more help with your claim, you may want to work with a trained professional. (button) <va-link href="https://www.vets.gov/disability-benefits/apply/help/index.html" text="Get help with your claim"></va-link></span>
      <span>If you have questions about your claim...</span>
   </va-table-row>
   <va-table-row>
      <span><strong>Contact the Veterans Health Administration toll-free hotline</strong></span>
      <span>User needs help filling out a health care benefits application</span>
      <span>If you need more help filling out your application, call our toll-free hotline at 877-222-VETS (877-222-8387). We’re here Monday–Friday, 8:00 a.m. to 8:00 p.m. ET. You can also get help from a trained professional called an accredited representative. Or, find your state’s Veterans agency. (button 1) <va-link href="https://www.ebenefits.va.gov/ebenefits/about/feature?feature=request-vso-representative" text="Request a representative"></va-link> <br />(button 2) <va-link href="https://www.va.gov/statedva.htm" text="Find a Veterans agency"></va-link> <br />If you have questions about your application,...</span>
   </va-table-row>
   <va-table-row>
      <span><strong>Contact your local VA medical center</strong></span>
      <span>User needs to contact their doctor or speak to someone at a VA medical center for more information</span>
      <span>If you need more help with this, call your healthcare provider or your local VA medical center or clinic. (button) <va-link href="https://www.vets.gov/facilities/" text="Find a VA health facility"></va-link></span>
      <span>If you have questions, call your doctor or a VA medical center or clinic near you...</span>
   </va-table-row>
   <va-table-row>
      <span><strong>Get answers to questions about education benefits</strong></span>
      <span>User needs more help/answers to questions about their education benefits</span>
      <span>If you need more help, call us at 888-GI-Bill (888-442-4551). We’re here Monday–Friday, 8:00 a.m. to 7:00 p.m. ET.</span>
      <span>If you'd like to request a paper application...</span>
   </va-table-row>
</va-table>
