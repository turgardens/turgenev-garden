import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import * as Three from 'three';

import styles from './scrollEight.module.scss';

const ThreeDAnimation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        // Получаем размеры окна браузера
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Создаем рендерер с указанием размеров
        const renderer = new Three.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(width, height);

        const scene = new Three.Scene();
        const camera = new Three.PerspectiveCamera(75, width / height, 0.1, 1000);

        renderer.setClearColor(0xffffff);
        const geometry = new Three.SphereGeometry(1, 32, 32);
        const material = new Three.MeshBasicMaterial({ color: 0x118888 });
        const head = new Three.Mesh(geometry, material);
        scene.add(head);

        const eyeGeometry = new Three.SphereGeometry(0.1, 32, 32);
        const eyeMaterial = new Three.MeshBasicMaterial({ color: 0x000000 });
        const leftEye = new Three.Mesh(eyeGeometry, eyeMaterial);
        const rightEye = new Three.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.3, 0.2, 0.9);
        rightEye.position.set(0.3, 0.2, 0.9);
        head.add(leftEye);
        head.add(rightEye);

        camera.position.z = 5;

        // Обработчик движения мыши
        function handleMouseMove(event) {
            // Получаем координаты мыши относительно центра холста
            const mouseX = event.clientX - canvas.clientWidth / 2;
            const mouseY = event.clientY - canvas.clientHeight / 2;

            // Изменяем вращение куба в соответствии с координатами мыши
            head.rotation.x = mouseY * 0.001;
            head.rotation.y = mouseX * 0.001;
        }

        // Добавляем обработчик события движения мыши
        canvas.addEventListener('mousemove', handleMouseMove);

        function animate() {
            requestAnimationFrame(animate);

            // Вращаем куб постоянно
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();

        // Очищаем обработчик события при размонтировании компонента
        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={styles.canvasContainer}>
            <canvas className={styles.canvas} ref={canvasRef} />
        </div>
    );
};

export default ThreeDAnimation;