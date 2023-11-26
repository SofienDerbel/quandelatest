"use client"
import Image from 'next/image'
import styles from './page.module.css'
import armMotor from '../app/imgs/ArmMotor.png';
import { useState } from 'react';

export default function Home() {
  const [rotationDegree, setRotationDegree] = useState(0);
  const [customRotationValue, setCustomRotationValue] = useState(0);

  const customRotation = () => {
    const newRotationDegree = rotationDegree + parseInt(customRotationValue, 10);
    setRotationDegree(newRotationDegree % 360);
  };

  const rotateMotor = () => {
    const newRotationDegree = rotationDegree + 45;
    setRotationDegree(newRotationDegree % 360);
  };

  const getRotationDegree = () => {
    alert("Rotation degree : " + rotationDegree);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}> Motor Pilot</code>
        </p>
        <div>
          <a target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            QUANDELA
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          priority
          alt='Arm Motor image'
          src={armMotor}
          width={350}
          height={350}
          style={{
            position: 'relative',
            transform: `rotate(${rotationDegree}deg)`
          }}
        />
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          onClick={rotateMotor}
        >
          <h2>
            Rotate motor <span>-&gt;</span>
          </h2>
          <p>45 Degree roration.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          onClick={getRotationDegree}
        >
          <h2>
            Get Position <span>-&gt;</span>
          </h2>
          <p>{rotationDegree}&nbsp;Degree.</p>
        </a>

        <a
          href="#"
          className={styles.card}

        >
          <h2>
            Custom rotation <span>-&gt;</span>
          </h2>
          <p>Enter the degree rotation to pilot the motor.</p>
          <input className={styles.customInput} type='number' min="0" placeholder="Enter custom degree rotation" onChange={(event) => setCustomRotationValue(event.target.value)} ></input>&nbsp;
          <button className={styles.customButton} onClick={customRotation}>Rotate</button>

        </a>


      </div>
    </main>
  )
}