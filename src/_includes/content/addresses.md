Write out street names (street, road, avenue, boulevard, highway, etc.) in both body copy and in address blocks. Don't abbreviate.

When a street address contains a compass point (north, south, etc.), defer to the way it's referenced locally. For example, some cities may abbreviate compass points like north and south for some but not all streets.
<p>
  In the examples below, we spell out the street names, and style the compass points the way they're locally referenced in Washington, D.C., and New York City, which both abbreviate compass points.
</p>

{% capture example_like_this %}
<p class="va-address-block">
1600 Pennsylvania Avenue, NW <br/>
Washington, DC 20500 <br/>
</p>

<p class="va-address-block">
123 E. 45th Street <br/>
New York, NY 67890 <br/>
</p>
{% endcapture %}

{% capture example_not_this %}
<p class="va-address-block">
1600 Pennsylvania Ave. Northwest<br/>
Washington, DC 20500<br/>
</p>

<p class="va-address-block">
123 East 45th St. <br/>
New York, NY 67890 <br/>
</p>
{% endcapture %}

{% include _like-this-not-this.html like_this=example_like_this not_this=example_not_this %}

### Zip codes

When we ask a Veteran to fill out their address, we don't require them to include the extra 4 digits of their zip code. But when we (VA) provide an address for Veterans to send documents to, we sometimes include the extra 4 digits of the zip code.