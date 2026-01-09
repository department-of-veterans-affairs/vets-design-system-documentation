---
layout: content-style-guide
permalink: /content-style-guide/error-messages/feedback
has-parent: /content-style-guide/error-messages/
title: Feedback messages
intro-text: Feedback messages appear as a response to a person’s actions. Most create, read, update, and delete actions will result in feedback messaging.
---

**Note:** The Help users to recover from errors pattern has guidance on when to consider instructing the person to call the VA.gov help desk and when to add other "next-step" calls to action.

[Learn more in the Help users to recover from errors pattern]({{ site.baseurl }}/patterns/help-users-to/recover-from-errors#next-step-calls-to-action)

## Task completion success/failure

<va-table>
    <va-table-row>
        <span>Scenario</span>
        <span>Message title</span>
        <span>Message content</span>
        <span>Actions</span>
        <span>Component</span>
        <span>State</span>
        <span>Location</span>
    </va-table-row>
    <va-table-row>
        <span>Application, claim, or form save in progress success (inline)</span>
        <span><b>We saved the information you entered so far</b></span>
        <span>&nbsp;</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Alert</a></span>
        <span>Success</span>
        <span>After affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Application, claim, or form save in progress success (exit page)</span>
        <span><b>We saved your in-progress [application, claim, form]</b></span>
        <span>You’ll need to finish the [application, claim, form] and select <b>Submit</b> to apply for [name]. Continue applying now or come back later to finish.</span>
        <span>Continue your [application, claim, form]</span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Alert</a></span>
        <span>Success</span>
        <span>After page title</span>
    </va-table-row>
    <va-table-row>
        <span>Application, claim, or form save in progress success (inline)</span>
        <span><b>We’re saving your [name of what’s being saved (ex. new mobile phone number)]</b></span>
        <span>We’ll show it here once it’s saved.</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Alert</a></span>
        <span>Success</span>
        <span>After affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Application, claim, or form save in progress failure (inline)</span>
        <span><b>Your [application, claim, form] didn’t save</b></span>
        <span>Try again later.</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>After affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Application, claim, or form general error</span>
        <span><b>We need you to start over with this [application, claim, form]</b></span>
        <span>We’re sorry. Something’s not working right. Try again later.</span>
        <span>Start over</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>Replace content after page title</span>
    </va-table-row>
    <va-table-row>
        <span>General error (500), version 1</span>
        <span><b>This [tool, application, form] isn’t working right now</b></span>
        <span>We’re sorry. There’s a problem with [name]. Refresh this page or try again later.<br><br>
            [Add instructions for who to contact or how to remedy the problem.]</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>After page title</span>
    </va-table-row>
    <va-table-row>
        <span>General error (500), version 2</span>
        <span><b>Sorry, we couldn’t complete your request</b></span>
        <span>[Name] isn’t working as expected. [Add instructions to remedy the problem or when to come back and try again.]</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>After page title</span>
    </va-table-row>
    <va-table-row>
        <span>General error (500), version 3</span>
        <span><b>We can’t access your [type of information] right now</b></span>
        <span>We’re sorry. There’s a problem with our system. Check back later.<br><br>
            [Add instructions to remedy the problem or when to come back and try again.]</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>After affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Application, claim, or form submission success</span>
        <span><b>We received your [application, claim, form]</b></span>
        <span>&nbsp;</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Alert</a></span>
        <span>Success</span>
        <span>After page title</span>
    </va-table-row>
    <va-table-row>
        <span>Application, claim, form submission failure, can save in progress</span>
        <span><b>Save this [application, claim, form] and try again</b></span>
        <span>We’re sorry. Your [application, claim, form] didn’t go through. We’re working to fix the problem, but it may take us a while. Save your [application, claim, form] and try again later.</span>
        <span>Save your [application, claim, form]</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>After page title</span>
    </va-table-row>
    <va-table-row>
        <span>Application, claim, or form submission failure, can’t save in progress</span>
        <span><b>Start over with this [application, claim, form]</b></span>
        <span>We’re sorry. Your [application, claim, form] didn’t go through and you’ll need to start over. We suggest you wait a day while we fix this problem.</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>After page title</span>
    </va-table-row>
    <va-table-row>
        <span>Application, claim, or form submission in progress</span>
        <span><b>[Application, Claim, Form] submission started on [Month Day, Year]</b></span>
        <span>Your submission is in progress.<br><br>
            It can take up to 30 days for us to receive your [application, claim, form]. Your confirmation number is [number].</span>
        <span>Check the status of your [application, claim, form] on My VA (primary action link)</span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Alert</a></span>
        <span>Success</span>
        <span>After h1 on page summary</span>
    </va-table-row>
    <va-table-row>
        <span>Application, claim, or form submission in progress, alternate version</span>
        <span><b>Your [application, claim, form] is in progress and was last saved on [Month Day, Year], at [timestamp]</b></span>
        <span>You can continue applying now or come back later to finish your application.<br>Your application will expire on <b>[Month Day, Year], at [timestamp]</b>.
</span>
        <span>Continue your [application, claim, form] (primary button);  Start a new application (primary action link)</span>
        <span><a href="{{ site.baseurl }}/components/alert#informational-alert">Alert</a></span>
        <span>Informational</span>
        <span>Replace affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Required form field is empty</span>
        <span>N/A</span>
        <span>Enter your [required information]</span>
        <span>N/A</span>
        <span>Inline</span>
        <span>Error</span>
        <span>N/A</span>
    </va-table-row>
    <va-table-row>
        <span>Form field entry isn’t valid</span>
        <span>N/A</span>
        <span>Enter a valid [address, email address, phone number, city, state, etc.]</span>
        <span>N/A</span>
        <span>Inline</span>
        <span>Error</span>
        <span>N/A</span>
    </va-table-row>
    <va-table-row>
        <span>File upload success</span>
        <span><b>We uploaded your file</b></span>
        <span>&nbsp;</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Alert</a></span>
        <span>Success</span>
        <span>Before affected component</span>
    </va-table-row>
    <va-table-row>
        <span>File upload failure</span>
        <span><b>We couldn’t upload your file</b></span>
        <span>Try again later.</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>Before affected component</span>
    </va-table-row>
    <va-table-row>
        <span>File download success</span>
        <span><b>We downloaded your file</b></span>
        <span>&nbsp;</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Alert</a></span>
        <span>Success</span>
        <span>Before affected component</span>
    </va-table-row>
    <va-table-row>
        <span>File download failure</span>
        <span><b>We couldn’t download your file</b></span>
        <span>Try again later.</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>Before affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Message sent</span>
        <span><b>We sent your message</b></span>
        <span>N/A</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Alert</a></span>
        <span>Success</span>
        <span>Before affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Message failed to send</span>
        <span><b>We couldn’t send your message</b></span>
        <span>Try again later.</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>Before affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Creation success</span>
        <span><b>We created your file</b></span>
        <span>N/A</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Alert</a></span>
        <span>Success</span>
        <span>Before affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Creation failure</span>
        <span><b>We couldn’t create your file</b></span>
        <span>Try again later.</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>Before affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Deletion success</span>
        <span><b>We deleted your file</b></span>
        <span>&nbps;</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Alert</a></span>
        <span>Success</span>
        <span>Before affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Deletion failure</span>
        <span><b>We couldn’t delete your file</b></span>
        <span>Try again later.</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>Before affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Update success</span>
        <span><b>We updated your file</b></span>
        <span>&nbsp;</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Alert</a></span>
        <span>Success</span>
        <span>Before affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Update failure</span>
        <span><b>We couldn’t update your file</b></span>
        <span>Try again later.</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Alert</a></span>
        <span>Error</span>
        <span>Before affected component</span>
    </va-table-row>
</va-table>
