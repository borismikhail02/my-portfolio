import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function DeconstructedCube() {
    const mountRef = useRef(null);
    const initializedRef = useRef(false);

    useEffect(() => {
        // Preventing duplications during Strict Mode React startup
        if (initializedRef.current) return;
        initializedRef.current = true;

        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup
        /**const camera = new THREE.PerspectiveCamera(
            90,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;*/
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


        // Deconstructed Cube
        const geometry = new THREE.BoxGeometry();
        const edges = new THREE.EdgesGeometry(geometry);
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

            //line.position.set(0,-3,0)
            const originalPos = line.position.clone();
            
            const randomTargetOffset = new THREE.Vector3(
                (Math.random() - 0.5) * 4, // X offset between -2 and 2
                (Math.random() - 0.5) * 3, // Y offset between 0 and 4
                (Math.random() - 0.5) * 4 // Z offset between -2 and 2
            );
            const finalTargetPos = getFinalWorldPosition();

            const marker = new THREE.Mesh(
                new THREE.SphereGeometry(0.05),
                new THREE.MeshBasicMaterial({ color: 0xff0000 })
            );
            marker.position.copy(finalTargetPos);
            scene.add(marker);


            segments.push({
                line,
                originalPos,
                randomTargetPos: originalPos.clone().add(randomTargetOffset),
                finalTargetPos, 
            });
        };

        // Scroll handling
        let scrollProgress = 0;

        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            const maxScroll = 500;
            scrollProgress = Math.min(scrollY / maxScroll, 1);
        });
        

        // Animation loop
        const animate = () => {
            segments.forEach(({ line, originalPos, randomTargetPos, finalTargetPos }) => {
                let intermediatePos = new THREE.Vector3();

                if (scrollProgress < 0.5) {
                    intermediatePos.lerpVectors(originalPos, randomTargetPos, scrollProgress / 0.5);
                } else {
                    intermediatePos.lerpVectors(randomTargetPos, finalTargetPos, (scrollProgress - 0.5) / 0.5);
                };

                line.position.copy(intermediatePos);
                line.rotation.x += 0.01;
                line.rotation.y += 0.01;
            });

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

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