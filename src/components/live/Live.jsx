import React from 'react'
import "./Live.scss"
import Back from '../backto/Back'

function Live() {
  return (
    <div className='live'>
        <div className="live_video">
        <Back />
        <div className="mecca">
            <h2>Makka (Jonli efir)</h2>
        <iframe
            width={400}
            height={280}
            title="YouTube Live Stream"
            src="https://www.youtube.com/embed/N9QSL1PLUS4"
            frameBorder="0"
            allowFullScreen="true"
            >
        </iframe>
        </div>
        <div className="medina">
            <h2>Madina (Jonli efir)</h2>
        <iframe
            width={400}
            height={280}
            title="YouTube Live Stream"
            src="https://www.youtube.com/embed/EB0Y1ztWnic"
            frameBorder="0"
            allowFullScreen="true"
            >
        </iframe>
        </div>
        </div>
    </div>
  )
}

export default Live