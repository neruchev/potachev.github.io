const React = require("react");

const { Container, GridBlock } = require("../../core/CompLibrary.js");

const Index = ({ config }) => {
  const { baseUrl, docsUrl } = config;

  return (
    <div className="mainContainer">
      <Container id="try">
        <GridBlock
          align="left"
          contents={[
            {
              content:
                "Сборник посвящений русским поэтам. Вышел в Нижнем Новгороде в 2010 г." +
                "\n\n" +
                `[читать](${baseUrl}${docsUrl}/poety-russkie.html)`,
              image: `${baseUrl}img/poety_russkie.png`,
              imageAlign: "left",
              title: "Поэты русские",
              subTitle: "2010",
              imageLink: `${baseUrl}${docsUrl}/poety-russkie.html`,
            },
          ]}
        />
      </Container>
    </div>
  );
};

module.exports = Index;
