/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: LukeModels75 (https://sketchfab.com/lucasgamerbdf)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/realistic-smartphone-3d-model-77e5794dde144965b5bd4aeab9cb50e8
Title: Realistic Smartphone 3D Model
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Smartphone = (props) => {
	const { nodes, materials } = useGLTF(
		"/models/Realistic Smartphone 3D Model.glb",
	);
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
					<group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Glass_Material_0.geometry}
							material={materials.Material}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Glass_Glass_0.geometry}
							material={materials.Glass}
						/>
					</group>
					<group
						position={[-81.215, -3.042, 34.447]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={[9.16, 9.16, 1.593]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube001_Cam1_0.geometry}
							material={materials.Cam1}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube001_Glass_0.geometry}
							material={materials.Glass}
						/>
					</group>
					<group
						position={[-84.369, -2.716, 17.499]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={[4.249, 4.249, 0.739]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube003_Cam1_0.geometry}
							material={materials.Cam1}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube003_Material002_0.geometry}
							material={materials["Material.002"]}
						/>
					</group>
					<group
						position={[-71.019, -3.042, 17.478]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={[9.16, 9.16, 1.593]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube005_Cam1_0.geometry}
							material={materials.Cam1}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube005_Glass_0.geometry}
							material={materials.Glass}
						/>
					</group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cube004_base_0.geometry}
						material={materials.base}
						position={[-57.462, -2.476, 17.499]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={[4.249, 4.249, 0.739]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Glass001_base_0.geometry}
						material={materials.base}
						position={[0, -1.307, 0]}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>
				</group>
			</group>
		</group>
	);
};

useGLTF.preload("/models/Realistic Smartphone 3D Model.glb");

export default Smartphone;