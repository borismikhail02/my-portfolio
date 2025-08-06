import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WireframeCube() {
    const mountRef = useRef(null);
    const initializedRef = useRef(false);

    useEffect(() => {
        // Preventing duplications during Strict Mode React startup
        if (initializedRef.current) return;
        initializedRef.current = true;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x101828);

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

        // Wireframe Cube
        const geometry = new THREE.BoxGeometry();
        const edges = new THREE.EdgesGeometry(geometry);
        const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
        const wireframeCube = new THREE.LineSegments(edges, material);
        scene.add(wireframeCube);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
        scene.add(ambientLight);

        // Animation loop
        const animate = () => {
            wireframeCube.rotation.x += 0.01;
            wireframeCube.rotation.y += 0.01;
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

            geometry.dispose();
            material.dispose();
            renderer.dispose();

            if (mountRef.current?.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            };
        };
    });

    return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}/>;
}