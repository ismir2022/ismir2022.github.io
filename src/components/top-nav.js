import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const TopNav = () => {
  return (
    <div className="flex flex-row pl-14 overflow-hidden pr-7vw w-full h-full gap-10 items-center justify-center text-center text-3xl">
      <a className="w-40 h-20">
        <StaticImage src="../images/ismir2022logo.png" alt="ismirlogo"/>
      </a>
      <div><button>Calls</button></div>
      <div><button>Program</button></div>
      <div><button>Attend</button></div>
      <div><button>Sponsors</button></div>
      <div><button>Diversity & Inclusion</button></div>
      <div><button>About</button></div>
      <div><button>Contact</button></div>
    </div>
  )
}

export default TopNav
