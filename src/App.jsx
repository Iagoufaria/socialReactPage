import React from "react";
import Header from "./components/header";
import Section from "./components/section";
import ListItem from "./components/listItem";
import "./styles/style.css"

import "./assets/instagram.svg"

const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imgLink: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },

  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imgLink: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },

  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imgLink: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },

  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imgLink: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo Teamfight Tactics",
  },
];


const channelListData = [
  {          
    url:"https://www.twitch.tv/maykbrito",
    imgLink:"https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt:"Imagem de Mayk Brito" 
  },
    
  {
    url:"https://www.twitch.tv/alanzoka",        
    imgLink:"https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-300x300.png", alt:"Imagem de Alanzoka"
  },

  {
    url:"https://www.twitch.tv/cellbit",
    imgLink:"https://yt3.googleusercontent.com/ytc/AIdro_my6RgKNilskI1iksXY4uQyRuKjxiLNJZBArAjCeg=s900-c-k-c0x00ffffff-no-rj",
    alt:"Imagemd de Cellbit",   
  },  
];

const socialListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imgLink: "/assets/twitch.svg",
    alt: "Imagem da twitch"
  },
  {
    url: "https://www.twitter.com/maykbrito",
    imgLink: "/assets/twitter.svg",
    alt: "Imagem do twitter"
  },
  {
    url: "https://www.instagram.com/maykbrito",
    imgLink: "/assets/instagram.svg",
    alt: "Imagem do instagram"
  },
  {
    url: "https://www.youtube.com/maykbrito",
    imgLink: "/assets/youtube.svg",
    alt: "Imagem do youtube"
  },
]

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          name="Meus jogos"
          description="Os games que eu mais curto jogar!"
        >
          {gameListData.map(function (item) {
            return (
              <ListItem url={item.url} imgLink={item.imgLink}/>
            );
          })}
        </Section>

        <Section
          className = "channel-list"
          name="Canais e streamers"
          description="Lista de canais e transmissões que não perco!"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem url={item.url} imgLink={item.imgLink} alt={item.alt} />
            );
          })}
        </Section>
        <Section
        name="Minhas redes"
        description="Se conecte comigo agora mesmo!"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem url={item.url} imgLink={item.imgLink} alt={item.alt}/>
            );
          })}
        </Section>
      </main>
    </div>
  );
}
