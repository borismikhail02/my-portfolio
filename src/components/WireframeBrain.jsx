import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function WireframeBrain() {
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
        
        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
        scene.add(ambientLight);
        
        // Brain model
        const loader = new GLTFLoader();
        loader.load("src/assets/brain5.glb", (gltf) => {
            const brainMesh = gltf.scene.children[0]; //first mesh in scene
            brainMesh.geometry.center();

            const edges = new THREE.EdgesGeometry(brainMesh.geometry);
            const material = new THREE.LineBasicMaterial({ color: 0x00ffcc });
            const wireframeBrain = new THREE.LineSegments(edges, material);

            wireframeBrain.scale.set(1.5, 1.5, 1.5);
            scene.add(wireframeBrain);
            wireframeBrain.rotation.x -= 0.25;
            
            // Animation loop
            const animate = () => {
                //wireframeBrain.rotation.x += 0.005;
                wireframeBrain.rotation.y += 0.01;
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            };
            animate();
        });


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
            renderer.dispose();
            if (mountRef.current?.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            };
        };
    });

    return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}/>;
}