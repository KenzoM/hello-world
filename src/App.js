import './App.css';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from "three";


function App() {
  // const imgs = ['logo192.png', 'logo192.png'];
  const imgs = ['logo512.png', 'dog.jpeg', 'cat.jpeg', 'owl.png', 'logo192.png'];
  // const poo = require('../public/logo192.png');
  // Random connected graph
  const gData = {
    nodes: imgs.map((img, id) => ({ id, img })),
    links: [...Array(imgs.length).keys()]
      .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id-1))
        }))
  };

  console.log(gData)
  return (
      <ForceGraph3D
        graphData={gData}
        nodeThreeObject={({ img }) => {
          console.log(img)
          const imgTexture = new THREE.TextureLoader().load(`./assets/images/${img}`)
          // const imgTexture = new THREE.TextureLoader().load(img)
          const material = new THREE.SpriteMaterial({ map: imgTexture });
          const sprite = new THREE.Sprite(material);
          sprite.scale.set(20, 20);

          return sprite;
        }}
      />
  );
}

// import imageVarName from “./imagepath”
// const loader = new THREE.TextureLoader();
// const material = new THREE.PointsMaterial({
// map: loader.load(imageVarName),

export default App;
