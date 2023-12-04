import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

import styles from './threeObject.module.scss';

gsap.registerPlugin(ScrollTrigger);

const ThreeObject = () => {
    const [isLoaded, setLoaded] = React.useState(false);

    const containerRef = useRef();
    const juiceRef = useRef();
    const cameraRef = useRef();

    console.log(isLoaded);

    useEffect(() => {
        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(1, container.offsetWidth / container.offsetHeight, 0.1, 500);
        cameraRef.current = camera;

        // Настройка позиции камеры
        camera.position.set(10, 120, 80); // Измените значения x, y, z, чтобы настроить позицию камеры

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Установка alpha в true
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        const light = new THREE.DirectionalLight(0xffffff, 4);
        light.position.set(0, 2, 3);
        light.castShadow = true; // Включить тень для этого источника света

        // Настройки тени
        light.shadow.mapSize.width = 1024; // Ширина текстуры тени
        light.shadow.mapSize.height = 1024; // Высота текстуры тени
        light.shadow.camera.near = 0.5; // Ближняя плоскость тени
        light.shadow.camera.far = 50; // Дальняя плоскость тени
        light.shadow.bias = -0.001; // Смещение тени (может потребоваться настроить в зависимости от сцены)

        scene.add(light);

        const loader = new GLTFLoader();
        loader.load('../../assets/models/juice.gltf', (gltf) => {
            const juice = gltf.scene;

            // Перебираем все материалы в модели
            juice.traverse((child) => {
                if (child.isMesh) {
                    // Устанавливаем альфа-тест для учета альфа-канала
                    child.material.alphaTest = 0.5; // Установите значение в зависимости от вашей текстуры

                    // Включаем альфа-блендинг
                    child.material.transparent = true;
                }
            });

            juiceRef.current = juice;
            scene.add(juice);

            // Рассчитываем bounding box для объекта
            const boundingBox = new THREE.Box3().setFromObject(juice);

            // Рассчитываем размеры bounding box
            const size = new THREE.Vector3();
            boundingBox.getSize(size);

            // Рассчитываем центр bounding box
            const center = new THREE.Vector3();
            boundingBox.getCenter(center);

            // Рассчитываем дальность, которая обеспечит видимость всего объекта
            const maxDim = Math.max(size.x, size.y, size.z);
            const distance = maxDim / (2 * Math.tan((camera.fov * Math.PI) / 360));

            // Настройка позиции и направления камеры
            camera.position.copy(center);
            camera.position.z += distance;
            camera.lookAt(center);

            juiceRef.current.rotation.y = 0.1;

            setLoaded(true);

            gsap.to(juiceRef.current.rotation, {
                y: -0.4, // Полное вращение вокруг своей оси Z
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: container,
                    start: 'center bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
        });

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            container.removeChild(renderer.domElement);
        };
    }, []);

    return <div className={`${styles.containerObject} ${isLoaded ? styles.active : ''}`} ref={containerRef} />
};

export default ThreeObject;