import './global.css';
import style from './App.module.css';
import { CardPerson } from './components/CardPerson/CardPerson';
import { Contato } from './components/Contatos/Contatos';
import { Header } from './components/Header/Header'

export function App() {
  const listStack = [];

  return (
    <div className={style.container}>
      <CardPerson
        cover="https://cdn.awsli.com.br/600x450/129/129579/produto/16245461/f001560bcb.jpg"
        avatar="https://pps.whatsapp.net/v/t61.24694-24/324793237_571846001250680_6182837185390238082_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQJe-SjCXxKkWqafBRyTkzYWUx-tSYZYKX9ktGxRlinog&oe=646AC90E"
        name="Daniel Walther"
        office="Tec. TI"
        stacks={listStack}
      />

      <div className={style.contactList}>
        <Header/>

        <div className={style.contacts}>
          <h1 className={style.letter} style={{ backgroundColor: "#006deb" }}> L </h1>
            <Contato
              avatar="https://pps.whatsapp.net/v/t61.24694-24/315794592_3242137089432855_7025582316314927516_n.jpg?ccb=11-4&oh=01_AdSqjnwt_SevgbfGO6yLONfqJ5CCIlxeZ3sR0U2jYUAxiA&oe=64654139"
              name="Luisa"
              phone="(55) 99384-3445"
            />

            <Contato
              avatar="https://tntsports.com.br/__export/1578847109206/sites/esporteinterativo/img/2020/01/12/lucas_silva_crop1578847108568.jpg_423682103.jpg"
              name="Lucas"
              phone="(51) 99875-4578"
            />

          <h1 className={style.letter} style={{ backgroundColor: "#292975" }}> P </h1>
            <Contato
              avatar="https://yt3.googleusercontent.com/V3wZCeFTyAHulcVVicrBFU2QqAgGyxtnCdm2zbFUFHMuOOzzWWYZeMj4MVvvPyiMUVrmfnGExQ=s900-c-k-c0x00ffffff-no-rj"
              name="Pedro"
              phone="(98) 9843-1581"
            />

          <h1 className={style.letter} style={{ backgroundColor: "#000061" }}> S </h1>
            <Contato
              avatar="https://yt3.googleusercontent.com/VJnJRnIhLz99jnsqqIZt4n475Gn0B7ga8wc_CLM2NrsVGk-z-62e7WOckKwAysNMpFdCXdxKb1Y=s900-c-k-c0x00ffffff-no-rj"
              name="Sara"
              phone="(67) 9723-4567"
            />
        </div>
      </div>
    </div>

  )
}
