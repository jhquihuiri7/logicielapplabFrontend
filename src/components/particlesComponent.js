import type {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";
import {useCallback} from "react";
import "../styles/tsparticles.css"

export  function HeaderParticles (){
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    const height = window.innerHeight
    return (
        <div style={
            {
                position:"relative",
                height: `${height}px`,
            }
        }>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#3a34eb",
                        },
                        image: "url('https://res.cloudinary.com/logicielapplab/image/upload/v1676302543/LogicielApplab/software-developer-6521720_1920_psc1wb-min_txftqk.jpg",
                        position: "center",
                        size: "100% 100% cover",
                        repeat: "repeat",
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                    fullScreen: {
                        enable: false,
                        zIndex: 0
                    }
                }}
            />
        </div>
    );
}