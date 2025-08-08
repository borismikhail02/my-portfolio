import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function DeconstructedBrain() {
    const mountRef = useRef(null);
    const initializedRef = useRef(false);

    useEffect(() => {
        // Preventing duplications during Strict Mode React startup
        if (initializedRef.current) return;
        initializedRef.current = true;

        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup
        const frustumSize = mountRef.current.clientWidth / 200;
        const aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        const camera = new THREE.OrthographicCamera(
            (-frustumSize * aspect) / 2,
            (frustumSize * aspect) / 2,
            frustumSize / 2,
            -frustumSize / 2,
            0.1,
            1000
        );
        camera.position.z = 10;

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

        // Calculating top left pos to world space
        const getFinalWorldPosition = () => {
            const logoElement = document.getElementById("logo");
            if (!logoElement || !mountRef.current) return new THREE.Vector3();

            const logoRect = logoElement.getBoundingClientRect();
            
            const ndcX = (logoRect.left + logoRect.width / 2) / window.innerWidth * 2 - 1;
            const ndcY = -((logoRect.top + logoRect.height / 2) / window.innerHeight * 2 - 1);

            const ndc = new THREE.Vector3(ndcX, ndcY, 0); // z = 0 = cube depth
            return ndc.unproject(camera); // Converts screen pos to 3D world position
        };

        // Deconstructed Brain model
        const loader = new GLTFLoader();
        loader.load("src/assets/brain5.glb", (gltf) => {
            const brainMesh = gltf.scene.children[0]; //first mesh in scene
            brainMesh.geometry.center();

            const edges = new THREE.EdgesGeometry(brainMesh.geometry);
            const material = new THREE.LineBasicMaterial({ color: 0x00ffcc });

            const segments = [];
            const positions = edges.attributes.position.array;

            for (let i = 0; i < positions.length; i += 6) {
                const lineGeometry = new THREE.BufferGeometry();
                const lineVerticies = new Float32Array(positions.slice(i, i + 6));
                lineGeometry.setAttribute(
                    "position",
                    new THREE.BufferAttribute(lineVerticies, 3)
                );

                const line = new THREE.Line(lineGeometry, material);
                scene.add(line);

                line.rotation.x -= 0.25;

                const originalPos = line.position.clone();
                const randomTargetOffset = new THREE.Vector3(
                    (Math.random() - 0.5) * 8,
                    (Math.random() - 0.5) * 3,
                    (Math.random() - 0.5) * 4 
                );
                const finalTargetPos = getFinalWorldPosition();
                
                const delay = Math.random() * 0.3;
    
                /**const marker = new THREE.Mesh(
                    new THREE.SphereGeometry(0.05),
                    new THREE.MeshBasicMaterial({ color: 0xff0000 })
                );
                marker.position.copy(finalTargetPos);
                scene.add(marker);*/

                segments.push({
                    line,
                    originalPos,
                    randomTargetPos: originalPos.clone().add(randomTargetOffset),
                    finalTargetPos,
                    delay 
                });
            };

            const easeInOutCubic = (t) => {
                return t < 0.5
                    ? 4 * t * t * t
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
            };
            
            // Animation loop
            const animate = () => {
                segments.forEach(({ line, originalPos, randomTargetPos, finalTargetPos, delay }) => {
                    const totalDuration = 1 - delay;
                    const localProgress = THREE.MathUtils.clamp((scrollProgress - delay) / totalDuration, 0, 1);
                    //const adjustedProgress = THREE.MathUtils.clamp(scrollProgress - delay, 0, 1);
                    const easedProgress = easeInOutCubic(localProgress);
                    let intermediatePos = new THREE.Vector3();
    
                    if (localProgress < 0.5) {
                        const phaseProgress = easedProgress / 0.5;
                        intermediatePos.lerpVectors(originalPos, randomTargetPos, phaseProgress);
                    } else {
                        const phaseProgress = (easedProgress - 0.5) / 0.5;                        
                        intermediatePos.lerpVectors(randomTargetPos, finalTargetPos, phaseProgress);
                        scaleFactor = THREE.MathUtils.lerp(1, 0.3, phaseProgress);
                    };
    
                    line.position.copy(intermediatePos);
                    line.rotation.y += 0.01;
                    line.scale.set(scaleFactor, scaleFactor, scaleFactor);
                });
    
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            };
            animate();
        });

        // Scroll handling
        let scrollProgress = 0;

        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            const maxScroll = 800;
            scrollProgress = Math.min(scrollY / maxScroll, 1);
        });
        
        let scaleFactor = 1;


        // Resize handling
        const resizeHandler = () => {
            if (!mountRef.current) return;

            camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
            camera.left = (-frustumSize * aspect) / 2;
            camera.right = (frustumSize * aspect) / 2;
            camera.top = frustumSize / 2;
            camera.bottom = -frustumSize / 2;
            
            camera.updateProjectionMatrix();
            renderer.setSize(
                mountRef.current.clientWidth,
                mountRef.current.clientHeight
            );

            const newFinalTargetPos = getFinalWorldPosition();
            segments.forEach(segment => {
                segment.finalTargetPos.copy(newFinalTargetPos);
            });
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

    return <div ref={mountRef} className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999]"/>;
}