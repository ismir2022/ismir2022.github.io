---
layout: default
title: International Society for Music Information Retrieval
---

<!-- <h1 style="float:left; width:63%;"> Welcome to ISMIR 2022! </h1> -->
<div style="background-color: rgb(255, 255, 255); height:45vh;float:right; width:63%; padding-left: 2vw; padding-right: 2vw; padding-top: 1vh; padding-bottom: 1vh; display:block; overflow-y:auto; overflow-x:hidden; ">
<h2><span style="color:#DB442A">Welcome to ISMIR 2022!</span></h2>
<p>The 23rd International Society for Music Information Retrieval Conference (ISMIR 2022) will take place in a hybrid format from Dec 4-8, 2022 and will be hosted in Bengaluru, India. The International Society for Music Information Retrieval (ISMIR) represents the largest body of scholars, researchers and practitioners in the field of music information retrieval (MIR), an interdisciplinary research area concerned with processing, analysing, organising and accessing music information. The scope of ISMIR extends across the fields of computer science, musicology, cognitive science, library & information science and electrical engineering. The annual ISMIR conference is the world's leading research forum on processing, searching, organising and accessing music-related data. 
</p>
<p>
ISMIR 2022 will comprise a technical program of submitted research papers, keynote and plenary talks by eminent speakers in MIR and related areas such as musicology and music cognition. A number of special sessions are planned on themes that are topical to both academia and industry. Further, satellite events such as workshops aimed to facilitate and increase interdisciplinary dialogue between Music Information Science and Humanities are planned for the days around the conference. The varied themes of these workshops include Music and Health, Music Culture and Identity, Music and Movement, Music Perception, and Neuromusicology. 
</p>
</div>
<br>
<h3 style="float:right; width:63%">Highlights</h3>
<table class="scrolldown" rules=none style="float:right; width:63%;">
		<tbody>
            <tr>
			<td><li data-stringify-indent="0" data-stringify-border="0">Information on <a href="[Keynotes](https://ismir2022.ismir.net/program/keynotes)">Keynotes</a>, <a href="[Tutorials](https://ismir2022.ismir.net/program/tutorials)">Tutorials</a> and <a href="[Satellite Events](https://ismir2022.ismir.net/program/satellites)">Satellite Events</a> at ISMIR 2022 is now available</li></td>
            </tr>
            <tr>
                <td><li data-stringify-indent="0" data-stringify-border="0">Registration portal for ISMIR 2022 is now open - <a href="[Register Now!](https://ismir2022.ismir.net/attend/registration)">Register Now!</a></li></td>
            </tr>
            <tr>
                <td><li data-stringify-indent="0" data-stringify-border="0">Several author and WiMIR grants for ISMIR 2022 are available - <a href="[here](https://ismir2022.ismir.net/attend/support)">Apply for grants</a></li></td>
            </tr>
		</tbody>
</table>

