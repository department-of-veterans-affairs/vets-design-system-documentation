---
layout: documentation
title: Typography
tags: Fonts, Lists, Links, Headings, Paragraphs
intro-text: Typographical selections intended to meet the highest standards of usability and accessibility, while setting a consistent look and feel in order to convey credibility.
---

## Fonts

<section id="sans" class="usa-grid-full">
    <h4>Source Sans Pro (<code>.vads-u-font-family--sans</code>)</h4>

    <div>
        <div class="usa-width-one-half">
            <p><a href="https://github.com/uswds/uswds/tree/develop/packages/uswds-core/src/assets/fonts/source-sans-pro">Source Sans Pro</a> is an open-source sans serif typeface created for legibility in UI design. With a variety of weights that read easily at all sizes, Source Sans Pro provides clear headers as well as highly-readable body text.</p>
            <p>Inspired by twentieth-century American gothic typeface design, its slender but open letters offer a clean and friendly simplicity. Advanced hinting allows Source Sans Pro to render well on Windows systems which run Cleartype, and across browsers
                and devices. Moreover, it supports a variety of languages and alphabets, including Western and European language, Vietnamese, pinyin Romanization of Chinese, and Navajo.</p>

        </div>

        <div class="vads-u-font-family--sans typography-sans-intro usa-width-one-half usa-end-row">
            <span class="text-huge">Aa</span>
            <div>
                <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
            </div>
        </div>
    </div>
</section>

---

<section class="usa-grid-full">
    <h4>Bitter (<code>.vads-u-font-family--serif</code>)</h4>

    <div>
        <div class="usa-width-one-half">
            <p>People read and interact with text on screens more and more each day. What happens on screen ends up being more important than what comes out of the printer. With the accelerating popularity of electronic books, type designers are working
                hard to seek out the ideal designs for reading on screen.</p>
            <p>Motivated by my love for the pixel I designed <a href="https://fonts.google.com/specimen/Bitter">Bitter</a>. A “contemporary” slab serif typeface for text, it is specially designed for comfortably reading on any computer or device. The robust design started from the austerity of the pixel grid,
                based on rational rather than emotional principles. It combines the large x-heights and legibility of the humanistic tradition with subtle characteristics in the characters that inject a certain rhythm to flowing texts.</p>
            <p>Bitter has little variation in stroke weight and the Regular is thicker than a normal ‘Regular’ style for print design. This generates an intense color in paragraphs, accentuated by the serifs that are as thick as strokes with square terminals.</p>
            <p>Each glyph is carefully designed with an excellent curve quality added to the first stage of the design, that was entirely made in a pixel grid. The typeface is balanced and manually spaced to use very few kerning pairs, especially important
                for web font use since most browsers do not currently support this feature.</p>
            <p>- Sol Matas (Designed for Huerta Tipográfica)</p>

        </div>

        <div class="vads-u-font-family--serif typography-bitter-intro usa-width-one-half usa-end-row">
            <span class="text-huge">Aa</span>
            <div>
                <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                <p class="text-tiny">0 1 2 3 4 5 6 7 8 9</p>
            </div>
        </div>
    </div>
</section>

---

<section class="usa-grid-full">
    <h4>Roboto Mono (<code>.vads-u-font-family--monospace</code>)</h4>

    <div>
        <div class="usa-width-one-half">
            <p><a href="https://fonts.google.com/specimen/Roboto+Mono">Roboto Mono</a> is a monospace addition to the Roboto type family. Like the other members of the Roboto family, the fonts are optimized for readability on screens across a wide variety of devices and reading environments.</p>
            <p>While the monospace version is related to its variable width cousin, it doesn't hesitate to change forms when so beneficial. For instance, narrow glyphs like 'I', 'l' and 'i' have added serifs for more even texture while wider glyphs are adjusted for weight. Curved caps like 'C' and 'O' take on the straighter sides from Roboto Condensed.</p>
            <p>Special consideration is given to code display, with clear distinction between similar characters like 0 (zero) and O (capital O), and between 1 (one), l (lowercase L), and I (capital i). This makes Roboto Mono ideal for displaying code, configuration files, and other technical content.</p>
        </div>

        <div class="vads-u-font-family--monospace typography-mono-intro usa-width-one-half usa-end-row">
            <span class="text-huge">Aa</span>
            <div>
                <p class="text-tiny">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                <p class="text-tiny">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
                <p class="text-tiny">0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) - _ = +</p>
                <p class="text-tiny">{ } [ ] | \ : ; " ' &lt; &gt; , . ? /</p>
            </div>
        </div>
    </div>
</section>

<style>
    .text-tiny {
        margin: 0.3125rem 0 0;
        font-size: 0.9375rem;
    }

    .text-tiny:first-child {
        margin-top: 0;
    }

    .text-huge {
        font-size: 8.75rem;
        line-height: 1.05;
    }
</style>

## Headings

<div class="site-showcase">
  {% include_relative html/headings.html %}
</div>

{% include snippet.html content='html/headings.html' %}

### Headings and accessibility

