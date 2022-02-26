---
layout: home
---
<style>
    /* (A) FIXED WRAPPER */
    .hwrap {
    overflow: hidden; /* HIDE SCROLL BAR */
    background: #eee;
    }
    /* (B) MOVING TICKER WRAPPER */
    .hmove { display: flex; }
    /* (C) ITEMS - INTO A LONG HORIZONTAL ROW */
    .hitem {
    flex-shrink: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    }
    /* (D) ANIMATION - MOVE ITEMS FROM RIGHT TO LEFT */
    /* 4 ITEMS -400%, CHANGE THIS IF YOU ADD/REMOVE ITEMS */
    @keyframes tickerh {
    0% { transform: translate3d(100%, 0, 0); }
    100% { transform: translate3d(-100%, 0, 0); }
    }
    .hmove { animation: tickerh linear 15s infinite; }
    .hmove:hover { animation-play-state: paused; }
</style>
# Welcome to ISMIR 2022!
<div class="hwrap"><div class="hmove"><div class="hitem">
    <p> <strong> New-to-ISMIR mentoring program has started: <a style="color:red" href="https://ismir2022.ismir.net/diversity/mentoring"> Inviting Applications </a>[Deadline: <strike>25 Feb, 2022</strike> 28 Feb, 2022] </strong></p>
    </div></div></div>
<div style="display:inline-block; margin-top:40px">
    <div style="width:17%; float:left;">
    <h2> Important Dates</h2>
    <h4 style="color:#DB442A">Papers</h4>
    <p> Submission site opening:<br>April 22, 2022 </p>
    <p> Abstract submission deadline:<br>May 13, 2022 </p>
    <p> Full paper submission deadline:<br>May 20, 2022 </p>
    <p> Notification of acceptance:<br>July 14, 2022 </p>
    <p> Camera ready deadline:<br>August 9, 2022 </p>
    <h4 style="color:#DB442A">Tutorials</h4>
    <p> Proposal Submission:<br>April 17, 2022 </p>
    <p> Revision:<br>April 24, 2022 </p>
    <p> Notification of Acceptance:<br>June 5, 2022 </p>
    <h4 style="color:#DB442A">New-to-ISMIR Mentoring Program</h4>
    <p>Deadline for applying to mentorship program:<br>February 28, 2022</p>
    <p>Deadline for mentees for paper submission:<br>March 25, 2022</p>
    <p>Notification for Mentor-Mentee match:<br>March 28, 2022</p>
    <p>Feedback from mentors:<br>April 15, 2022</p>
    <p>Further discussions [optional]: <br>April 15-30, 2022</p>
    <br>
    </div>
<div style="width:60%; float:left;">
    <p>The ISMIR conference is the world's leading research forum on processing, searching, organising and accessing music-related data. <em>The 23rd International Society for Music Information Retrieval Conference</em> will take place in a hybrid format from Dec 4-8, 2022 and will be hosted in Bengaluru, India.</p>
    <p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/F1mYxLbYHfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
    </div>
    <div style="width:18%; float:right;">
    <a class="twitter-timeline" data-width="500" data-height="500" data-theme="light" href="https://twitter.com/ISMIRConf?ref_src=twsrc%5Etfw">Tweets by ISMIRConf</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
</div>
<a href="https://twitter.com/ISMIRConf?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @ISMIRConf</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<p> <font size="-2"> &copy; 2022 ISMIR 2022. All rights reserved. ISMIR 2022 logo designed by <a href="https://mrinali.co/">Mrinali Kamath</a>.</font></p>
