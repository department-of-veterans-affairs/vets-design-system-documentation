---
layout: default
title: Icons
anchors:
  - anchor: Accessibility
  - anchor: Navigation
  - anchor: Interaction
  - anchor: Feedback
  - anchor: Identification
  - anchor: Hub icons
  - anchor: Social media icons
---

# Icons

<div class="va-introtext">
    We leverage Font Awesome icons to communicate meaning, action, status, or feedback.
</div>

{% include _site-on-this-page.html %}

## Accessibility

### When to use `role="img"`

If an icon is being used alone (without support text), it should have a `role="img"` AND appropriate ARIA markup OR screen reader only descriptive text.

### When to use `role="presentation"`

If an icon is being used with visual (and assistive device) text, it should have `role="presentation"`.

### Examples:

Here are a few examples of icons being used in different contexts:

#### Icon being used alone

```html
<IconHelp color={'#000000'} cssClass={'a-class'} id={'icon-help'} role={'img'} ariaLabel={'Help'} />
```

#### Icon being used with supporting text

```html
<IconHelp color={'#000000'} cssClass={'a-class'} id={'icon-help'} role={'presentation'} ariaLabel={'Help'} />
Help
```

#### Icon being used alone inside an `<a>` tag

```html
<a href="#">
  <IconHelp color={'#000000'} cssClass={'a-class'} id={'icon-help'} role={'img'} ariaLabel={'Help'} />
</a>
```

#### icon being used with supporting text inside an `<a>` tag

```html
<a href="#">
  <IconHelp color={'#000000'} cssClass={'a-class'} id={'icon-help'} role={'presentation'} ariaLabel={'Help'} />
  Help
</a>
```

## Navigation

<table class="usa-table-borderless">
    <thead>
        <tr>
            <th scope="col">Icon</th>
            <th scope="col">HTML</th>
            <th scope="col">Unicode</th>
            <th scope="col">Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row"><i class="fas fa-angle-double-left" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-angle-double-left">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf100;</code></td>
            <td>Previous</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-angle-double-right" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-angle-double-right">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf101;</code></td>
            <td>Next</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-search" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-search">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf002;</code></td>
            <td>Search</td>
        </tr>

    </tbody>
</table>

## Interaction

<table class="usa-table-borderless">
    <thead>
        <tr>
            <th scope="col">Icon</th>
            <th scope="col">HTML</th>
            <th scope="col">Unicode</th>
            <th scope="col">Usage</th>
        </tr>
    </thead>
    <tbody>
      <tr>
          <th scope="row"><i class="fas fa-sort" aria-hidden="true" aria-hidden="true"></i></th>
          <td><code>&lt;i class="fas fa-sort">&lt;/i></code></td>
          <td><code class='code-fa'>&amp;#xf0dc;</code></td>
          <td>Form field dropdown</td>
      </tr>
      <tr>
          <th scope="row"><i class="fas fa-chevron-down" aria-hidden="true" aria-hidden="true"></i></th>
          <td><code>&lt;i class="fas fa-chevron-down">&lt;/i></code></td>
          <td><code class='code-fa'>&amp;#xf078;</code></td>
          <td>Dropdown expand indicator</td>
      </tr>

      <tr>
          <th scope="row"><i class="fas fa-chevron-up" aria-hidden="true" aria-hidden="true"></i></th>
          <td><code>&lt;i class="fas fa-chevron-up">&lt;/i></code></td>
          <td><code class='code-fa'>&amp;#xf077;</code></td>
          <td>Dropdown collapse indicator</td>
      </tr>

      <tr>
          <th scope="row"><i class="fas fa-plus" aria-hidden="true" aria-hidden="true"></i></th>
          <td><code>&lt;i class="fas fa-plus">&lt;/i></code></td>
          <td><code class='code-fa'>&amp;#xf067;</code></td>
          <td>Accordion expand indicator</td>
      </tr>

      <tr>
          <th scope="row"><i class="fas fa-minus" aria-hidden="true" aria-hidden="true"></i></th>
          <td><code>&lt;i class="fas fa-minus">&lt;/i></code></td>
          <td><code class='code-fa'>&amp;#xf068;</code></td>
          <td>Accordion collapse indicator</td>
      </tr>

      <tr>
          <th scope="row"><i class="fas fa-times" aria-hidden="true" aria-hidden="true"></i></th>
          <td><code>&lt;i class="fas fa-times">&lt;/i></code></td>
          <td><code class='code-fa'>&amp;#xf00d;</code></td>
          <td>Close indicator (modals, alerts)</td>
      </tr>
        <tr>
            <th scope="row"><i class="fas fa-plus" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-plus">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf067;</code></td>
            <td>Add item</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-trash" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-trash">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf1f8;</code></td>
            <td>Remove item</td>
        </tr>

    </tbody>
</table>

## Feedback

