import { useGLTF } from '@react-three/drei'

export function GULUM(props) {
  const { nodes, materials } = useGLTF('/build/GULUM/GULUM-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object004.geometry} material={materials['Material #2']} position={[-0.11, 3, -0.26]} scale={0.03} />
      <mesh geometry={nodes.Object006.geometry} material={materials['Material #4']} position={[-0.11, 2.99, -0.24]} scale={0.03} />
      <mesh geometry={nodes.Object007.geometry} material={materials['Material #5']} position={[-0.11, 3, -0.26]} scale={0.03} />
      <mesh geometry={nodes.Object009.geometry} material={materials['Material #5']} position={[-0.11, 3, -0.26]} scale={0.03} />
      <mesh geometry={nodes.Box120.geometry} material={materials['Material #7']} position={[0.08, 2.84, 0.86]} scale={0.03} />
      <mesh geometry={nodes.Object021.geometry} material={materials['Aluminum_Anodized_DarkGray #0']} position={[-1.96, 3.66, -0.21]} scale={0.03} />
    </group>
  )
}

useGLTF.preload('/build/GULUM/GULUM-transformed.glb')