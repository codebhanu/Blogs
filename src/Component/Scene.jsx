import {  useFrame } from '@react-three/fiber';
import { Line, Sphere } from '@react-three/drei';
import { Vector3 } from 'three';
import React, { useRef,  useState } from 'react';


const numDots = 150;
const maxDistance = 1.4;

const generateDot = () => ({
  position: new Vector3(Math.random() * 10 - 5, Math.random() * 10 - 5, 0),
  velocity: new Vector3((Math.random() - 0.9) * 0.03, (Math.random() - 0.5) * 0.03, 0)
});

const dots = Array.from({ length: numDots }, generateDot);

function Dot({ dot, setElectricFlow }) {
  const ref = useRef();

  useFrame(() => {
    dot.position.add(dot.velocity);
    if (dot.position.x > 10 || dot.position.x < -10) dot.velocity.x *= -1;
    if (dot.position.y > 5 || dot.position.y < -5) dot.velocity.y *= -1;
    ref.current.position.copy(dot.position);
  });

  return (
    <Sphere
      ref={ref}
      args={[0.08, 16, 16]}
      position={dot.position}
      onClick={() => setElectricFlow(dot)}
    >
      <meshBasicMaterial attach="material" color="#c3c7c4" />
    </Sphere>
  );
}

function Lines({ connections, electricFlow }) {
  return connections.map((connection, index) => (
    <Line
      key={index}
      points={[connection.start, connection.end]}
      color={(electricFlow && (electricFlow.start === connection.start || electricFlow.end === connection.end)) ? 'red' : '#c3c7c4'}
      lineWidth={(electricFlow && (electricFlow.start === connection.start || electricFlow.end === connection.end)) ? 2 : 1}
    />
  ));
}

function Scene() {
  const [electricFlow, setElectricFlow] = useState(null);
  const [connections, setConnections] = useState([]);

  useFrame(() => {
    const newConnections = [];
    for (let i = 0; i < numDots; i++) {
      for (let j = i + 1; j < numDots; j++) {
        const distance = dots[i].position.distanceTo(dots[j].position);
        if (distance < maxDistance) {
          newConnections.push({ start: dots[i].position, end: dots[j].position });
        }
      }
    }
    setConnections(newConnections);
  });

  return (
    <>
      {dots.map((dot, index) => (
        <Dot key={index} dot={dot} setElectricFlow={setElectricFlow} />
      ))}
      <Lines connections={connections} electricFlow={electricFlow} />
    </>
  );
}

export default Scene