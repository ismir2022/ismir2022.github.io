---
layout: page
title: International Society for Music Information Retrieval
---
# Tutorials

All the tutorials at ISMIR 2022 will take place on 04 December, 2022 in a hybrid format. There will be three parallel tutorials each in the morning and the afternoon sessions, with a total of six tutorials. 

## Morning Session

### T1(M): An Introduction to Symbolic Music Processing in Python with Partitura

*Carlos Cancino-Chacón, Francesco Foscarin, Emmanouil Karystinaios, Silvan David Peter*

Symbolic music formats (e.g., MIDI, MusicXML/MEI) can provide a variety of high-level musical information like note pitch and duration, key/time signature, beat/downbeat position, etc. Such data can be used as both input/training data and as ground truth for MIR systems.

This tutorial aims to provide an introduction to symbolic music processing for a broad MIR audience, with a particular focus on showing how to extract relevant MIR features from symbolic musical formats in a fast, intuitive, and scalable way. We do this with the aid of the Python package Partitura.  To target different kinds of symbolic data, we use an extended version of the ASAP Dataset, a multi-modal dataset that contains MusicXML scores, MIDI performances, audio performances, and score-to-performance alignments.

The tutorial will be structured in four parts: The first part provides an introduction to the topic of symbolic music processing. The second, third, and fourth parts are hands-on tutorials that showcase the structure of the Partitura package (including its relation to other popular Python packages for symbolic music processing), how to extract common MIR features, and how to work with symbolic multimodal datasets, respectively.

The motivation behind this tutorial is to promote research on symbolic music processing in the MIR community. Therefore, we target a broad audience of researchers without requiring prior knowledge of this particular area.  For the hands-on parts of the tutorial, we presuppose some practical experience with the Python language, but we will provide well-documented step-by-step access to the code in the form of Google Colab notebooks, which will be made publicly available after the tutorial.  Furthermore, some familiarity with the basic concepts of statistics and machine learning is useful.

This work receives funding from the European Research Council (ERC) under the European Union's Horizon 2020 research and innovation programme, grant agreement No 101019375 (Whither Music?).

**Biographies of Presenters**

