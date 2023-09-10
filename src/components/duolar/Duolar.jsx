import React from 'react'
import "./Duolar.scss"
import Back from '../backto/Back'

function Duolar() {
    const duas = [
        {
            id: 1,
            desc: "JUMA NAMOZINING FARZIDA SALOM BERILGANDAN KEYIN O‘QILADIGAN DUO",
            dua: "“Bismillahir Rohmanir Rohiymil hayyil qoyyum. As'aluka an tag‘fira liy va an tu'ofiyniy minan naar”.",
            mean: "Ma'nosi: “Bismillahir Rohmaanir Rohiymil hayyil qoyyum. Yo Alloh, meni mag‘firat etishingni va menga do‘zaxdan ofiyat berishingni so‘rayman”."
        },
        {
            id: 2,
            desc: "ALLOH TAOLOGA SUYUKLI IKKI KALIMA",
            dua: "““Subhaanallohi va bihamdih. Subhaanallohil 'aziym”.”",
            mean: "Ma'nosi: “Alloh nuqsonlardan pokdir. Hamd Unga xosdir. Buyuk Rabbim pokdir”. Rasululloh (sollallohu alayhi va sallam) bunday deganlar: “Kim har kuni 100 marta “Subhaanallohi va bihamdihi” tasbehini o‘qisa, gunohlari dengiz ko‘pigi qadar ko‘p bo‘lsa ham, Alloh afv etadi”"
        }
    ]

    const comingSoon = "Qolgan duolar tez kunda qo'shiladi."

  return (
   <>
     <Back />
    <div className='duas'>
        <div className='duas_list'>
        {
            duas.map(duasItem => 
                <>
                   <div className="duas_item">
                   <h2>{duasItem.desc}</h2>
                    <h3>{duasItem.dua}</h3>
                    <p>{duasItem.mean}</p>
                   </div>
                </>
            )
        }
        <h2 className='coming'>{comingSoon}</h2>
        </div>
    </div>
   </>
  )
}

export default Duolar