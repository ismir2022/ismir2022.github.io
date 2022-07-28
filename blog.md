---
layout: page
title: International Society for Music Information Retrieval
---

# ISMIR 2022 Blog

<br>
<div class="cardrow">
    <section>
    <table class="cardtable">
    <tr>
    {% for post in site.posts limit:3 %}
        <td class="cardcell"  onclick="location.href='{{post.url | relative_url}}'">
            <div class="card">
                <img src="{{ post.featured-img }}" alt="Card Avatar" class = "cardimage">
                <div class="cardcontainer">
                    <p><b>{{post.title}}</b></p>
                    <p>{{ post.date | date: "%b %d, %Y" }}</p>
                    <p>{{post.summary | strip_html | truncatewords:15}}</p>
                </div>
            </div>
        </td>
    {% endfor %}
    </tr>
    {% for post in site.posts offset:3 %}
        <td class="cardcell"  onclick="location.href='{{post.url | relative_url}}'">
        <div class="card">
            <img src="{{post.featured_img}}" alt="Card Avatar" class = "cardimage">
            <div class="cardcontainer">
                <p><b>{{post.title}}</b></p>
                <p>{{ post.date | date: "%b %d, %Y" }}</p>
                <p>{{ post.summary | strip_html | truncatewords:20 }}</p> 
            </div>
        </div>
        </td>
    {% endfor %}
    <tr>
    </tr>
    </table>
    </section>
    <br>
    <br>
</div>