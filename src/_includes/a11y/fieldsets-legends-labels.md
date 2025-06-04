## Fieldsets, legends, and labels

### Best practices

#### Quick HTML Tutorial

`<input>` is how a user enters information (radio buttons, text boxes, etc.)

`<label>` tells a user what the `<input>` is for

`<fieldset>` puts more than one `<input>` into a group, and `<legend>` describes the group. 

### Accessibility problem being solved

By placing the checkboxes or radio buttons in a fieldset, and the appropriate label or question for the options in the legend, the label or question is programmatically connected to the presented options.  Without this programmatic association, screen reader users would only hear the labels on the radio button or checkboxes announced and wouldn't know why they should choose a particular option.

You can also use fieldsets and legends to multiple questions about the same topic.  For example, an address is composed of many fields for street, city, state. You may place the words "Mailing address" in the legend, and all of the address fields in the fieldset. This helps users understand that you are collecting a mailing address vs. some other type of address.

#### When to use a fieldset and legend

You should use fieldsets and legends when:

* You ask a question that has multiple choices (using radio buttons or checkboxes)
* You have several items you need to group relating to the same topic (like with text inputs, selects, etc)

#### When not to use a fieldset and legend

You should not use a fieldset and legend when:

* You have a single form field where the label is descriptive enough to capture the information needed.

### Ideal State

#### Example 1 - Text input

{% include component-example.html alt="A text input with annotations." file="/images/components/forms/fieldsets-legends-labels/example-1-annotated.png" caption="An annotated text input in a form context. Annotations are important to help engineers understand how to build your design." %}

##### Coded example

```
<fieldset>
  <legend>
    <h1 class="some-heading-class">Heading [will be announced when tabbing into the first input in the fieldset]</h1>
    <span class="some-helper-text-class">Helper text, inside the legend but styled to look like regular text [will be announced when tabbing into the first input in the fieldset]</span>
  </legend>
  <p>Helper text, outside the legend [will NOT be announced when tabbing into the first input in the fieldset]</p>
  <va-text-input label="Input label [will be announced]" hint="Hint text [will be announced etc]" />
</fieldset>
```

* [Codepen test example](https://cdpn.io/pen/debug/jENBmBW)

<!-- 
##### Video examples from the major screen readers

<details>
    <summary>NVDA</summary>
    <video controls class="site-component-example__video">
      <source src="{{ site.baseurl }}/images/components/forms/fieldsets-legends-labels/example-1-nvda.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</details>

<details>
    <Summary>JAWS</Summary>
    <video controls>
      <source src="{{ site.baseurl }}/images/components/forms/fieldsets-legends-labels/example-1-jaws.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</details>

<details>
    <summary>Mac VoiceOver</summary>
    <video controls>
      <source src="{{ site.baseurl }}/images/components/forms/fieldsets-legends-labels/example-1-mac-voiceover.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
</details>
-->

#### Example 2 - Checkbox group

{% include component-example.html alt="A checkbox group with annotations." file="/images/components/forms/fieldsets-legends-labels/example-2-annotated.png" caption="An annotated checkbox group in a form context. Annotations are important to help engineers understand how to build your design." %}

##### Code example

* [Codepen test example](https://cdpn.io/pen/debug/NPKVPKy)

### Other considerations

#### Headings as `<label>` or `<legend>`

There's a semantic difference when you want to make a `<label>` a heading or a `<legend>` a heading.

For example, if you have only a text input or text area label, and you want to make that a heading, the heading tag has to be wrapped *around* the label.

**Note:** This is only partially supported in the VA Design System. More to come.

However, if you want to have a heading over a group of fields, or a checkbox/radio group, you will place the heading inside the legend

#### Content considerations

Besides a heading, strings of text can also be placed within the legend. However, they cannot have any other semantic meaning. List items cannot be placed in a legend. Links, or multiple paragraphs also cannot be placed in a legend.

Designers should consider only adding text that is necessary for screen readers to understand the context of the question or task. Adding a lot of text can lead to verbosity that's hard for some users to comprehend.

#### Focus management

Sending focus to the legend may cause the heading to be read multiple times depending on the screen reader.

### Further Reading

* [Foundations: grouping forms with `<fieldset>` and `<legend>`](https://tetralogical.com/blog/2025/01/31/foundations-fieldset-and-legend/)
* [Use legend and fieldset (Adrian Roselli)](https://adrianroselli.com/2022/07/use-legend-and-fieldset.html)
* [Styling options for labels and fieldsets (Gov.UK)](https://design-system.service.gov.uk/get-started/labels-legends-headings/#styling-options-for-labels-and-legends)
* [Fieldsets, Legends and Screen Readers again (TPGi)](https://www.tpgi.com/fieldsets-legends-and-screen-readers-again/)
* [Grouping form controls with headings (Accessibility Developer Guide)](https://www.accessibility-developer-guide.com/examples/forms/grouping-with-headings/)
* [How to guides: Making labels and legends headings (Gov.UK)](https://design-system.service.gov.uk/get-started/labels-legends-headings/)