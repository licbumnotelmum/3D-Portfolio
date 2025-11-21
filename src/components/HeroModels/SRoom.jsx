import React from 'react'
import { useGLTF } from '@react-three/drei'

export function SRoom(props) {
  const { nodes, materials } = useGLTF('/models/room_simple.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.018, 0, 0.407]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.385}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={5.2}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.009']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['Material.010']} />
          </group>
          <group position={[-5.218, 1.892, 0.291]}>
            <mesh geometry={nodes.Object_7.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.Material} />
          </group>
          <group position={[-1.188, 0.657, -3.129]} scale={[3.463, 0.397, 1.436]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.011']} />
            <mesh geometry={nodes.Object_13.geometry} material={materials['Material.010']} />
            <mesh geometry={nodes.Object_14.geometry} material={materials['Material.002']} />
          </group>
          <group position={[-2.428, 1.901, 3.786]} rotation={[0, Math.PI / 2, 0]} scale={[0.301, 0.019, 0.738]}>
            <mesh geometry={nodes.Object_16.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Object_17.geometry} material={materials['Material.004']} />
          </group>
          <group position={[1.405, 0.642, 4.098]} rotation={[0, -0.417, 0]} scale={0.398}>
            <mesh geometry={nodes.Object_19.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Object_20.geometry} material={materials['Material.016']} />
          </group>
          <group position={[2.366, 4.033, 4.911]} scale={[0.709, 1.281, 0.071]}>
            <mesh geometry={nodes.Object_22.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Object_23.geometry} material={materials['Material.004']} />
          </group>
          <mesh geometry={nodes.Object_10.geometry} material={materials['Material.003']} position={[-1.247, 1.592, 2.086]} rotation={[0, Math.PI / 4, 0]} scale={[-0.082, 0.082, 0.082]} />
          <mesh geometry={nodes.Object_25.geometry} material={materials['Material.008']} position={[-4.889, 5.198, 1.402]} scale={0.21} />
          <mesh geometry={nodes.Object_27.geometry} material={materials.material_0} position={[-4.876, 3.027, -0.484]} rotation={[0, 0, -Math.PI / 2]} scale={[0.065, 1, 1.826]} />
          <mesh geometry={nodes.Object_29.geometry} material={materials['Material.001']} position={[-1.078, 1.626, 4.198]} scale={[0.547, 0.181, 0.547]} />
          <mesh geometry={nodes.Object_31.geometry} material={materials['Material.001']} position={[-4.149, 1.626, 1.47]} scale={[0.547, 0.181, 0.547]} />
          <mesh geometry={nodes.Object_33.geometry} material={materials['Material.001']} position={[-2.759, 1.891, 4.886]} scale={[2.393, 0.035, 0.028]} />
          <mesh geometry={nodes.Object_35.geometry} material={materials['Material.001']} position={[-4.884, 1.896, 2.909]} rotation={[0, Math.PI / 2, 0]} scale={[2.076, 0.029, 0.023]} />
          <mesh geometry={nodes.Object_37.geometry} material={materials['Material.001']} position={[-2.025, 1.088, -1.698]} scale={[4.31, 0.035, 0.028]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/room_simple.glb')
