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

    console.log(config.playlists);

    return (
        <>
        <CSSReset/>
        <div style={estilosDaHomePage}>
            <Menu/>
            <Header />
            <TimeLine playlists={config.playlists} />
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
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px;
        gap:16px ; 
    }
  `;
function Header() {
    return (
        <StyledHeader>
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

function TimeLine(props) {
    console.log("Dentro do componente", props.playlists);
    const playlistName = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {
                playlistName.map( (playlistName) => {
                    const videos = props.playlists[playlistName];
                    return (
                        <section>
                            <h2>{playlistName}</h2>
                            <div>
                                {videos.map((videos) => {
                                    return (
                                        <a href={videos.url}>
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