import {NavbarComponent} from "./navbarComponent";
import { TypeAnimation } from 'react-type-animation';
import {HeaderParticles} from "./particlesComponent";

export function HeaderComponent(){
    return(<header className="relative h-full w-full">
        {HeaderParticles()}
        {backgroundHeader()}
    </header>);
}

function backgroundHeader(){
    return (
        <div >
            <NavbarComponent/>
            {textHeader()}
        </div>

    );
}
function textHeader(){
    return (<div className="absolute left-24 top-60">
        <TypeAnimation
            className="text-white"
            sequence={[
                'Potencia tu negocio',
                1000,
                '',
                1000,
                'Con Logiciel Applab',
                1000,
                '',
                1000,
                'Reinventa, Innova, Crece',
                2000,
                '',
                1000,

                () => {
                    console.log('Done typing!');
                }
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em'}}
        />
    </div>);
}