import { Card } from "./components/Card";
import img from "../public/character.png";

function App() {
  return (
    <main>
      <section>
        <Card size="s">
          <Card.Top size="s">
            <Card.FavChip position="right" />
            <Card.Media imgPath={img} alt="character image" />
          </Card.Top>
          <Card.Body size="s">
            <Card.Title>Morty Smith</Card.Title>
            <Card.Text>Humano</Card.Text>
          </Card.Body>
        </Card>

        <Card size="m">
          <Card.Top size="m">
            <Card.FavChip position="left" />
            <Card.Media imgPath={img} alt="character image" />
          </Card.Top>
          <Card.Body size="m">
            <Card.Heading>
              <Card.Column>
                <Card.Title>Morty Smith</Card.Title>
                <Card.Text>Humano</Card.Text>
              </Card.Column>
              <Card.Column>
                <Card.Chip text="Vivo" status="active" />
              </Card.Column>
            </Card.Heading>
            <Card.Box>
              <Card.Column>
                <Card.Bold>Last known location</Card.Bold>
                <Card.Text>Story Train</Card.Text>
              </Card.Column>
              <Card.Column>
                <Card.Bold>First seen in</Card.Bold>
                <Card.Text>Never Ricking Morty</Card.Text>
              </Card.Column>
            </Card.Box>
          </Card.Body>
        </Card>
        <Card size="l">
          <Card.Top size="l">
            <Card.FavChip position="left" />
            <Card.Media imgPath={img} alt="character image" />
          </Card.Top>
          <Card.Body size="l">
            <Card.Heading>
              <Card.Column>
                <Card.Title>Morty Smith</Card.Title>
                <Card.Text>Humano</Card.Text>
              </Card.Column>
              <Card.Column>
                <Card.Chip text="Vivo" status="active" />
              </Card.Column>
            </Card.Heading>
            <Card.Box>
              <Card.Column>
                <Card.Bold>Last known location</Card.Bold>
                <Card.Text>Story Train</Card.Text>
              </Card.Column>
              <Card.Column>
                <Card.Bold>First seen in</Card.Bold>
                <Card.Text>Never Ricking Morty</Card.Text>
              </Card.Column>
            </Card.Box>
          </Card.Body>
        </Card>
      </section>
    </main>
  );
}

export default App;
