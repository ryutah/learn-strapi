---
<!-- see: https://www.11ty.dev/docs/pagination/ -->
pagination:
  data: categories
  size: 2
  aslias: categories
permalink: "categories/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---

# Categories

<ul>
{%- for category in categories %}

  <li><a href="/category-entry/{{ category.slug }}/">{{ category.header }}</a></li>

{% endfor -%}

</ul>
