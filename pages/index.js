import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = {
    //backgroundColor: "blue"
  };

  //console.log(config.playlist);

  return (
    <>
      <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
    }}>
        <Menu />
        <Header />
        <Timeline playlist={config.playlist}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
  }
  .user-info {
      margin-top: 50px;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/*<img src="banner" />*/}

      <section className="user-info">
        <img src={"https://avatars.githubusercontent.com/u/110912788?v=4"} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.cargo}
          </p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(propriedades) {
  //console.log("Dentro do componente", propriedades.playlist);
  const playlistNames = Object.keys(propriedades.playlist);
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistNames) => {
        const videos = propriedades.playlist[playlistNames];
        console.log(playlistNames);
        console.log(videos);
        return (
          <section>
            <h2> {playlistNames}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