**Always** use semantic headings, logically nested in the proper order.  **Do not** use improper nesting to achieve a different font size. In other words, an `h1` should never be followed by an `h3`; it should only be followed by an `h2`. Use the [font-size utility](../foundation/utilities/font-size) to change the font size of a semantic heading instead.

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Do</h3>
<div class="do-dont__content" markdown="1">
Use utility classes to change the font size of a semantic heading.

#### Example
```html
<h1>Main heading</h1>

<p>Some text</p>

<h2 class="vads-u-font-size--h3">Secondary heading</h2>
```

</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Don’t</h3>
<div class="do-dont__content" markdown="1">
Don’t change heading level in order to use a different font size.

#### Example
```html
<h1>Main heading</h1>

<p>Some text</p>

<h3>Secondary heading</h3>
```
</div>
</div>
</div>

{% include content/avoid-links-in-headers.md %}

## Monospace fonts

Use monospace fonts sparingly. Monospace fonts can be difficult to read, especially at small sizes or with poor color contrast. Use monospace fonts for numerical data in tables, code examples, or when precise horizontal alignment is needed. For body text, choose a sans serif typeface.

Monospace fonts may also be suitable for specific medical terminology, where horizontal alignment can enhance scannability. Consider whether the monospace font will enhance readability or make it more difficult. Refer to this article, [Recommendations for Pharmacists from AFB.org](https://www.afb.org/blindness-and-low-vision/your-rights/rx-label-enable-campaign/summary-recommendations-pharmacists) for more information.

<div class="do-dont">
<div class="do-dont__do">
<h3 class="do-dont__heading">Do</h3>
<div class="do-dont__content" markdown="1">
Use monospace fonts for numerical data in tables, such as percentages, currency, or totals.

#### Example
<table class="usa-table usa-table--borderless">
<thead>
<tr>
<th class="vads-u-text-align--right">Balance</th>
<th class="vads-u-text-align--right">Interest Rate</th>
<th class="vads-u-text-align--right">Monthly Payment</th>
</tr>
</thead>
<tbody>
<tr>
<td class="vads-u-font-family--monospace vads-u-text-align--right">$1,234.56</td>
<td class="vads-u-font-family--monospace vads-u-text-align--right">3.25%</td>
<td class="vads-u-font-family--monospace vads-u-text-align--right">$156.78</td>
</tr>
<tr>
<td class="vads-u-font-family--monospace vads-u-text-align--right">$987.65</td>
<td class="vads-u-font-family--monospace vads-u-text-align--right">4.50%</td>
<td class="vads-u-font-family--monospace vads-u-text-align--right">$89.34</td>
</tr>
<tr>
<td class="vads-u-font-family--monospace vads-u-text-align--right">$10,000.00</td>
<td class="vads-u-font-family--monospace vads-u-text-align--right">2.75%</td>
<td class="vads-u-font-family--monospace vads-u-text-align--right">$1,250.00</td>
</tr>
</tbody>
</table>

</div>
</div>
<div class="do-dont__dont">
<h3 class="do-dont__heading">Don't</h3>
<div class="do-dont__content" markdown="1">
Do not use monospace fonts for phone numbers, zip codes, dates, or other data that can’t be added up.

#### Example
<table class="usa-table usa-table--borderless">
<thead>
<tr>
<th class="vads-u-text-align--left">Service</th>
<th class="vads-u-text-align--left">Phone number</th>
<th class="vads-u-text-align--left">Zip Code</th>
</tr>
</thead>
<tbody>
<tr>
<td>Health Care</td>
<td class="vads-u-font-family--monospace">(555) 123-4567</td>
<td class="vads-u-font-family--monospace">12345</td>
</tr>
<tr>
<td>Disability Benefits</td>
<td class="vads-u-font-family--monospace">(800) 827-1000</td>
<td class="vads-u-font-family--monospace">90210</td>
</tr>
<tr>
<td>Education Benefits</td>
<td class="vads-u-font-family--monospace">(888) 442-4551</td>
<td class="vads-u-font-family--monospace">10001</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

## Eyebrow

<div class="site-showcase">
  {% include_relative html/eyebrow.html %}
</div>

{% include snippet.html content='html/eyebrow.html' %}

The eyebrow sits above a heading and provides a label for a sequence of pages in a process. It can be used when implementing the [Help users to complete a sub task]({{ site.baseurl }}/patterns/help-users-to/complete-a-sub-task) pattern. This component has been [tested indirectly with success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/2023-04%20Unified%20Check-In%20Experience%20Usability%20Study/research-findings.md#key-findings).

## Paragraphs

<div class="site-showcase">
  {% include_relative html/paragraphs.html %}
</div>

{% include snippet.html content='html/paragraphs.html' %}

* Paragraphs should not exceed vads-size-line-length-5 (72ex) and should use our [line-length design tokens](#primitive-typography-tokens) when appropriate to further constrain their width. Some elements that are not yet using our line-length design tokens will use 77ch as their max-width which is also acceptable.

## Typography tokens

### Primitive typography tokens

{% assign font_primitive = site.data.tokens.vads-font-primitive %}
{% include tokens.html tokens=font_primitive %}

### Semantic typography tokens

{% assign font_semantic = site.data.tokens.vads-font-semantic %}
{% include tokens.html tokens=font_semantic %}

## Related

* [List]({{ site.baseurl }}/components/list)