[**Carlos Cancino-Chacón**](http://www.carloscancinochacon.com/) is an Assistant Professor at the Institute of Computational Perception, Johannes Kepler University, Linz, Austria, and a Guest Researcher at the RITMO Centre for Interdisciplinary Studies in Rhythm, Time and Motion, University of Oslo, Norway.
His research focuses on studying expressive music performance, music cognition, and music theory with machine learning methods.
He received a doctoral degree in Computer Science at the Institute of Computational Perception of the Johannes Kepler University Linz,
a M.Sc. degree in Electrical Engineering and Audio Engineering from the Graz University of Technology, a degree in Physics from the National Autonomous University of Mexico, and a degree in Piano Performance from the National Conservatory of Music of Mexico.

[**Francesco Foscarin**](https://www.jku.at/en/institute-of-computational-perception/about-us/people/franceso-foscarin/) is a postdoctoral researcher at the Institute of Computational Perception, Johannes Kepler University, Linz, Austria. He completed his Ph.D. at CNAM Paris on music transcription, with a focus on the production of musical scores, and holds classical and jazz piano degrees from the Conservatory of Vicenza. His research interests include post-hoc explainability techniques for DL models, grammar-based parsing of hierarchical chord structures, piano comping generation for jazz music, and voice separation in symbolic music.

[**Emmanouil Karystinaios**](https://www.jku.at/en/institute-of-computational-perception/about-us/people/emmanouil-karystinaios/) is a Ph.D. student at the Institute of Computational Perception, Johannes Kepler University, Linz, Austria. His research topics encompass graph neural networks, music structure segmentation, and automated music analysis. He holds an M.Sc. degree in Mathematical Logic from Paris Diderot University, an M.A. in Composition from Paris Vincennes University, and an integrated M.A. in Musicology from the Aristotle University of Thessaloniki.

[**Silvan David Peter**](https://www.jku.at/en/institute-of-computational-perception/about-us/people/silvan-david-peter/) is a University Assistant at the Institute of Computational Perception, Johannes Kepler University, Linz, Austria. His research interests are the evaluation of and interaction with computational models of musical skills. He holds an M.Sc. degree in Mathematics from the Humboldt University of Berlin.

<hr>


### T2(M): Computational Methods For Supporting Corpus-Based Research On Indian Art Music

*Thomas Nuttall, Genís Plaja-Roglans, Lara Pearson, Brindha Manickavasakan*

Culture-aware approaches to computational musicology and music information research (MIR) have been shown to be effective for a musically relevant analysis of a music culture. Projects such as CompMusic (2011-2017), MusicalBridges (2018-2022) or the initiatives funded by SPARC (2019-2022) have demonstrated the importance of considering sociocultural specifics of a music tradition to effectively define research problems, collect data and propose methods for analysis. These projects  have made particularly notable contributions to the analysis of Indian Art Music (IAM), leading to a collective body of bespoke computational methods for analyzing these traditions.


Through this tutorial we aim to compile and present such works, making openly available a number of software tools and materials developed by MIR researchers working on the two main IAM traditions, Carnatic and Hindustani. The content will be organized into five sections: (1) datasets and corpora, (2) melodic analysis, (3) rhythmic analysis, (4) timbral analysis and (5) structural analysis. Each topic will include an introduction covering the basic musical concepts required to understand its constituent tasks, followed by a practical presentation of the materials and software tools compiled.


This tutorial is the result of an ongoing collaborative effort involving many contributors. The software will be available in Python through a single Github repository, containing clear and reproducible implementations of the presented methodologies. A Jupyter WebBook will be the main tutorial reference, in which we will introduce all the materials, contextualize the software tools, and include Jupyter Notebook examples for most of the research tasks covered.

**Biographies of Presenters**

[**Thomas Nuttall**](https://thomasgnuttall.github.io/about) is a Research Engineer in the Music Technology Group (MTG) of Universitat Pompeu Fabra in Barcelona, Spain. His research focus is on melodic pattern analysis in musical traditions under-represented in the music computation and computational musicology fields, such as Arab-Andalusian or Indian Art Music, and on building tools that bridge the gap between the music information retrieval and musicology research communities.


**Genís Plaja-Roglans** is a Ph.D student in the Music Technology Group (MTG) of Universitat Pompeu Fabra in Barcelona, Spain. His research focus is on creation of bespoke machine learning models for the understanding of musical traditions under-represented in Music Information Research, currently focusing on Carnatic and Hindustani music. Recent work includes vocal melody estimation, singing voice source separation and repeated pattern discovery. 


**Lara Pearson** is a  musicologist at the Max Planck Institute for Empirical Aesthetics (MPIEA), Frankfurt am Main, Germany. Her work explores bodily and movement dimensions of music experience and meaning, often combining sonic and kinetic analyses. Her stylistic focus lies in South Indian music practices, in particular Carnatic music. She has also published on cross-cultural aesthetics, cultural heritage, music notation and the concept of improvisation.


**Brindha Manickavasakan** is a Carnatic Music vocalist, and is among the foremost, popular young performing Carnatic musicians in India. She has been performing for the past 21 years, and is currently learning from Vidushi Suguna Varadachari. She is an ‘A’ graded vocal artist of All India Radio. Brindha holds a Master’s degree in Biostatistics from Georgetown University, USA, a Master’s degree in Music and is a PhD candidate in Music from Madras University with a thesis on the contribution of Tañjāvūr K Poṉṉayyā Piḷḷai. She is a constant feature in all the major sabhas in Chennai, and performs regularly across India and abroad.

<hr>

### T3(M): Designing Controllable Synthesis System for Musical Signals

*Hyeong-Seok Choi, Yusong Wu*

Advances in deep learning and signal processing research have made it possible to generate signals that at times can be difficult to distinguish from real samples.
Despite the realistic output the models can produce, however, the controllability of the models is still constrained because of the black-box-like nature of many models.
 
In this tutorial, we aim to introduce considerations researchers can take into account for a better end-user experience. We would like to focus in particular on how to design deep generative models with intuitive control of music audio signals, specifically vocal and instrumental performance.
To this end, we will first present a broad review of up-to-date generative models for singing voices and musical instrument performance. Then, we will share our own research results and insights regarding both the implicit and explicit controllability of the deep learning models. In the section on presenting controllable models for instrumental performance synthesis, we will include a walk-through of the building, training, and control of the DDSP and MIDI-DDSP models via Jupyter (Colab) Notebook with Python and Tensorflow.
 
The target audience for this tutorial is researchers who are interested in deep generative models for monophonic signals, especially for singing voice and musical instruments. We expect the audience to have a basic understanding of machine learning concepts for audio signal processing.

**Biographies of Presenters**

**Hyeong-Seok Choi** received his PhD from Seoul National University, South Korea, in 2022, with a thesis titled, "A Controllable Generation of Signals from Self-Supervised Representations" under the supervision of Prof. Kyogu Lee. His recent research interest is mainly in representation learning and controllable synthesis of speech and singing voices. He co-founded the audio technology startup company, Supertone, where he has been working as the lead of their research team. He contributed to the winning of the CES 2022 Innovation Awards Honoree: Software & Mobile Apps by proposing a real-time voice conversion technology.

**Yusong Wu** is a final-year research master at the University of Montreal and Mila in Montreal, Canada. He is co-advised by Prof. Aaron Courville and Prof. Cheng-Zhi Anna Huang and will become a Ph.D. student under the same advisors shortly. His research focuses on making better generative models for music creativity. His recent work ``MIDI-DDSP: Detailed Control of Musical Performance via Hierarchical Modeling", collaborating with Google Magenta, was accepted by ICLR 2022 for oral presentation.

<hr>

## Afternoon Session

### T4(A): Few-Shot and Zero-Shot Learning for Musical Audio

*Yu Wang, Hugo Flores García, Jeong Choi*

While deep neural networks achieved promising results in many MIR tasks, they typically require a large amount of labeled data for training. Rare, fine-grained, or newly emerged classes (e.g. a rare musical instrument, a new music genre) where large-scale data collection is hard or simply impossible are often considered out-of-vocabulary and unsupported by MIR systems. To address this, few-shot learning (FSL) and zero-shot learning (ZSL) are learning paradigms that aim to train a model that can learn a new concept based on just a handful of labeled examples (few-shot) or some auxiliary information (zero-shot), mimicking human ability. By doing so, the trained model is no longer limited to a pre-defined and fixed set of classes but ideally can generalize to any class of interest with the cost of little human intervention. In addition, few-shot and zero-shot models naturally incorporate human input without asking for significant effort, making them useful tools when developing MIR systems that can be customized by individual users.  

In this tutorial, we will go over
1. FSL/ZSL foundations - Task definition and existing approaches.
2. Recent advances of FSL/ZSL in MIR - Techniques and contributions in recent studies. We will also discuss the remaining challenges and future directions.  
3. Coding examples - Showcasing the training and evaluation pipeline of FSL and ZSL models on specific MIR tasks. Code and references to the tools and datasets will be provided.

We aim for this tutorial to be useful to researchers and practitioners in the ISMIR community who are facing labeled data scarcity issues, looking for new interaction paradigms between users and MIR systems, or generally interested in the techniques and applications of FSL and ZSL. We assume the audience is familiar with the basic machine learning concepts.

**Biographies of Presenters**

[**Yu Wang**](https://y-wang.weebly.com/)
Yu is a Ph.D. candidate in Music Technology at the Music and Audio Research Laboratory at New York University, working under Prof. Juan Pablo Bello. Her research interests focus on machine learning and signal processing for music and general audio. Specifically, she is interested in adaptive and interactive machine listening with minimal supervision. She has interned with Adobe Research and Spotify. Before joining MARL in 2017, she was in the Music Recording and Production program at the Institute of Audio Research. She holds two M.S. degrees in Materials Science & Engineering from Massachusetts Institute of Technology (2015) and National Taiwan University (NTU) (2012), and a B.S. in Physics from NTU (2010). Yu is a guitar player and also enjoys sound engineering. Japanese math rock is her current favorite music genre.

**Hugo Flores García**
Hugo is a Ph.D. student in Computer Science at Northwestern University, working under Prof. Bryan Pardo in the Interactive Audio Lab. Hugo's research interests lie at the intersection of machine learning, signal processing, and human computer interaction for music and audio.  Hugo has previously worked on a deep learning framework for Audacity, an open source audio editor, and will be a research intern at Spotify and Descript during the latter half of 2022. Hugo holds an B.S. in Electrical Engineering from Georgia Southern University (2020). He is a jazz guitarist, and can be seen playing with various groups local to the Chicago area. Hugo enjoys augmenting musical instruments with technology, as well as making interactive music and art in SuperCollider and Max/MSP. 

**Jeong Choi**
Jeong is a machine learning researcher at Naver, where he leads NOW AI team that's working on a multi-modal recommendation system for a video streaming service, Naver NOW. Before joining Naver, he was a researcher at NCSOFT, working on a recommedation system in a music game FUSER. He also interned at Deezer Research. He received a M.S. in Culture Technology at Korea Advance Institute of Science and Technology, under the supervision of Prof. Juhan Nam. His research interest is on representational learning of various signals that can further contribute to diverse music recommendation strategies. Previously, he pursued a long music career as a composer and a bassist. His passion for music research originates from the experience. He also received a M.S. and a B.E. in Digital Media at Ajou University, and majored in French at Daewon Foreign Language High School. 

<hr>

### T5(A): Deep learning for automatic mixing

*Christian J. Steinmetz, Soumya Sai Vanka, Gary Bromham, Marco A. Martínez Ramírez*

Mixing is a central task within audio post-production where expert knowledge is required to deliver professional quality content, encompassing both technical and creative considerations. Recently, deep learning approaches have been introduced that aim to address this challenge by generating a cohesive mixture of a set of recordings as would an audio engineer. These approaches leverage large-scale datasets and therefore have the potential to outperform traditional approaches based on expert systems, but bring their own unique set of challenges. In this tutorial, we will begin by providing an introduction to the mixing process from the perspective of an audio engineer, along with a discussion of the tools used in the process from a signal processing perspective. We will then discuss a series of recent deep learning approaches and relevant datasets, providing code to build, train, and evaluate these systems. Future directions and challenges will be discussed, including new deep learning systems, evaluation methods, and approaches to address dataset availability. Our goal is to provide a starting point for researchers working in MIR who have little to no experience in audio engineering so they can easily begin addressing problems in this domain. In addition, our tutorial may be of interest to researchers outside of MIR, but with a background in audio engineering or signal processing, who are interested in gaining exposure to current approaches in deep learning. 


[**Christian J. Steinmetz**](https://www.christiansteinmetz.com/) is PhD researcher working with Prof. Joshua D. Reiss within the Centre for Digital Music at Queen Mary University of London. He researches applications of machine learning in audio with a focus on differentiable signal processing. Currently, his research revolves around high fidelity audio and music production, which involves enhancing audio recordings, intelligent systems for audio engineering, as well as applications that augment and extend creativity. He has worked as a Research Scientist Intern at Adobe, Facebook Reality Labs, and Dolby Labs. Christian holds a BS in Electrical Engineering and BA in Audio Technology from Clemson University, as well as an MSc in Sound and Music Computing from the Music Technology Group at Universitat Pompeu Fabra.

[**Soumya Sai Vanka**](https://www.saisoumya.com/) is a first year PhD researcher at the Centre for Digital Music, Queen Mary University of London. She is part of the AI and Music, Centre for Doctoral Training. Her research focus is mainly on exploring the idea of Music Mix similarity, Music Mix Style transfer, and Intelligent Multitrack Mixing using Self-Supervised, Semi-Supervised, and Unsupervised Learning architectures. She also writes music, produces and plays saxophone. Her educational background is a mixture of Masters in Physics and Courses in Music Production. 

**Gary Bromham** is a part-time PhD researcher at Queen Mary University of London, researching the role that traditional studio paradigms and retro aesthetics play in intelligent music production systems (2016 -). He has several publications in this field and has contributed a chapter to the recent Routledge publication, ‘Perspectives on Music Production: Mixing Music’ (2017). He was also a research assistant on the EPSRC funded project called FAST (Fusing Audio and Semantic Technologies) where he is employed as an industry advisor (2017 - 2020). In addition to his research interests, Gary is a practising music producer, songwriter and audio engineer, with over 30 years’ experience (1989 - 2020). He has worked with artists as diverse as Bjork, Wham, Blur and U2, during a period that has witnessed several technological changes. Gary is well versed in most popular music making software and has extensive knowledge of using analog hardware, acting as a product designer and specialist for the renowned mixing desk company, Solid State Logic. He is also a frequent guest lecturer and external advisor at several universities in the UK, Norway and Sweden; speaking on songwriting, music production aesthetics and audio engineering and bringing some of his extensive knowledge and experience to both Undergraduate and Master’s degree level programs.

[**Marco A. Martínez Ramírez**](https://m-marco.com/) is music technology researcher at Sony in the Tokyo R&D center, where he is part of the Creative AI Lab. His research interests lie at the intersection of machine learning, digital signal processing, and intelligent music production, with a primary focus on deep learning architectures for music processing tasks. Previously, he was an audio research intern at Adobe and received his PhD from the Centre for Digital Music at Queen Mary University of London. He has a MSc in digital signal processing from the University of Manchester, UK, and a BSc in electronic engineering from La Universidad de Los Andes, Colombia. Marco also has a background in music production and mixing engineering.

<hr>

### T6(A): Trustworthy MIR: Creating MIR applications with values

*Christine Bauer, Andrés Ferraro, Emilia Gómez, Lorenzo Porcaro*

The MIR community shows an increasing interest in understanding how current
technologies affect the everyday experience of people all over the world, e.g., how we
listen to music, compose songs, or learn to play an instrument. As it was introduced in
the [FAT-MIR tutorial](https://ismir2019.ewi.tudelft.nl/?q=node/41) held at ISMIR 2019, a great discussion has aroused around the
ethical, social, economic, legal, and cultural implications that the use of MIR systems
have in our life.

In this tutorial, we aim at building upon and expanding the aforementioned
debate, discussing the more recent results obtained by the MIR community and
beyond. The goal of the tutorial is to show how values, such as fairness and diversity,
can be embedded in the life cycle of MIR systems to make them trustworthy: from
algorithmic design to evaluation practices and regulatory proposals. To achieve that,
we will discuss examples of, among the others, popularity bias, gender bias,
algorithmic bias, music styles underrepresentation, and diversity-related phenomena
(e.g. filter bubbles).

This tutorial is suitable for researchers and students in MIR working in any
domain, as these issues are relevant for all MIR tasks. The examples will mostly focus
on music information retrieval and recommendation, but there are no prerequisites for
taking this tutorial. Besides presenting recent research insights, the tutorial will
integrate two hands-on sessions, where we will involve the participants in reflecting
on the design of evaluation methods that take into account values for which MIR
systems should be accountable.

**[Christine Bauer](https://christinebauer.eu/)** is an assistant professor at the
Department of Information and Computing Sciences at Utrecht University, The
Netherlands. Her research activities center on interactive intelligent systems. Recently,
she focuses on context-aware (music) recommender systems. A core interest in her
research activities are fairness in algorithmic decision-making and multi-method
evaluations. Her research and teaching activities are driven by her interdisciplinary
background. She holds a Doctoral degree in Social and Economic Sciences, a MSc in
Business Informatics, and a Diploma degree in International Business Administration.
In addition, she pursued studies in jazz saxophone. Christine holds several best paper
awards and awards for her reviewing activities. Furthermore, she received the Elise
Richter grant by the Austrian Science Fund. Before joining Utrecht University, she
was a researcher at Johannes Kepler University Linz, WU Wien, and EC3 (Austria),
and University of Cologne (Germany). In 2013 and 2015, she was a Visiting Fellow at
Carnegie Mellon University (PA, USA). Christine has co-organized the workshop
PERSPECTIVES 2021 at RecSys 2021 and IUadaptMe 2019 at UMAP 2019. At
UMAP 2021, she gave a tutorial on Multi-Method Evaluation of Adaptive Systems.
Furthermore, she was a co-chair for the Doctoral Symposium at RecSys 2021.

[Andrés Ferraro](https://andrebola.github.io/about/) (BSc/MSc in Software Engineering) is a
Postdoctoral Fellow at McGill University and Mila (Quebec AI Institute), Canada. He
completed his PhD at the Department of Information and Communication
Technologies and Engineering of the Universitat Pompeu Fabra, Spain. His thesis
uncovers multiple dimensions in which music recommender systems affect the artists
and proposes alternatives to mitigate such problems. He is currently part of an
interdisciplinary project, rethinking music recommender systems by considering new
and alternative conceptions from the social sciences and humanities, informed by
non-profit systems and critical debates over bias and discrimination. He is
co-organizer of LatAm Bish Bash, a series of meetings and networking events that
connect engineers, researchers, and students working on music and audio signal
processing.

[Emilia Gómez](https://emiliagomez.com/) (BSc/MSc in Electrical Engineering, PhD in
Computer Science) is Principal Investigator on Human and Machine Intelligence
(HUMAINT) team at the Joint Research Center (European Commission). She is also a
Guest Professor at the Music Technology Group, Universitat Pompeu Fabra,
Barcelona. Her research is grounded on the Music Information Retrieval field, where
she has developed data-driven technologies to support music listening experiences.
Starting from music, she studies the impact of artificial intelligence (AI) on human
decision making, cognitive and socio-emotional development. Her research interests
include fairness and transparency in AI, the impact of AI on jobs, and how it affects
children development.

[Lorenzo Porcaro](https://lorenzoporcaro.com/) (MSc Sound and Music Computing and
Intelligent Interactive Systems) is a PhD candidate at the Music Technology Group,
Universitat Pompeu Fabra (UPF), Spain. His research is at the intersection between
Music Information Retrieval and Social Computing, and he is currently working on
the assessment of the impact of music recommender systems on cultural diversity. He
has collaborated in several initiatives focused on the analysis of ethical dimensions of
algorithmic systems (Mechanism Design for Social Good (MD4SG); divinAI project,
HUMAINT / UPF). He has also been part of national and international research
projects aiming at making music more accessible through the use of technology (Musical AI, TROMPA).
