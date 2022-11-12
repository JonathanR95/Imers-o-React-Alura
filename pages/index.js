import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {

    //const mensagem = "Benvindo ao SoberanaPlay!";
    const estilosDaHomePage = { 
        // background: "red" 
    };

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    

    return (
        <>
        <CSSReset/>
        <div style={{
            display:"flex",
            flexDirection:"column",
            flex:1
        }}>
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
            <Header />
            <TimeLine searchValue={valorDoFiltro}
            playlists={config.playlists} ></TimeLine>
        </div>
        </>
        
    );
}

export default HomePage;

const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px;
        gap:16px ; 
    }
  `;
  const StyledBanner = styled.div`
    background-image: url(${config.bg});
    background-repeat: no-repeat, repeat;
    background-size: cover;
    height: 500px;
  `;
function Header() {
    return (
        <StyledHeader>
            <StyledBanner/>
            {/* <img src="" alt="banner"/> */}
            <section className="user-info">
                <img src={config.imagem} alt="foto-perfil" />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    );
}

function TimeLine({searchValue, ...props}) {
    console.log("Dentro do componente", props.playlists);
    const playlistName = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {
                playlistName.map( (playlistName) => {
                    const videos = props.playlists[playlistName];
                    return (
                        <section key={(playlistName)}>
                            <h2>{playlistName}</h2>
                            <div>
                                {videos.filter((video)=>{
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                }).map((videos) => {
                                    return (
                                        <a key={videos.url} href={videos.url}>
                                            <img src={videos.thumb} />
                                            <span>
                                                {videos.title}
                                            </span>
                                        </a>

                                    )
                                })}
                            </div>
                        </section>
                    )
                })}
        </StyledTimeline>
    );
}