<div class="cardrow">
    <h3 style="padding-top: 0.125em;"> ISMIR 2022 Blog </h3>
    <section style="background-color: rgb(255, 255, 255); height:25vw">
    <table class="cardtable">
    <tr>
    {% for post in site.posts %}
        <td class="cardcell">
        <div class="card">
            <img src="https://picsum.photos/200" alt="Card Avatar" class = "cardimage">
            <div class="cardcontainer">
                <p><b>{{post.title}}</b></p>
                <p>{{post.summary | strip_html | truncatewords:10}}</p> 
                <a href = "{{post.url | relative_url}}">Read More</a>
            </div>
        </div>
        </td>
    {% endfor %}
    </tr>
    </table>
        <!-- <div class="home-post-list" itemscope="" itemtype="http://schema.org/Blog">
            {% for post in site.posts %}
                {% include card.html %}
            {% endfor %}
        </div> -->
        <!-- <table style="overflow:hidden">
        <tr>
            {% for post in site.posts %}
                <td>
                    <div class="post-card" itemprop="blogPosts" itemscope="" itemtype="http://schema.org/BlogPosting">
                    {% if post.categories %}
                        {% assign categories = post.categories %}
                        <span class="post-card__label">
                        {% for category in categories %}
                            <a href="{{site.baseurl}}/categories/#{{category|slugize}}" class="label"> {{ category }} </a>
                            {% unless forloop.last %}&nbsp;{% endunless %}
                        {% endfor %}
                        </span>
                    {% endif %}
                    <a href="{{ post.url | relative_url }}">
                        {% if post.featured-img %}
                        <figure class="post-card__thumb">
                            <img
                            src="{{ site.url }}{{ site.baseurl }}{{post.featured-img}}"
                            data-srcset="{{ site.url }}{{ site.baseurl }}{{post.featured-img}}, {{ site.url }}{{ site.baseurl }}{{post.featured-img}} 2x"
                            class="lazyload blur"
                            alt="{{post.title}}"
                            />
                            <noscript><img src="{{ site.url }}{{ site.baseurl }}{{post.featured-img}}" alt="{{ post.title }}"></noscript>
                        </figure>
                        {% else %}
                        <figure class="post-card__thumb">
                            <div class="dark-bg"></div>
                        </figure>
                        {% endif %}
                    </a>
                    <a class="post-card__inner" href="{{ post.url | relative_url }}">
                        <div class="post-card__header">
                        <h3>{{ post.title | strip_html | truncate: 50 }}</h3>
                        {% assign date_format = site.sleek.date_format | default: "%b %-d, %Y" %}
                        <span class="post-card__meta">
                            <time>{{ post.date | date: date_format }}</time>
                        </span>
                        </div>
                        {% if post.summary %}
                        <p>{{ post.summary | strip_html | truncatewords:20 }}</p>
                        {% else %}
                        <p>{{ post.content | strip_html | truncatewords: 20 }}</p>
                        {% endif %}
                    </a>
                    </div> -->
                    <!-- <iframe src="_includes/card.html" scrolling="no" frameborder="yes" shadow="yes" style="-webkit-transform:scale(0.8);position: relative;top:-150px;" width=300px height=500px ></iframe> -->
                <!-- </td> -->
                <!-- {% include card.html %} -->
            <!-- {% endfor %} -->
            <!-- <td><iframe src="https://ismir2021.ismir.net/blog/gettingmostismir/" scrolling="no" frameborder="no" shadow="no" style="-webkit-transform:scale(0.8);position: relative;top:-150px;" width=300px height=500px ></iframe></td>
            <td><iframe src="https://ismir2021.ismir.net/blog/gettingmostismir/" scrolling="no" frameborder="no" shadow="no" style="-webkit-transform:scale(0.8);position: relative;top:-150px;" width=300px height=500px ></iframe></td> -->
        <!-- </tr>
        </table> -->
    </section>
    <br>
    <br>
</div>

