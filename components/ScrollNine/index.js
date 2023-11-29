import React, { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

import styles from './scrollNine.module.scss';

const ScrollNine = () => {
    const containerRef = useRef();
    const chairRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 500);

        // Настройка позиции камеры
        camera.position.set(0, 5, 10); // Измените значения x, y, z, чтобы настроить позицию камеры

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor(0xffffff);
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        const light = new THREE.DirectionalLight(0xffffff, 3);
        light.position.set(2, 5, 4);
        light.castShadow = true; // Включить тень для этого источника света
        scene.add(light);

        const loader = new GLTFLoader();
        loader.load('../../assets/models/chair.gltf', (gltf) => {
            const chair = gltf.scene;
            chairRef.current = chair;
            scene.add(chair);
        });

        const animate = () => {
            requestAnimationFrame(animate);

            // Поворот стула
            if (chairRef.current) {
                chairRef.current.rotation.y += 0.002; // Увеличьте значение, чтобы увеличить скорость вращения
            }

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div className={styles.containerObject} ref={containerRef} />;
};

export default ScrollNine;