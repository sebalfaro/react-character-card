## CharacterCard Library

Esta librería provee una componente UI del tipo Card creada con React, Typescript, SASS y Vite para su reutilización

**Correr el proyecto de forma local**
- Clonar el [repositorio](https://github.com/sebalfaro/character-card)
 - Instalar las dependencias de forma local
	 - `npm run i`
 - Correr el servidor de desarrollo
	 - `npm run dev`
- El proyecto tiene test unitarios de 1 componente, para ejectuarlo
	 - `npm run test`
- La version para empaquetar la libreria se encuenta en la rama `lib`
3	
**Utilizar la librería como dependencia en un proyecto React**
- La libería se encuentra publicada en [npm](https://www.npmjs.com/package/@sebalfaro/card-library)
 - Para utilizarla puede en un proyecto React ejecute el comando
	 - `npm i react-character-card`
- La card tiene 3 variantes 
	- **small**
		```typescript
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
		```     
	- **medium**
		```typescript
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
		```
	- **large**
		```typescript
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
		```
