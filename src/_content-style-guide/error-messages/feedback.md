---
layout: content-style-guide
permalink: /content-style-guide/error-messages/feedback
has-parent: /content-style-guide/error-messages/
title: Feedback messages
intro-text: The application’s response when the user is interacting with it. The majority of create, read, update, delete (CRUD) actions will result in feedback messaging.
---

***Note:** See the [help users to recover from errors pattern]({{ site.baseurl }}/patterns/help-users-to/recover-from-errors#next-step-calls-to-action) for guidance on when to consider adding instruction to call the VA.gov help desk or other "next-step" call to action.*

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
        <span>Form save in progress success (inline)</span>
        <span><b>We've saved the information you've entered so far</b></span>
        <span>&nbsp;</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Success alert</a></span>
        <span>Below affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Form save in progress success (exit page)</span>
        <span><b>We've saved your in-progress application</b></span>
        <span>You'll need to finish the application and click "Submit" to apply for this benefit. Continue applying now, or come back later to finish.</span>
        <span>Continue your application</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Success alert</a></span>
        <span>Below page title</span>
    </va-table-row>
    <va-table-row>
        <span>Form save in progress success (inline)</span>
        <span><b>We’re saving your new mobile phone number</b></span>
        <span>We’ll show it here once it’s saved.</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Success alert</a></span>
        <span>Below affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Form save in progress failure (inline)</span>
        <span><b>Your form didn't save</b></span>
        <span>Please try again.</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>Below affected component</span>
    </va-table-row>
    <va-table-row>
        <span>Form general error</span>
        <span><b>We need you to start over with this application</b></span>
        <span>Something's not working quite right. We're sorry to make extra work for you, but please try applying again in a few minutes.</span>
        <span>Start over</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>Replace content below page title</span>
    </va-table-row>
    <va-table-row>
        <span>Form submission success</span>
        <span><b>We've received your application</b></span>
        <span>&nbsp;</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>Below page title</span>
    </va-table-row>
    <va-table-row>
        <span>Form submission failure, can save in progress</span>
        <span><b>Please save this application and try again</b></span>
        <span>We're sorry. Your application didn't go through. We're working to fix the problem, but it may take us a while. Please save your application, and try again tomorrow.</span>
        <span>Save your application</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>Form submission failure, unable to save in progress</span>
        <span><b>Please start over with this application</b></span>
        <span>We're sorry. Your application didn't go through, and you'll need to start over. We suggest you wait a day while we fix this problem.</span>
        <span>N/A</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>Required form field is empty</span>
        <span>N/A</span>
        <span>Please enter your [required information].</span>
        <span>N/A</span>
        <span>Inline</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>N/A</span>
    </va-table-row>
    <va-table-row>
        <span>Form field entry is not valid</span>
        <span>N/A</span>
        <span>Please enter a valid [address/email address/phone number/city/state].</span>
        <span>N/A</span>
        <span>Inline</span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>N/A</span>
    </va-table-row>
    <va-table-row>
        <span>File upload success</span>
        <span><b>Your file has been uploaded</b></span>
        <span>&nbsp;</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Success alert</a></span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>File upload failure</span>
        <span><b>We couldn't upload your file</b></span>
        <span>Please try again.</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>File download success</span>
        <span><b>We downloaded your file</b></span>
        <span>&nbsp;</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Success alert</a></span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>File download failure</span>
        <span><b>We couldn't download your file</b></span>
        <span>Please try again.</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>Message sent</span>
        <span><b>We sent your message</b></span>
        <span>N/A</span>
        <span>Dismissible</span>
        <span>Alert</span>
        <span>Success</span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>Message failed to send</span>
        <span><b>Your message didn't go through</b></span>
        <span>Please try again.</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>Creation success</span>
        <span><b>We created your file</b></span>
        <span>N/A</span>
        <span>Dismissible</span>
        <span>Alert</span>
        <span>Success</span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>Creation failure</span>
        <span><b>We couldn't create your file</b></span>
        <span>Please try again.</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>Deletion success</span>
        <span><b>We've deleted your file</b></span>
        <span>&nbps;</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Success alert</a></span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>Deletion failure</span>
        <span><b>We couldn't delete your file</b></span>
        <span>Please try again.</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>Update success</span>
        <span><b>We updated your file</b></span>
        <span>&nbsp;</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#success-alert">Success alert</a></span>
        <span>Above page title</span>
    </va-table-row>
    <va-table-row>
        <span>Update failure</span>
        <span><b>We couldn't update your file</b></span>
        <span>Please try again.</span>
        <span>Dismissible</span>
        <span><a href="{{ site.baseurl }}/components/alert">Alert box</a></span>
        <span><a href="{{ site.baseurl }}/components/alert#error-alert">Error alert</a></span>
        <span>Above page title</span>
    </va-table-row>

</va-table>