<table class="usa-table-borderless">
    <thead>
        <tr>
            <th scope="col">Icon</th>
            <th scope="col">HTML</th>
            <th scope="col">Unicode</th>
            <th scope="col">Usage</th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <th scope="row"><i class="fas fa-info-circle" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-info-circle">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf05a;</code></td>
            <td>Informational</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-check-circle" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-check-circle">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf058;</code></td>
            <td>Confirmation or completion</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-exclamation-triangle" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-exclamation-triangle">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf071;</code></td>
            <td>Warning</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-exclamation-circle" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-exclamation-circle">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf06a;</code></td>
            <td>Error</td>
        </tr>

    </tbody>
</table>

## Identification

<table class="usa-table-borderless">
    <thead>
        <tr>
            <th scope="col">Icon</th>
            <th scope="col">HTML</th>
            <th scope="col">Unicode</th>
            <th scope="col">Usage</th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <th scope="row"><i class="fas fa-phone" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-phone">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf095;</code></td>
            <td>Telephone number</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-map-marker" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-map-marker">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf041;</code></td>
            <td>Location or address</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-road" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-road">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf018;</code></td>
            <td>Driving directions</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-globe" aria-hidden="true" aria-hidden="true"></i></th>
            <td>&lt;i class="fas fa-globe">&lt;/i></td>
            <td><code class='code-fa'>&amp;#xf0ac;</code></td>
            <td>Website address</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-question-circle" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-question-circle">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf059;</code></td>
            <td>Help or contact information</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-cog" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-cog">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf013;</code></td>
            <td>Settings</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-folder" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-folder">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf07b;</code></td>
            <td>Content folders (messaging)</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-paperclip" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-paperclip">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf0c6;</code></td>
            <td>Attachment (messaging)</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-calendar" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-calendar">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf133;</code></td>
            <td>Duration (days/months/years)</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-envelope" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-envelope">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#xf0e0;</code></td>
            <td>Message, notfication, letter</td>
        </tr>

        <tr>
            <th scope="row"><i class="fas fa-user-circle" aria-hidden="true" aria-hidden="true"></i></th>
            <td><code>&lt;i class="fas fa-user-circle">&lt;/i></code></td>
            <td><code class='code-fa'>&amp;#f2bd;</code></td>
            <td>Homepage sign in button icon</td>
        </tr>

    </tbody>
</table>


## Hub icons


<table class="usa-table-borderless">
  <thead>
      <tr>
          <th scope="col">Icon</th>
          <th scope="col">HTML</th>
          <th scope="col">Unicode</th>
          <th scope="col">Usage</th>
      </tr>
  </thead>

  <tbody>

    <tr>
        <th scope="row"><i class="fas fa-medkit" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fas fa-medkit">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f0fa;</code></td>
        <td>Healtcare hub icon</td>
    </tr>

    <tr>
        <th scope="row"><i class="fas fa-file-alt" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fas fa-file-alt">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f15c;</code></td>
        <td>Disability hub icon</td>
    </tr>

    <tr>
        <th scope="row"><i class="fas fa-graduation-cap" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fas fa-graduation-cap">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f19d;</code></td>
        <td>Education hub icon</td>
    </tr>

    <tr>
        <th scope="row"><i class="fas fa-id-card" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fas fa-id-card">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f2c2;</code></td>
        <td>Records hub icon</td>
    </tr>

    <tr>
        <th scope="row"><i class="fas fa-briefcase" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fas fa-briefcase">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f0b1;</code></td>
        <td>Careers hub icon</td>
    </tr>

    <tr>
        <th scope="row"><i class="fas fa-handshake" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fas fa-handshake">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f2b5</code></td>
        <td>Pension hub icon</td>
    </tr>

    <tr>
        <th scope="row"><i class="fas fa-home" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fas fa-home">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f015;</code></td>
        <td>Housing hub icon</td>
    </tr>

    <tr>
        <th scope="row"><i class="fas fa-shield-alt" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fas fa-shield-alt">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f3ed;</code></td>
        <td>Life Insurance hub icon</td>
    </tr>

    <tr>
        <th scope="row"><i class="fas fa-star" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fas fa-star">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f005;</code></td>
        <td>Burials hub icon</td>
    </tr>


  </tbody>
</table>

## Social media icons

<table class="usa-table-borderless">
  <thead>
      <tr>
          <th scope="col">Icon</th>
          <th scope="col">HTML</th>
          <th scope="col">Unicode</th>
          <th scope="col">Usage</th>
      </tr>
  </thead>

  <tbody>
    <tr>
        <th scope="row"><i class="fab fa-twitter" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fab fa-twitter">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f099;</code></td>
        <td>Twitter links</td>
    </tr>
    <tr>
        <th scope="row"><i class="fab fa-facebook" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fab fa-facebook">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f090;</code></td>
        <td>Facebook links</td>
    </tr>
    <tr>
        <th scope="row"><i class="fab fa-youtube" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fab fa-youtube">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f167;</code></td>
        <td>Youtube links</td>
    </tr>
    <tr>
        <th scope="row"><i class="fab fa-instagram" aria-hidden="true" aria-hidden="true"></i></th>
        <td><code>&lt;i class="fab fa-instagram">&lt;/i></code></td>
        <td><code class='code-fa'>&amp;#f16d;</code></td>
        <td>Instagram links</td>
    </tr>
  </tbody>
</table>