<table style="width:26vw; height:70vh; display: block; overflow-y:auto; overflow-x:hidden; background-color:rgb(255, 255, 255); padding-left: 2vw; padding-right: 2vw; padding-bottom: 1vh;">
	<tr> <td> <h3> Important Dates (AoE) </h3> </td> 
	     <td> </td>
	
	</tr>
        <tr>
            <td><h4><span style="color:#DB442A">Registration</span></h4></td>
            <td> </td>
        </tr>
        <tr>
            <td>Registration portal opens</td>
            <td> July 14, 2022 </td>
        </tr>
        <tr>
            <td>Author registration deadline</td>
            <td> August 12, 2022 </td>
        </tr>
        <tr>
            <td>Early Bird registration deadline</td>
            <td> August 31, 2022 </td>
        </tr>
        <tr>
            <td> Online registration portal closes for in-person attendance</td>
            <td> November 25, 2022 </td>
        </tr>
        <tr>
            <td> Registration deadline for virtual attendance</td>
            <td> December 5, 2022 </td>
        </tr>
        <tr>
            <td> Registration at the venue (for in-person attendance)</td>
            <td> December 04-08, 2022 </td>
        </tr> 
        <tr>
            <td><h4><span style="color:#DB442A">Grants</span></h4></td>
            <td> </td>
        </tr>
        <tr>
            <td> Grant applications for registration waivers open</td>
            <td> July 14, 2022 </td>
        </tr>
        <tr>
            <td> Application deadline for Author grants</td>
            <td> July 25, 2022 </td>
        </tr>
        <tr>
            <td> Author grant notifications</td>
            <td> August 3, 2022 </td>
        </tr> 
        <tr>
            <td> Application deadline for Music Author grants and WiMIR grants</td>
            <td> August 19, 2022 </td>
        </tr>
        <tr>
            <td> Grant notifications for Music Author grants and WiMIR grants</td>
            <td> August 19, 2022 </td>
        </tr> 
        <tr>
            <td><h4><span style="color:#DB442A">Papers</span></h4></td>
            <td> </td>
        </tr>
        <tr>
            <td><span style="text-decoration:line-through">Submission site opening</span></td>
            <td><span style="text-decoration:line-through">April 22, 2022</span></td>
        </tr>
        <tr>
            <td><span style="text-decoration:line-through">Abstract submission deadline</span></td>
            <td><span style="text-decoration:line-through">May 13, 2022</span></td>
        </tr>
        <tr>
            <td><span style="text-decoration:line-through">Full paper submission deadline</span></td>
            <td> <span style="text-decoration:line-through">May 20, 2022</span></td>
        </tr>
        <tr>
            <td>Notification of acceptance</td>
            <td> July 14, 2022 </td>
        </tr>
        <tr>
            <td>Camera ready deadline</td>
            <td> August 9, 2022 </td>
        </tr>
        <tr>
            <td><h4><span style="color:#DB442A">Music Program</span></h4></td>
            <td> </td>
        </tr>
        <tr>
            <td><span style="text-decoration:line-through">First Call for Music</span></td>
            <td><span style="text-decoration:line-through">July 4, 2022</span></td>
        </tr>
        <tr>
        <td><span style="text-decoration:line-through">Submission site opening</span></td>
            <td><span style="text-decoration:line-through">July 10, 2022</span></td>
        </tr>
        <tr>
            <td>Music submission deadline</td>
            <td> July 31, 2022 </td>
        </tr>
        <tr>
            <td>Notification of acceptance</td>
            <td> August 15, 2022 </td>
        </tr>
        <tr>
            <td>Performance-ready submission deadline</td>
            <td> October 31, 2022 </td>
        </tr>
        <tr>
            <td><h4><span style="color:#DB442A">Tutorials</span></h4></td>
            <td> </td>
        </tr>
        <tr>
            <td><span style="text-decoration:line-through">Proposal Submission</span></td>
            <td><span style="text-decoration:line-through">April 17, 2022</span></td>
        </tr>
        <tr>
            <td><span style="text-decoration:line-through">Revision</span></td>
            <td><span style="text-decoration:line-through">April 24, 2022</span></td>
        </tr>
        <tr>
            <td><span style="text-decoration:line-through">Notification of Acceptance</span></td>
            <td><span style="text-decoration:line-through">June 5, 2022</span></td>
        </tr>
        <tr>
            <td><h4><span style="color:#DB442A">Late-Breaking Demo</span></h4></td>
            <td> </td>
        </tr>
        <tr>
            <td>LBD Submission Deadline</td>
            <td>&nbsp;TBD</td>
        </tr>
        <tr>
            <td><h4><span style="color:#DB442A">New-to-ISMIR Mentoring Program</span></h4></td>
            <td> </td>
        </tr>
        <tr>
            <td><span style="text-decoration:line-through">Deadline for applying to mentorship program</span></td>
            <td>&nbsp;<span style="text-decoration:line-through">February 28, 2022</span></td>
        </tr>
        <tr>
            <td><span style="text-decoration:line-through">Deadline for mentees for paper submission</span></td>
            <td><span style="text-decoration:line-through">March 25, 2022</span></td>
        </tr>
        <tr>
            <td><span style="text-decoration:line-through">Notification for Mentor-Mentee match</span></td>
            <td><span style="text-decoration:line-through">March 28, 2022</span></td>
        </tr>
        <tr >
            <td><span style="text-decoration:line-through">Feedback from mentors</span></td>
            <td><span style="text-decoration:line-through">April 15, 2022</span></td>
        </tr>
</table>
<br>
<div style="float:left;"><a class="twitter-timeline" data-width="26vw" data-height="47vh" href="https://twitter.com/ISMIRConf?ref_src=twsrc%5Etfw">Tweets by ISMIRConf</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>
<!-- <div class="mobiletwitter"><a class="twitter-timeline" data-width="250" data-height="400" href="https://twitter.com/ISMIRConf?ref_src=twsrc%5Etfw">Tweets by ISMIRConf</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div> -->
<br>
<br>
