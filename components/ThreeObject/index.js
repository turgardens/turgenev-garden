import React, { useRef, useEffect } from 'react';

// Библиотеки для рендера 3d объекта
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

import { useThreeObject } from '../../context';
import * as THREE from 'three';

// Библиотеки для анимации объекта при скролле
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

import styles from './threeObject.module.scss';

const ThreeObject = ({ maxRotate, middleRotate, minRotate }) => {
    const containerRef = useRef();
    const juiceRef = useRef();
    const cameraRef = useRef();

    const { juiceObject, setJuiceObject, isLoaded, setLoaded } = useThreeObject(); // Используйте контекст для хранения и доступа к объекту

    useEffect(() => {
        // Добавление сцены, объекта, камеры и света
        const container = containerRef.current;
        const scene = new THREE.Scene();

        const fov = 5; // или другое значение, подходящее для вашей сцены
        const aspect = container.offsetWidth / container.offsetHeight;
        const near = 0.1; // Ближайшая плоскость обзора
        const far = 500; // Дальняя плоскость обзора
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        cameraRef.current = camera;

        camera.position.set(0, 0, 0); // Измените значения x, y, z, чтобы настроить позицию камеры

        // Удаление существующих элементов canvas
        const existingCanvases = container.querySelectorAll('canvas');
        existingCanvases.forEach(canvas => container.removeChild(canvas));

        // Создание и добавление нового элемента canvas
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        const light = new THREE.DirectionalLight(0xffffff, 4);
        light.position.set(0, 2, 3);
        light.castShadow = true; // Включить тень для этого источника света

        light.shadow.mapSize.width = 1024; // Ширина текстуры тени
        light.shadow.mapSize.height = 1024; // Высота текстуры тени
        light.shadow.camera.near = 0.5; // Ближняя плоскость тени
        light.shadow.camera.far = 50; // Дальняя плоскость тени
        light.shadow.bias = -0.001; // Смещение тени (может потребоваться настроить в зависимости от сцены)

        scene.add(light);

        // Функция обработки изображения
        const processedObject = (object) => {
            // Перебор всех дочерних объектов
            object.traverse((child) => {
                if (child.isMesh) {
                    child.geometry.center();
                }
            });

            juiceRef.current = object;
            scene.add(object);

            // Рассчитываем bounding box для объекта
            const boundingBox = new THREE.Box3().setFromObject(object);

            // Рассчитываем размеры bounding box
            const size = new THREE.Vector3();
            boundingBox.getSize(size);

            // Рассчитываем центр bounding box
            const center = new THREE.Vector3();
            boundingBox.getCenter(center);

            // Рассчитываем дальность, которая обеспечит видимость всего объекта
            const maxDim = Math.max(size.x, size.y, size.z);
            const distance = maxDim / (2 * Math.tan((camera.fov * Math.PI) / 360));

            // Перерасчет размера при изменении размера окна
            const onWindowResize = () => {
                const width = container.offsetWidth;
                const height = container.offsetHeight;

                // Обновление размеров рендерера
                renderer.setSize(width, height);

                // Обновление аспекта камеры и перерасчет матрицы проекции
                camera.aspect = width / height;
                camera.updateProjectionMatrix();

                // Расчет масштаба объекта относительно размера контейнера
                if (juiceRef.current) {
                    const boundingBox = new THREE.Box3().setFromObject(juiceRef.current);
                    const size = boundingBox.getSize(new THREE.Vector3());

                    // Выберите фактор масштабирования в зависимости от соотношений размеров объекта и контейнера
                    const scale = Math.min(width / size.x, height / size.y, height / size.z);

                    // Применение масштаба к объекту
                    juiceRef.current.scale.set(scale, scale, scale);
                }
            };


            // Добавление обработчика события resize
            window.addEventListener('resize', onWindowResize);

            // Настройка позиции и направления камеры
            camera.position.copy(center);
            camera.position.z += distance;
            camera.lookAt(center);

            if (maxRotate) {
                juiceRef.current.rotation.y = -1.8;

                gsap.to(juiceRef.current.rotation, {
                    y: 16, // Полное вращение вокруг оси Y
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }

            if (minRotate) {
                juiceRef.current.rotation.y = -1;

                gsap.to(juiceRef.current.rotation, {
                    y: 0.4, // Полное вращение вокруг оси Y
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                });
            }

            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            };

            animate();



            const cleanup = () => {
                // Очистить сцену
                scene.traverse((object) => {
                    if (object instanceof THREE.Mesh) {
                        // Освободить ресурсы, связанные с каждым Mesh
                        object.geometry.dispose();
                        object.material.dispose();
                    }
                });

                // Удалить все объекты из сцены
                while (scene.children.length > 0) {
                    scene.remove(scene.children[0]);
                }

                // Установить текущую камеру в null
                cameraRef.current = null;

                // Освободить ресурсы, связанные с WebGLRenderer
                renderer.dispose();
            };



            return () => {
                cleanup();
                // Удаление обработчика события resize при очистке
                window.removeEventListener('resize', onWindowResize);
                container.removeChild(renderer.domElement);
            };
        }

        // Функция для добавления объекта в сцену, если он уже загружен
        const addObjectToScene = (object) => {
            scene.add(object);
            processedObject(object);
        };

        if (!juiceObject) {
            const loader = new GLTFLoader();
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.1/');
            loader.setDRACOLoader(dracoLoader);

            loader.load('../../assets/models/juice.glb', (gltf) => {
                const juice = gltf.scene;

                setJuiceObject(juice);
                setLoaded(true);

                processedObject(juice);
            });
        } else {
            addObjectToScene(juiceObject);
        }
    }, []);

    return (
        <>
            {/* <div className={`${styles.containerObject} ${isLoaded ? styles.active : ''}`} ref={containerRef} /> */}
            <div key={'canvas1'} className={`canvas ${styles.containerObject}`} ref={containerRef} />
        </>
    )
};

export default ThreeObject;