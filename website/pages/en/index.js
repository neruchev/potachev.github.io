const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Index extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    const { baseUrl, docsUrl } = siteConfig;

    const Block = (props) => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              "Сборник посвящений русским поэтам. Вышел в Нижнем Новгороде в 2010 г." +
              "\n\n" +
              `[читать](${baseUrl}${docsUrl}/lermontov.html)`,
            image: `${baseUrl}img/poety_russkie.png`,
            imageAlign: "left",
            title: "Поэты русские",
            subTitle: "2010",
            imageLink: `${baseUrl}${docsUrl}/lermontov.html`,
          },
        ]}
      </Block>
    );

    return (
      <div>
        <div className="mainContainer">
          <TryOut />
        </div>
      </div>
    );
  }
}

module.exports = Index;
