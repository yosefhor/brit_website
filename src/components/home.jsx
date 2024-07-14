import React from 'react'
import Contact from './contact'

export default function Home() {
  return (
    <div>
      <h1 className='my-4'>
        Schalom und herzlich Willkommen,
      </h1>
      <div className='lead fw-normal'>
      <p>
        Ich freue mich, Sie auf meiner Homepage begrüßen zu dürfen.
      </p>
      <p>
        Hier finden Sie umfassende Informationen zur jüdischen rituellen Beschneidung, einschließlich der Bedeutung der Brit Milah, Beschneidungen bei Säuglingen, Kindern, Jugendlichen und Erwachsenen, sowie Einzelheiten zum Ablauf und Heilungsprozess. Außerdem erhalten Sie Informationen über mich und die verschiedenen Kontaktmöglichkeiten.
      </p>
      <p>
        Falls dieser erste Überblick Ihr Interesse geweckt hat und Sie einen Mohel suchen, der die Brit Milah - Beschneidung - Circumcision Ihres Kindes von A bis Z durchführt, zögern Sie bitte nicht, mich über den Button <a href='/contact'>Kontakt</a> zu kontaktieren. Ich freue mich, Ihnen zur Verfügung zu stehen.
      </p>
      <p>
        Auch nicht-jüdische Menschen sind herzlich eingeladen, sich bei Fragen zur Beschneidung an mich zu wenden. Ich werde Sie nach bestem Wissen und Gewissen unterstützen, unabhängig von Ihrem religiösen Hintergrund.
      </p>
      <p className=' fw-medium font-italic'>
        Mit freundlichem Schalom,
        <br />
        Rabbiner David Goldberg
        <br />
        Beschneidungen - Ordained and Certified Mohel
      </p>
      </div>
    </div>
  )
}
