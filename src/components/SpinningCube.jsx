import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SpinningCube() {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(
            mountRef.current.clientWidth,
            mountRef.current.clientHeight
        );
        mountRef.current.appendChild(renderer.domElement);

        // Cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Lights
        const pointLight = new THREE.PointLight(0xffffff, 100, 100);
        pointLight.position.set(2, 10, 10);
        scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
        scene.add(ambientLight);

        // Animation loop
        const animate = () => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // Resize handling
        const resizeHandler = () => {
            if (!mountRef.current) return;

            camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(
                mountRef.current.clientWidth,
                mountRef.current.clientHeight
            );
        };
        window.addEventListener("resize", resizeHandler);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("resize", resizeHandler);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            };
        };
    }, []);

    return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}/>;
}