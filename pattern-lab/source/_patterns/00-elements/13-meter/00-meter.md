---
title: Meter
state: elements
---
Included in elements CSS

The meter element is a gauge that is a static representation of the progress of an item. It is meant to have no dynamic component and therefore should be used to render items that are static on a single page. For all items that need to be updated via javascript there will be a Progress Bar available in the compounds SDK.

The meter element should be rendered as a div with the class 'pe-progressbar', and the appropriate "progressbar" role with aria-roledescription="meter". There is also an optional value text to describe the value in aria.