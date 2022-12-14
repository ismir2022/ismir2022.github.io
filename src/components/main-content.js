import React from 'react'

const MainContent = () => {
  return (
    <div>
      <h1 className="text-[#d83616] font-bold text-2xl md:text-3xl text-center md:text-left">Welcome to ISMIR 2022!</h1>
      <p className="text-lg md:text-lg mt-8 ">
        The 23rd International Society for Music Information Retrieval
        Conference (ISMIR 2022) will take place in a hybrid format from Dec 4-8,
        2022 and will be hosted in Bengaluru, India. The International Society
        for Music Information Retrieval (ISMIR) represents the largest body of
        scholars, researchers and practitioners in the field of music
        information retrieval (MIR), an interdisciplinary research area
        concerned with processing, analysing, organising and accessing music
        information. The scope of ISMIR extends across the fields of computer
        science, musicology, cognitive science, library &amp; information
        science and electrical engineering. The annual ISMIR conference is the
        world's leading research forum on processing, searching, organising and
        accessing music-related data.
      </p>
      <p className="text-lg md:text-lg mt-5">
        ISMIR 2022 will comprise a technical program of submitted research
        papers, keynote and plenary talks by eminent speakers in MIR and related
        areas such as musicology and music cognition. A number of special
        sessions are planned on themes that are topical to both academia and
        industry. Further, satellite events such as workshops aimed to
        facilitate and increase interdisciplinary dialogue between Music
        Information Science and Humanities are planned for the days around the
        conference. The varied themes of these workshops include Music and
        Health, Music Culture and Identity, Music and Movement, Music
        Perception, and Neuromusicology.
      </p>
      <p><br /></p>
    <div className="flex flex-col gap-5">
      <h3 className="font-bold text-xl md:text-2xl md:text-left text-center">
        Awards
      </h3>

      <h3 className="font-bold text-xl md:text-xl md:text-left text-center">
        Brave New Idea Award
      </h3>
      <div style={{paddingBottom:"10px"}}>
      <dt><strong><a href="https://ismir2022program.ismir.net/poster_182.html" target="_blank">Sonus Texere! Automated Dense Soundtrack Construction for Books using Movie Adaptations</a></strong></dt>
      <dd>Jaidev Shriram, Makarand Tapaswi, Vinoo Alluri</dd>
      </div>

      <h3 className="font-bold text-xl md:text-xl md:text-left text-center">
        Best Special Call Paper Award
      </h3>
      <div style={{paddingBottom:"10px"}}>
      <dt><strong><a href="https://ismir2022program.ismir.net/poster_83.html" target="_blank">Raga Classification From Vocal Performances Using Multimodal Analysis</a></strong></dt>
      <dd>Martin Clayton, Preeti Rao, Nithya Nadig Shikarpur, Sujoy Roychowdhury, Jin Li</dd>
      </div>

      <h3 className="font-bold text-xl md:text-xl md:text-left text-center">
        Best Student Paper Award
      </h3>
      <div style={{paddingBottom:"10px"}}>
      <dt><strong><a href="https://ismir2022program.ismir.net/poster_165.html" target="_blank">Traces of Globalization in Online Music Consumption Patterns and Results of Recommendation Algorithms</a></strong></dt>
      <dd>Oleg Lesota, Emilia Parada-Cabaleiro, Elisabeth Lex, Navid Rekabsaz, Stefan Brandl, Markus Schedl</dd>
      </div>

      <h3 className="font-bold text-xl md:text-xl md:text-left text-center">
        Best Paper Award
      </h3>
      <div style={{paddingBottom:"10px"}}>
      <dt><strong><a href="https://ismir2022program.ismir.net/poster_335.html" target="_blank">Performance MIDI-to-score conversion by neural beat tracking</a></strong></dt>
      <dd>Lele Liu, Qiuqiang Kong, Veronica Morfi, Emmanouil Benetos</dd>
      </div>

      <h3 className="font-bold text-xl md:text-xl md:text-left text-center">
        Best Reviewer Awards
      </h3>
      <div style={{paddingBottom:"10px"}}>
      <dt><strong>Katharina Hoedt</strong></dt>
      <dd>Johannes Kepler University Linz</dd>
      </div>
      <div style={{paddingBottom:"10px"}}>
      <dt><strong>Maximilian Schmitt</strong></dt>
      <dd>University of Augsburg</dd>
      </div>
      <div style={{paddingBottom:"10px"}}>
      <dt><strong>Reinier de Valk</strong></dt>
      <dd>Moodagent</dd>
      </div>
      <div style={{paddingBottom:"10px"}}>
      <dt><strong>Silvan Peter</strong></dt>
      <dd>Johannes Kepler University Linz</dd>
      </div>
      <div style={{paddingBottom:"10px"}}>
      <dt><strong>Thomas Prätzlich</strong></dt>
      <dd>Learnfield GmbH/Skoove</dd>
      </div>
    </div>
    </div>

  )
}

export default MainContent
