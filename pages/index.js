import Head from 'next/head'
import Card from './components/card/Card.jsx'

export default function Home() {
  const buy = (id) => {
    console.log(`Comprando pacote ${id}`)
  }

  return (
    <>
      <Head>
        <title>Pacotes de Viagem</title>
        <meta name="description" content="Pacotes de Viagem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg" >
        <div className="bg-overlay" />
          <div className="info-container">
            <h1>Conheça nossos pacotes</h1>
            <p>Escolha o que melhor combina com você e aproveite!</p>
          </div>
          <div className="card-container">
            <Card
              title='Plano Econômico'
              desc='7 dias na África do Sul, hospedagem em Hotel 3 Estrelas com café da manhã inluso. Cama dupla com ar-condicionado.'
              color='#A6D883'
              price='12x R$109,90 por pessoa'
              buy={() => buy(1)}
            />
            <Card
              title='Plano Padrão'
              desc='7 dias na África do Sul, hospedagem em Hotel 4 Estrelas com café da manhã incluso. Cama queen com ar-condicionado. '
              color='#53D3C4'
              price='12x R$219,90 por pessoa'
              buy={() => buy(2)}
            />
            <Card
              title='Plano Deluxe'
              desc='7 dias na África do Sul, hospedagem em Hotel 5 Estrelas all-inclusive. Cama queen, ar-condicionado e hidromassagem.'
              color='#00757E'
              price='12x R$329,90 por pessoa'
              buy={() => buy(3)}
            />
          </div>

          <div className='footer'>
            <p>Feito por Eduardo Zaqueu como parte do <a href='https://github.com/JCDMeira/challenge-roadmap-index' target='_blank'>desafio React</a> de Jean Meira</p>
          </div>
        </div>
      </main>
    </>
  )
}
